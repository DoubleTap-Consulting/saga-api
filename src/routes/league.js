const leagueController = require('../controllers/league');
const express = require('express');
const router = express.Router();

/**
 * POST /api/v1/league,
 * returns new league
 */
router.post('/leagues', leagueController.CREATE_LEAGUE);

/**
 * GET /api/v1/league/,
 * returns leagues
 */
router.get('/leagues', leagueController.GET_LEAGUES);

module.exports = router;
