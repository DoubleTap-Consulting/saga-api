const { verifyToken } = require('../../utils/auth');
const featuredModel = require('../../models/featured');
let featuredController = {};

featuredController.GET_FEATURED = (req, res) => {
  const authorized = verifyToken(req.headers.authorization);

  return featuredModel
    .GET_FEATURED(authorized.decoded.user_id)
    .then(response => res.status(200).send(response));
};

featuredController.CREATE_FEATURED = (req, res) => {
  const featured = req.body;
  const authorized = verifyToken(req.headers.authorization);

  if (!authorized.decoded) {
    res.status(400).send({
      error: 'No account created',
    });
    return;
  }

  return featuredModel
    .CREATE_FEATURED(featured)
    .then(response => res.status(200).send(response));
};

featuredController.UPDATE_FEATURED = (req, res) => {
  const featuredId = req.params.featuredId;
  const featuredDataToUpdate = req.body;

  return featuredModel
    .UPDATE_FEATURED(featuredId, featuredDataToUpdate)
    .then(response => {
      res.status(200).send(response[1][0]);
    });
};

featuredController.DELETE_FEATURED = (req, res) => {
  const featuredId = req.params.featuredId;

  return featuredModel
    .DELETE_FEATURED(featuredId)
    .then(() => res.sendStatus(200));
};

module.exports = featuredController;
