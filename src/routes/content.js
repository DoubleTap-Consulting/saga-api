const contentCtrl = require('../controllers/content');
const express = require('express');
const router = express.Router();

router
  .route('/')
  .get(contentCtrl.GET_CONTENT)
  .post(contentCtrl.CREATE_ARTICLE);

router
  .route('/:articleId')
  .get(contentCtrl.GET_ARTICLE)
  .put(contentCtrl.UPDATE_ARTICLE)
  .delete(contentCtrl.DELETE_ARTICLE);

module.exports = router;
