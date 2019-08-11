const leagueCtrl = require('../controllers/league');
const express = require('express');
const router = express.Router();
const { isAdminAuthenticated } = require('../utils/auth');

router
  .route('/')
  .get(leagueCtrl.GET_LEAGUES)
  .post(isAdminAuthenticated, leagueCtrl.CREATE_LEAGUE);

router
  .route('/:leagueId')
  .get(leagueCtrl.GET_LEAGUE)
  .put(isAdminAuthenticated, leagueCtrl.UPDATE_LEAGUE)
  .delete(isAdminAuthenticated, leagueCtrl.DELETE_LEAGUE);

module.exports = router;
