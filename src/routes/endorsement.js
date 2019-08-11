const endorsementCtrl = require('../controllers/endorsement');
const express = require('express');
const router = express.Router();

router
  .route('/')
  .get(endorsementCtrl.GET_ENDORSEMENTS)
  .post(endorsementCtrl.CREATE_ENDORSEMENT);

router
  .route('/:endorsementId')
  .get(endorsementCtrl.GET_ENDORSEMENT)
  .put(endorsementCtrl.UPDATE_ENDORSEMENT)
  .delete(endorsementCtrl.DELETE_ENDORSEMENT);

module.exports = router;
