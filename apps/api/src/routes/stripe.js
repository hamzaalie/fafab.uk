import express from 'express';
import Stripe from 'stripe';
import logger from '../utils/logger.js';

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create Checkout Session
router.post('/create-checkout', async (req, res) => {
  const { amount, productName, successUrl, cancelUrl } = req.body;

  if (!amount || !productName || !successUrl || !cancelUrl) {
    return res.status(400).json({ error: 'Missing required fields: amount, productName, successUrl, cancelUrl' });
  }

  const unitAmountPence = Math.round(Number(amount));
  if (!Number.isFinite(unitAmountPence) || unitAmountPence < 1) {
    return res.status(400).json({ error: 'Invalid amount' });
  }

  logger.info(`Creating checkout session for ${productName} - ${unitAmountPence} minor units`);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'gbp',
          product_data: {
            name: productName,
          },
          unit_amount: unitAmountPence,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: successUrl,
    cancel_url: cancelUrl,
  });

  logger.info(`Checkout session created: ${session.id}`);

  res.json({ url: session.url });
});

// Retrieve Checkout Session
router.get('/session/:sessionId', async (req, res) => {
  const { sessionId } = req.params;

  if (!sessionId) {
    return res.status(400).json({ error: 'Session ID is required' });
  }

  logger.info(`Retrieving session: ${sessionId}`);

  const session = await stripe.checkout.sessions.retrieve(sessionId);

  res.json({
    id: session.id,
    status: session.payment_status,
    amountTotal: session.amount_total,
    customerEmail: session.customer_details?.email,
  });
});

export default router;
