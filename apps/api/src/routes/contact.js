import express from 'express';
import pb from '../utils/pocketbaseClient.js';
import logger from '../utils/logger.js';

const router = express.Router();

// Create contact inquiry
router.post('/contact-form', async (req, res) => {
  const { name, email, phone, service_type, message } = req.body;

  if (!name || !email || !phone || !service_type || !message) {
    return res.status(400).json({ error: 'Missing required fields: name, email, phone, service_type, message' });
  }

  logger.info(`Creating contact inquiry from ${name} (${email})`);

  const record = await pb.collection('contact_inquiries').create({
    name,
    email,
    phone,
    service_type,
    message,
  });

  logger.info(`Contact inquiry created: ${record.id}`);

  res.json({
    success: true,
    message: 'Inquiry saved',
  });
});

export default router;
