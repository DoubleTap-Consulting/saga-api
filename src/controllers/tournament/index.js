let { verifyToken } = require('../../utils/auth');
let tournamentController = {};
let tournamentModel = require('../../models/tournament');

tournamentController.GET_TOURNAMENTS = (req, res) => {
  let authorized = verifyToken(req.headers.authorization);

  return tournamentModel
    .GET_TOURNAMENTS(authorized.decoded.user_id)
    .then(response => res.status(200).send(response));
};

tournamentController.GET_TOURNAMENT = (req, res) => {
  const tournamentId = req.params.tournamentId;

  return tournamentModel.GET_TOURNAMENT(tournamentId).then(response => {
    if (!response) {
      res.status(400).send({
        error: true,
        message: 'Tournament does not exist.',
      });
      return;
    }
    res.status(200).send(response);
  });
};

tournamentController.CREATE_TOURNAMENT = (req, res) => {
  const tournament = req.body;
  let authorized = verifyToken(req.headers.authorization);

  if (!authorized.decoded) {
    res.status(400).send({
      error: 'No account created',
    });
    return;
  }

  return tournamentModel
    .CREATE_TOURNAMENT(tournament)
    .then(response => res.status(200).send(response));
};

tournamentController.UPDATE_TOURNAMENT = (req, res) => {
  const tournamentId = req.params.tournamentId;
  const tournamentDataToUpdate = req.body;

  return tournamentModel
    .UPDATE_TOURNAMENT(tournamentId, tournamentDataToUpdate)
    .then(response => {
      res.status(200).send(response[1][0]);
    });
};

tournamentController.DELETE_TOURNAMENT = (req, res) => {
  const tournamentId = req.params.tournamentId;

  return tournamentModel
    .DELETE_TOURNAMENT(tournamentId)
    .then(() => res.sendStatus(200));
};

module.exports = tournamentController;
