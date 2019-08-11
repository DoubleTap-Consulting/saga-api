const userCtrl = require('../controllers/user');
const express = require('express');
const router = express.Router();

router
  .route('/')
  .get(userCtrl.GET_USERS)
  .post(userCtrl.CREATE_USER);

router
  .route('/:userId')
  .get(userCtrl.GET_USER)
  .put(userCtrl.UPDATE_USER)
  .delete(userCtrl.DELETE_USER);

module.exports = router;
