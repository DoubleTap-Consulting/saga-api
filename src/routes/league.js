const leagueController = require('../controllers/league');
const express = require('express');
const router = express.Router();

/**
 * POST /api/v1/league,
 * returns new league
 */
router.post('/', leagueController.CREATE_LEAGUE);

/**
 * GET /api/v1/league/,
 * returns league
 */
router.get('/', leagueController.GET_LEAGUE);

module.exports = router;
