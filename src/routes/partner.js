const partnerCtrl = require('../controllers/partner');
const express = require('express');
const router = express.Router();
const { isAdminAuthenticated } = require('../utils/auth');

router
  .route('/')
  .get(partnerCtrl.GET_PARTNERS)
  .post(isAdminAuthenticated, partnerCtrl.CREATE_PARTNER);

router
  .route('/:partnerId')
  .get(partnerCtrl.GET_PARTNER)
  .put(isAdminAuthenticated, partnerCtrl.UPDATE_PARTNER)
  .delete(isAdminAuthenticated, partnerCtrl.DELETE_PARTNER);

module.exports = router;
