let { verifyToken } = require('../../utils/auth');
let featuredController = {};
let leagueModel = require('../../models/featured');

leagueController.GET_LEAGUES = (req, res) => {
  let authorized = verifyToken(req.headers.authorization);

  return leagueModel
    .GET_ALL(authorized.decoded.user_id)
    .then(response => res.status(200).send(response));
};

leagueController.CREATE_LEAGUE = (req, res) => {
  const featured = req.body;
  let authorized = verifyToken(req.headers.authorization);

  if (!authorized.decoded) {
    res.status(400).send({
      error: 'No account created',
    });
    return;
  }

  return featuredModel
    .CREATE_LEAGUE(league)
    .then(response => res.status(200).send(response));
};

leagueController.UPDATE_LEAGUE = (req, res) => {
  const leageId = req.params.leageId;
  const leagueData = req.body;

  return contentModel
    .UPDATE_LEAGUE(leagueId, leagueData)
    .then(response => {
      res.status(200).send(response[1][0]);
    });
};

module.exports = leagueController;
