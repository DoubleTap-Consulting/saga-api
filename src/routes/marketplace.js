const marketplaceCtrl = require('../controllers/marketplace');
const express = require('express');
const router = express.Router();
const { isAdminAuthenticated } = require('../utils/auth');

router
  .route('/')
  .get(marketplaceCtrl.GET_MARKETPLACE)
  .post(isAdminAuthenticated, marketplaceCtrl.CREATE_PRODUCT);

router
  .route('/:productId')
  .get(marketplaceCtrl.GET_PRODUCT)
  .put(isAdminAuthenticated, marketplaceCtrl.UPDATE_PRODUCT)
  .delete(isAdminAuthenticated, marketplaceCtrl.DELETE_PRODUCT);

module.exports = router;
