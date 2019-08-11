const tournamentCtrl = require('../controllers/tournament');
const express = require('express');

const router = express.Router();

/**
 * POST /api/v1/tournament,
 * returns new tournament
 */
router.post('/', tournamentCtrl.CREATE_TOURNAMENT);

/**
 * GET /api/v1/tournament/id,
 * returns tournament
 */
router.get('/id', tournamentCtrl.GET_TOURNAMENT);

module.exports = router;
