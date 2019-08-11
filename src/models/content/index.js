const Content = require('../../db').content;
let contentModel = {};

contentModel.GET_CONTENT = content_id => {
  return Content.findAll({
    where: {
      content_id,
    },
  }).then(contents => contents);
};

contentModel.GET_ARTICLE = id => {
  return Content.findOne({
    where: {
      id,
    },
    attributes: { exclude: ['updatedAt', 'createdAt'] },
  }).then(article => article);
};

contentModel.CREATE_ARTICLE = article => {
  return Content.create(article).then(article => {
    return article;
  });
};

contentModel.UPDATE_ARTICLE = (id, articleDataToUpdate) => {
  return Content.update(articleDataToUpdate, {
    returning: true,
    where: { id },
    attributes: { exclude: ['updatedAt', 'createdAt'] },
  }).then(article => article);
};

contentModel.DELETE_ARTICLE = id => {
  return Content.destroy({
    where: {
      id,
    },
  }).then(article => article);
};

module.exports = contentModel;
