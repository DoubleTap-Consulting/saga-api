const featuredCtrl = require('../controllers/featured');
const express = require('express');
const router = express.Router();

router
  .route('/')
  .get(featuredCtrl.GET_FEATURED)
  .post(featuredCtrl.CREATE_FEATURED);

router
  .route('/:featuredId')
  .put(featuredCtrl.UPDATE_FEATURED)
  .delete(featuredCtrl.DELETE_FEATURED);

module.exports = router;
