const contentCtrl = require('../controllers/content');
const express = require('express');
const router = express.Router();
const { isAdminAuthenticated, isAuthenticated } = require('../utils/auth');

router
  .route('/')
  .get(contentCtrl.GET_CONTENT)
  .post(isAuthenticated, contentCtrl.CREATE_ARTICLE);

router
  .route('/:articleId')
  .get(contentCtrl.GET_ARTICLE)
  .put(isAuthenticated, contentCtrl.UPDATE_ARTICLE)
  .delete(isAdminAuthenticated, contentCtrl.DELETE_ARTICLE);

module.exports = router;
