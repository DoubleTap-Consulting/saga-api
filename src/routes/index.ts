import { Request, Response } from 'express';
import * as express from 'express';

import authenticationRoutes from './authentication';
import userRoutes from './user';
const router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req: Request, res: Response) => res.json({ status: 'OK '}));

router.use('/authentication', authenticationRoutes);
router.use('/users', userRoutes);

export default router;
