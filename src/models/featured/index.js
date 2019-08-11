const Featured = require('../../db').featured;
let featuredModel = {};

featuredModel.GET_FEATURED = featured_id => {
  return Featured.findAll({
    where: {
      featured_id,
    },
  }).then(featured => featured);
};

featuredModel.CREATE_FEATURED = featured => {
  return Featured.create(featured).then(featured => {
    return featured;
  });
};

featuredModel.UPDATE_FEATURED = (id, featuredDataToUpdate) => {
  return Featured.update(featuredDataToUpdate, {
    returning: true,
    where: { id },
    attributes: { exclude: ['updatedAt', 'createdAt'] },
  }).then(featured => featured);
};

featuredModel.DELETE_FEATURED = id => {
  return Featured.destroy({
    where: {
      id,
    },
  }).then(featured => featured);
};

module.exports = featuredModel;
