let { verifyToken } = require('../../utils/auth');
let leagueController = {};
let leagueModel = require('../../models/featured');

leagueController.GET_LEAGUES = (req, res) => {
  let authorized = verifyToken(req.headers.authorization);
  if (!authorized.decoded) {
    res.status(400).send({
      error: 'No league created',
    });
    return;
  }

  return leagueModel
    .GET_ALL()
    .then(response => res.status(200).send(response));
};

leagueController.CREATE_LEAGUE = (req, res) => {
  let authorized = verifyToken(req.headers.authorization);
  let leagueData = req.body
  
  if (!authorized.decoded) {
    res.status(400).send({
      error: 'No league created',
    });
    return;
  }

  return leagueModel
    .CREATE_LEAGUE(leagueData)
    .then(response => res.status(200).send(response));
};

leagueController.UPDATE_LEAGUE = (req, res) => {
  const leageId = req.params.leageId;
  const leagueData = req.body;
  let authorized = verifyToken(req.headers.authorization);
  if (!authorized.decoded) {
    res.status(400).send({
      error: 'No league created',
    });
    return;
  }

  return contentModel
    .UPDATE_LEAGUE(leagueId, leagueData)
    .then(response => {
      res.status(200).send(response[1][0]);
    });
};

module.exports = leagueController;
