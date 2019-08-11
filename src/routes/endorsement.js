const endorsementCtrl = require('../controllers/endorsement');
const express = require('express');
const router = express.Router();
const { isAdminAuthenticated, isAuthenticated } = require('../utils/auth');

router
  .route('/')
  .get(endorsementCtrl.GET_ENDORSEMENTS)
  .post(isAuthenticated, endorsementCtrl.CREATE_ENDORSEMENT);

router
  .route('/:endorsementId')
  .get(endorsementCtrl.GET_ENDORSEMENT)
  .put(isAdminAuthenticated, endorsementCtrl.UPDATE_ENDORSEMENT)
  .delete(isAuthenticated, endorsementCtrl.DELETE_ENDORSEMENT);

module.exports = router;
