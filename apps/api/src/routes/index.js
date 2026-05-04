import { Router } from 'express';
import healthCheck from './health-check.js';
import stripeRouter from './stripe.js';
import contactRouter from './contact.js';

const router = Router();

export default () => {
    router.get('/health', healthCheck);
    router.use('/stripe', stripeRouter);
    router.use('/', contactRouter);

    return router;
};
