import * as express from 'express';

import authenticationRoutes from './authentication';
import userRoutes from './user';
import tournamentRoutes from './tournament';

const router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) => res.json({ status: 'OK ' }));

router.use('/auth', authenticationRoutes);
router.use('/users', userRoutes);
router.use('/tournaments', tournamentRoutes);

export default router;
