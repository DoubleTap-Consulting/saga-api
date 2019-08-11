const contentModel = require('../../models/content');
let contentController = {};

contentController.GET_CONTENT = (req, res) => {
  return contentModel
    .GET_CONTENT()
    .then(response => res.status(200).send(response));
};

contentController.GET_ARTICLE = (req, res) => {
  const articleId = req.params.articleId;

  return contentModel.GET_ARTICLE(articleId).then(response => {
    if (!response) {
      res.status(400).send({
        error: true,
        message: 'Article does not exist.',
      });
      return;
    }
    res.status(200).send(response);
  });
};

contentController.CREATE_ARTICLE = (req, res) => {
  const article = req.body;

  return contentModel
    .CREATE_ARTICLE(article)
    .then(response => res.status(200).send(response));
};

contentController.UPDATE_ARTICLE = (req, res) => {
  const articleId = req.params.articleId;
  const articleDataToUpdate = req.body;

  return contentModel
    .UPDATE_ARTICLE(articleId, articleDataToUpdate)
    .then(response => {
      res.status(200).send(response[1][0]);
    });
};

contentController.DELETE_ARTICLE = (req, res) => {
  const articleId = req.params.articleId;

  return contentModel.DELETE_ARTICLE(articleId).then(() => res.sendStatus(200));
};

module.exports = contentController;
