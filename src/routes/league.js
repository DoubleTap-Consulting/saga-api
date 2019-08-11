const leagueController = require('../controllers/league');
const express = require('express');
const router = express.Router();

/**
 * POST /api/v1/leagues
 * @returns new league
 */
router.post('/', leagueController.CREATE_LEAGUE);

/**
 * GET /api/v1/leagues
 * @returns leagues
 */
router.get('/', leagueController.GET_LEAGUES);

module.exports = router;
