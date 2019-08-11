const featuredCtrl = require('../controllers/featured');
const express = require('express');
const router = express.Router();
const { isAdminAuthenticated } = require('../utils/auth');

router
  .route('/')
  .get(featuredCtrl.GET_FEATURED)
  .post(isAdminAuthenticated, featuredCtrl.CREATE_FEATURED);

router
  .route('/:featuredId')
  .put(isAdminAuthenticated, featuredCtrl.UPDATE_FEATURED)
  .delete(isAdminAuthenticated, featuredCtrl.DELETE_FEATURED);

module.exports = router;
