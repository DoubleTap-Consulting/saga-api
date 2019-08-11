let { verifyToken } = require('../../utils/auth');
let featuredController = {};
let featuredModel = require('../../models/featured');

featuredController.GET_FEATURED = (req, res) => {
  let authorized = verifyToken(req.headers.authorization);

  return featuredModel
    .GET_FEATURED(authorized.decoded.user_id)
    .then(response => res.status(200).send(response));
};

featuredController.CREATE_FEATURED = (req, res) => {
  const featured = req.body;
  let authorized = verifyToken(req.headers.authorization);

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

module.exports = featuredController;
