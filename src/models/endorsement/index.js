const Endorsement = require('../../db').endorsements;
let endorsementModel = {};

endorsementModel.GET_ENDORSEMENTS = endorsement_id => {
  return Endorsement.findAll({
    where: {
      endorsement_id,
    },
  }).then(endorsements => endorsements);
};

endorsementModel.GET_ENDORSEMENT = id => {
  return Endorsement.findOne({
    where: {
      id,
    },
    attributes: { exclude: ['updatedAt', 'createdAt'] },
  }).then(endorsement => endorsement);
};

endorsementModel.CREATE_ENDORSEMENT = endorsement => {
  return Endorsement.create(endorsement).then(endorsement => {
    return endorsement;
  });
};

endorsementModel.UPDATE_ENDORSEMENT = (id, endorsementDataToUpdate) => {
  return Endorsement.update(endorsementDataToUpdate, {
    returning: true,
    where: { id },
    attributes: { exclude: ['updatedAt', 'createdAt'] },
  }).then(endorsement => endorsement);
};

endorsementModel.DELETE_ENDORSEMENT = id => {
  return Endorsement.destroy({
    where: {
      id,
    },
  }).then(endorsement => endorsement);
};

module.exports = endorsementModel;
