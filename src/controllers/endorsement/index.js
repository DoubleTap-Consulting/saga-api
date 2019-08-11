const { verifyToken } = require('../../utils/auth');
const endorsementModel = require('../../models/endorsement');
let endorsementController = {};

endorsementController.GET_ENDORSEMENTS = (req, res) => {
  const authorized = verifyToken(req.headers.authorization);

  return endorsementModel
    .GET_ENDORSEMENTS(authorized.decoded.user_id)
    .then(response => res.status(200).send(response));
};

endorsementController.GET_ENDORSEMENT = (req, res) => {
  const endorsementId = req.params.endorsementId;

  return endorsementModel.GET_ENDORSEMENT(endorsementId).then(response => {
    if (!response) {
      res.status(400).send({
        error: true,
        message: 'Endorsement does not exist.',
      });
      return;
    }
    res.status(200).send(response);
  });
};

endorsementController.CREATE_ENDORSEMENT = (req, res) => {
  const endorsement = req.body;
  const authorized = verifyToken(req.headers.authorization);

  if (!authorized.decoded) {
    res.status(400).send({
      error: 'No account created',
    });
    return;
  }

  endorsement.user_id = authorized.decoded.user_id;

  return endorsementModel
    .CREATE_ENDORSEMENT(endorsement)
    .then(response => res.status(200).send(response));
};

endorsementController.UPDATE_ENDORSEMENT = (req, res) => {
  const endorsementId = req.params.endorsementId;
  const endorsementDataToUpdate = req.body;

  return endorsementModel
    .UPDATE_ENDORSEMENT(endorsementId, endorsementDataToUpdate)
    .then(response => {
      res.status(200).send(response[1][0]);
    });
};

endorsementController.DELETE_ENDORSEMENT = (req, res) => {
  const endorsementId = req.params.endorsementId;

  return endorsementModel
    .DELETE_ENDORSEMENT(endorsementId)
    .then(() => res.sendStatus(200));
};

module.exports = endorsementController;
