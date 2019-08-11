const express = require('express');
const authenticationRoutes = require('./authentication');
const userRoutes = require('./user');
const tournamentRoutes = require('./tournament');
const endorsementRoutes = require('./endorsement');
const featuredRoutes = require('./featured');
const marketplaceRoutes = require('./marketplace');
const partnerRoutes = require('./partner');
const contentRoutes = require('./content');
const router = express.Router();

router.use('/auth', authenticationRoutes);
router.use('/users', userRoutes);
router.use('/tournaments', tournamentRoutes);
router.use('/endorsements', endorsementRoutes);
router.use('/featured', featuredRoutes);
router.use('/marketplace', marketplaceRoutes);
router.use('/partners', partnerRoutes);
router.use('/content', contentRoutes);

module.exports = router;
