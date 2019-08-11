const tournamentCtrl = require('../controllers/tournament');
const express = require('express');
const router = express.Router();
const { isAdminAuthenticated } = require('../utils/auth');

router
  .route('/')
  .get(tournamentCtrl.GET_TOURNAMENTS)
  .post(isAdminAuthenticated, tournamentCtrl.CREATE_TOURNAMENT);

router
  .route('/:tournamentId')
  .get(tournamentCtrl.GET_TOURNAMENT)
  .put(isAdminAuthenticated, tournamentCtrl.UPDATE_TOURNAMENT)
  .delete(isAdminAuthenticated, tournamentCtrl.DELETE_TOURNAMENT);

module.exports = router;
