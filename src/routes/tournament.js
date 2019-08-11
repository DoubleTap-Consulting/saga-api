const tournamentCtrl = require('../controllers/tournament');
const express = require('express');
const router = express.Router();

router
  .route('/')
  .get(tournamentCtrl.GET_TOURNAMENTS)
  .post(tournamentCtrl.CREATE_TOURNAMENT);

router
  .route('/:tournamentId')
  .get(tournamentCtrl.GET_TOURNAMENT)
  .put(tournamentCtrl.UPDATE_TOURNAMENT)
  .delete(tournamentCtrl.DELETE_TOURNAMENT);

module.exports = router;
