let marketplaceModel = {};
let Marketplace = require('../../db').Marketplace;

marketplaceModel.GET_MARKETPLACE = () => {
  return Marketplace.findAll({}).then(marketplace => marketplace);
};

marketplaceModel.GET_PRODUCT = id => {
  return Marketplace.findOne({
    where: {
      id,
    },
    attributes: { exclude: ['updatedAt', 'createdAt'] },
  }).then(product => product);
};

marketplaceModel.CREATE_PRODUCT = product => {
  return Marketplace.create(product).then(product => {
    return product;
  });
};

marketplaceModel.UPDATE_PRODUCT = (id, productDataToUpdate) => {
  return Marketplace.update(productDataToUpdate, {
    returning: true,
    where: { id },
    attributes: { exclude: ['updatedAt', 'createdAt'] },
  }).then(product => product);
};

marketplaceModel.DELETE_PRODUCT = id => {
  return Marketplace.destroy({
    where: {
      id,
    },
  }).then(product => product);
};

module.exports = marketplaceModel;
