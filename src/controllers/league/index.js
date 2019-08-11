let { verifyToken } = require('../../utils/auth');
let leagueController = {};
let leagueModel = require('../../models/league');

leagueController.GET_LEAGUES = (req, res) => {
  return leagueModel
    .GET_LEAGUES()
    .then(response => res.status(200).send(response));
};

leagueController.CREATE_LEAGUE = (req, res) => {
  let leagueData = req.body

  return leagueModel
    .CREATE_LEAGUE(leagueData)
    .then(response => res.status(200).send(response));
};

leagueController.UPDATE_LEAGUE = (req, res) => {
  const leagueId = req.params.leagueId;
  const leagueData = req.params.leagueData;

  return contentModel
    .UPDATE_LEAGUE(leagueId, leagueData)
    .then(response => {
      res.status(200).send(response[1][0]);
    });
};

module.exports = leagueController;
