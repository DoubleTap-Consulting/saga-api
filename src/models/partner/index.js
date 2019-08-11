const Partner = require('../../db').Partners;
let partnerModel = {};

partnerModel.GET_PARTNERS = () => {
  return Partner.findAll({}).then(partners => partners);
};

partnerModel.GET_PARTNER = id => {
  return Partner.findOne({
    where: {
      id,
    },
    attributes: { exclude: ['updatedAt', 'createdAt'] },
  }).then(partner => partner);
};

partnerModel.CREATE_PARTNER = partner => {
  return Partner.create(partner).then(partner => {
    return partner;
  });
};

partnerModel.UPDATE_PARTNER = (id, partnerDataToUpdate) => {
  return Partner.update(partnerDataToUpdate, {
    returning: true,
    where: { id },
    attributes: { exclude: ['updatedAt', 'createdAt'] },
  }).then(partner => partner);
};

partnerModel.DELETE_PARTNER = id => {
  return Partner.destroy({
    where: {
      id,
    },
  }).then(partner => partner);
};

module.exports = partnerModel;
