
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import apiServerClient from '@/lib/apiServerClient';

const CheckoutButton = ({ courseName, price, label = 'Pay with Stripe' }) => {
  const [loadingProvider, setLoadingProvider] = useState(null);

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
        throw new Error('Checkout failed');
      }

      const data = await response.json();
      window.open(data.url, '_blank');
    } catch (error) {
      toast.error('Failed to start Stripe checkout. Please try again.');
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
        throw new Error('PayPal checkout failed');
      }

      const data = await response.json();
      window.open(data.url, '_blank');
    } catch (error) {
      toast.error('Failed to start PayPal checkout. Please try again.');
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
