const { verifyToken } = require('../../utils/auth');
const marketplaceModel = require('../../models/marketplace');
let marketplaceController = {};

marketplaceController.GET_MARKETPLACE = (req, res) => {
  return marketplaceModel
    .GET_MARKETPLACE()
    .then(response => res.status(200).send(response));
};

marketplaceController.GET_PRODUCT = (req, res) => {
  const productId = req.params.productId;

  return marketplaceModel.GET_PRODUCT(productId).then(response => {
    if (!response) {
      res.status(400).send({
        error: true,
        message: 'Product does not exist.',
      });
      return;
    }
    res.status(200).send(response);
  });
};

marketplaceController.CREATE_PRODUCT = (req, res) => {
  const product = req.body;

  return marketplaceModel
    .CREATE_PRODUCT(product)
    .then(response => res.status(200).send(response));
};

marketplaceController.UPDATE_PRODUCT = (req, res) => {
  const productId = req.params.productId;
  const productDataToUpdate = req.body;

  return marketplaceModel
    .UPDATE_PRODUCT(productId, productDataToUpdate)
    .then(response => {
      res.status(200).send(response[1][0]);
    });
};

marketplaceController.DELETE_PRODUCT = (req, res) => {
  const productId = req.params.productId;

  return marketplaceModel
    .DELETE_PRODUCT(productId)
    .then(() => res.sendStatus(200));
};

module.exports = marketplaceController;
