
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import apiServerClient from '@/lib/apiServerClient';

const CheckoutButton = ({ courseName, price, label = 'Enroll now' }) => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
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
      toast.error('Failed to start checkout. Please try again.');
      console.error('Checkout error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button 
      onClick={handleCheckout} 
      disabled={loading}
      className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
    >
      {loading ? 'Processing...' : label}
    </Button>
  );
};

export default CheckoutButton;
