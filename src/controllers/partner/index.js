const partnerModel = require('../../models/partner');
let partnerController = {};

partnerController.GET_PARTNERS = (req, res) => {
  return partnerModel
    .GET_PARTNERS()
    .then(response => res.status(200).send(response));
};

partnerController.GET_PARTNER = (req, res) => {
  const partnerId = req.params.partnerId;

  return partnerModel.GET_PARTNER(partnerId).then(response => {
    if (!response) {
      res.status(400).send({
        error: true,
        message: 'Partner does not exist.',
      });
      return;
    }
    res.status(200).send(response);
  });
};

partnerController.CREATE_PARTNER = (req, res) => {
  const partner = req.body;

  return partnerModel
    .CREATE_PARTNER(partner)
    .then(response => res.status(200).send(response));
};

partnerController.UPDATE_PARTNER = (req, res) => {
  const partnerId = req.params.partnerId;
  const partnerDataToUpdate = req.body;

  return partnerModel
    .UPDATE_PARTNER(partnerId, partnerDataToUpdate)
    .then(response => {
      res.status(200).send(response[1][0]);
    });
};

partnerController.DELETE_PARTNER = (req, res) => {
  const partnerId = req.params.partnerId;

  return partnerModel.DELETE_PARTNER(partnerId).then(() => res.sendStatus(200));
};

module.exports = partnerController;
