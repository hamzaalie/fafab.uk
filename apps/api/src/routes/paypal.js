import express from 'express';
import logger from '../utils/logger.js';

const router = express.Router();

const getPayPalBaseUrl = () => {
  const mode = (process.env.PAYPAL_MODE || 'sandbox').toLowerCase();
  return mode === 'live' ? 'https://api-m.paypal.com' : 'https://api-m.sandbox.paypal.com';
};

const getPayPalAccessToken = async () => {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error('Missing PayPal credentials');
  }

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  const response = await fetch(`${getPayPalBaseUrl()}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`PayPal auth failed: ${text}`);
  }

  const data = await response.json();
  return data.access_token;
};

router.post('/create-order', async (req, res) => {
  const { amount, productName, successUrl, cancelUrl } = req.body;

  if (!amount || !productName || !successUrl || !cancelUrl) {
    return res
      .status(400)
      .json({ error: 'Missing required fields: amount, productName, successUrl, cancelUrl' });
  }

  const amountValue = Number(amount);
  if (!Number.isFinite(amountValue) || amountValue <= 0) {
    return res.status(400).json({ error: 'Invalid amount' });
  }

  try {
    const token = await getPayPalAccessToken();
    const response = await fetch(`${getPayPalBaseUrl()}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [
          {
            description: productName,
            amount: {
              currency_code: 'GBP',
              value: amountValue.toFixed(2),
            },
          },
        ],
        application_context: {
          return_url: successUrl,
          cancel_url: cancelUrl,
          user_action: 'PAY_NOW',
        },
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`PayPal create order failed: ${text}`);
    }

    const data = await response.json();
    const approveUrl = data.links?.find((link) => link.rel === 'approve')?.href;

    if (!approveUrl) {
      throw new Error('PayPal approve URL not found');
    }

    logger.info(`PayPal order created: ${data.id}`);
    return res.json({ orderId: data.id, url: approveUrl });
  } catch (error) {
    logger.error('PayPal create order error:', error);
    return res.status(500).json({ error: 'Failed to create PayPal order' });
  }
});

router.post('/capture/:orderId', async (req, res) => {
  const { orderId } = req.params;

  if (!orderId) {
    return res.status(400).json({ error: 'Order ID is required' });
  }

  try {
    const token = await getPayPalAccessToken();
    const response = await fetch(`${getPayPalBaseUrl()}/v2/checkout/orders/${orderId}/capture`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`PayPal capture failed: ${text}`);
    }

    const data = await response.json();
    const capture = data.purchase_units?.[0]?.payments?.captures?.[0];

    logger.info(`PayPal order captured: ${orderId}`);
    return res.json({
      id: data.id,
      status: capture?.status || data.status,
      amountTotal: capture?.amount?.value ? Math.round(Number(capture.amount.value) * 100) : null,
      customerEmail: data.payer?.email_address || null,
      provider: 'paypal',
    });
  } catch (error) {
    logger.error('PayPal capture error:', error);
    return res.status(500).json({ error: 'Failed to capture PayPal order' });
  }
});

export default router;
