import * as express from 'express';

import authenticationRoutes from './authentication';
import userRoutes from './user';
import tournamentRoutes from './tournament';
import endorsementRoutes from './endorsement';
import featuredRoutes from './featured';
import leagueRoutes from './league';
import marketplaceRoutes from './marketplace';
import partnerRoutes from './partner';
import contentRoutes from './content';

const router = express.Router();

router.use('/auth', authenticationRoutes);
router.use('/users', userRoutes);
router.use('/tournaments', tournamentRoutes);
router.use('/endorsements', endorsementRoutes);
router.use('/featured', featuredRoutes);
router.use('/leagues', leagueRoutes);
router.use('/marketplace', marketplaceRoutes);
router.use('/partners', partnerRoutes);
router.use('/content', contentRoutes);

export default router;
