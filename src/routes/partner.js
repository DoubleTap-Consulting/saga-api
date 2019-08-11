const partnerCtrl = require('../controllers/partner');
const express = require('express');
const router = express.Router();

router
  .route('/')
  .get(partnerCtrl.GET_PARTNERS)
  .post(partnerCtrl.CREATE_PARTNER);

router
  .route('/:partnerId')
  .get(partnerCtrl.GET_PARTNER)
  .put(partnerCtrl.UPDATE_PARTNER)
  .delete(partnerCtrl.DELETE_PARTNER);

module.exports = router;
