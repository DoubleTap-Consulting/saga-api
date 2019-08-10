import { verifyToken } from '../utils/auth';

let leagueController = {};
let leagueModel = require('../models/league');

leagueController.GET_LEAGUES = (req, res) => {
  let authorized = verifyToken(req.headers.authorization);

  return leagueModel
    .GET_LEAGUES(authorized.decoded.user_id)
    .then(response => res.status(200).send(response));
};

leagueController.GET_LEAGUE = (req, res) => {
  const leagueId = req.params.leagueId;

  return leagueModel.GET_LEAGUE(leagueId).then(response => {
    if (!response) {
      res.status(400).send({
        error: true,
        message: 'League does not exist.',
      });
      return;
    }
    res.status(200).send(response);
  });
};

leagueController.CREATE_LEAGUE = (req, res) => {
  const league = req.body;
  let authorized = verifyToken(req.headers.authorization);

  if (!authorized.decoded) {
    res.status(400).send({
      error: 'No account created',
    });
    return;
  }

  return leagueModel
    .CREATE_LEAGUE(league)
    .then(response => res.status(200).send(response));
};

leagueController.UPDATE_LEAGUE = (req, res) => {
  const leagueId = req.params.leagueId;
  const leagueDataToUpdate = req.body;

  return leagueModel
    .UPDATE_LEAGUE(leagueId, leagueDataToUpdate)
    .then(response => {
      res.status(200).send(response[1][0]);
    });
};

leagueController.DELETE_LEAGUE = (req, res) => {
  const leagueId = req.params.leagueId;

  return leagueModel.DELETE_LEAGUE(leagueId).then(() => res.sendStatus(200));
};

module.exports = leagueController;
