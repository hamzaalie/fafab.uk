
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import apiServerClient from '@/lib/apiServerClient';

const CheckoutButton = ({ courseId, courseName, price, label = 'Pay with Stripe' }) => {
  const [loadingProvider, setLoadingProvider] = useState(null);

  const courseKey = (courseId || courseName || '').toLowerCase().replace(/[^a-z0-9]+/g, '_');
  const fallbackStripeLinks = {
    recruitment_training: import.meta.env.VITE_STRIPE_LINK_RECRUITMENT || '',
    security_training: import.meta.env.VITE_STRIPE_LINK_SECURITY || '',
    cleaning_training: import.meta.env.VITE_STRIPE_LINK_CLEANING || '',
  };
  const fallbackPayPalLinks = {
    recruitment_training: import.meta.env.VITE_PAYPAL_LINK_RECRUITMENT || '',
    security_training: import.meta.env.VITE_PAYPAL_LINK_SECURITY || '',
    cleaning_training: import.meta.env.VITE_PAYPAL_LINK_CLEANING || '',
  };

  const openFallbackLink = (provider) => {
    const linkMap = provider === 'stripe' ? fallbackStripeLinks : fallbackPayPalLinks;
    const fallbackUrl = linkMap[courseKey];
    if (!fallbackUrl) return false;

    window.open(fallbackUrl, '_blank');
    toast.info(`Opened ${provider === 'stripe' ? 'Stripe' : 'PayPal'} payment link.`);
    return true;
  };

  const getApiErrorMessage = async (response, fallback) => {
    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      const body = await response.json().catch(() => null);
      return body?.error || fallback;
    }

    const bodyText = await response.text().catch(() => '');
    if (contentType.includes('text/html') || bodyText.includes('<!doctype') || bodyText.includes('<html')) {
      return 'API endpoint is not reachable. Configure VITE_API_SERVER_URL to your backend.';
    }

    return fallback;
  };

  const handleStripeCheckout = async () => {
    setLoadingProvider('stripe');
    try {
      const response = await apiServerClient.fetch('/stripe/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: price * 100,
          productName: courseName,
          successUrl: window.location.origin + '/training/success?session_id={CHECKOUT_SESSION_ID}',
          cancelUrl: window.location.origin + '/training/cancel'
        })
      });

      if (!response.ok) {
        const message = await getApiErrorMessage(response, 'Stripe checkout failed');
        throw new Error(message);
      }

      const data = await response.json();
      if (!data?.url) {
        throw new Error('Stripe checkout URL missing from API response');
      }
      window.open(data.url, '_blank');
    } catch (error) {
      if (!openFallbackLink('stripe')) {
        toast.error(error.message || 'Failed to start Stripe checkout. Please try again.');
      }
      console.error('Checkout error:', error);
    } finally {
      setLoadingProvider(null);
    }
  };

  const handlePayPalCheckout = async () => {
    setLoadingProvider('paypal');
    try {
      const response = await apiServerClient.fetch('/paypal/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: Number(price),
          productName: courseName,
          successUrl: `${window.location.origin}/training/success?provider=paypal`,
          cancelUrl: `${window.location.origin}/training/cancel`
        })
      });

      if (!response.ok) {
        const message = await getApiErrorMessage(response, 'PayPal checkout failed');
        throw new Error(message);
      }

      const data = await response.json();
      if (!data?.url) {
        throw new Error('PayPal approval URL missing from API response');
      }
      window.open(data.url, '_blank');
    } catch (error) {
      if (!openFallbackLink('paypal')) {
        toast.error(error.message || 'Failed to start PayPal checkout. Please try again.');
      }
      console.error('PayPal checkout error:', error);
    } finally {
      setLoadingProvider(null);
    }
  };

  return (
    <div className="w-full space-y-2">
      <Button 
        onClick={handleStripeCheckout}
        disabled={loadingProvider !== null}
        className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
      >
        {loadingProvider === 'stripe' ? 'Processing...' : label}
      </Button>
      <Button
        onClick={handlePayPalCheckout}
        disabled={loadingProvider !== null}
        variant="outline"
        className="w-full border-[#0070ba] text-[#0070ba] hover:bg-[#0070ba] hover:text-white font-semibold"
      >
        {loadingProvider === 'paypal' ? 'Processing...' : 'Pay with PayPal'}
      </Button>
    </div>
  );
};

export default CheckoutButton;
