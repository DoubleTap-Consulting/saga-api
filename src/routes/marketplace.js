const marketplaceCtrl = require('../controllers/marketplace');
const express = require('express');
const router = express.Router();

router
  .route('/')
  .get(marketplaceCtrl.GET_MARKETPLACE)
  .post(marketplaceCtrl.CREATE_PRODUCT);

router
  .route('/:productId')
  .get(marketplaceCtrl.GET_PRODUCT)
  .put(marketplaceCtrl.UPDATE_PRODUCT)
  .delete(marketplaceCtrl.DELETE_PRODUCT);

module.exports = router;
