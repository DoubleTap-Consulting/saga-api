let { verifyToken } = require('../../utils/auth');
let leagueController = {};
let leagueModel = require('../../models/league');

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

leagueController.GET_LEAGUES = (req, res) => {
  return leagueModel
    .GET_LEAGUES()
    .then(response => res.status(200).send(response));
};

leagueController.CREATE_LEAGUE = (req, res) => {
  let leagueData = req.body;

  return leagueModel
    .CREATE_LEAGUE(leagueData)
    .then(response => res.status(200).send(response));
};

leagueController.UPDATE_LEAGUE = (req, res) => {
  const leagueId = req.params.leagueId;
  const leagueData = req.params.leagueData;

  return leagueModel.UPDATE_LEAGUE(leagueId, leagueData).then(response => {
    res.status(200).send(response[1][0]);
  });
};

leagueController.DELETE_LEAGUE = (req, res) => {
  const leagueId = req.params.leagueId;

  return leagueModel.DELETE_LEAGUE(leagueId).then(() => res.sendStatus(200));
};

module.exports = leagueController;
