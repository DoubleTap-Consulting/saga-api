const userCtrl = require('../controllers/user');
const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../utils/auth');

router
  .route('/')
  .get(isAuthenticated, userCtrl.GET_PROFILE)
  .post(userCtrl.CREATE_USER);

router
  .route('/:userId')
  .get(userCtrl.GET_USER)
  .put(isAuthenticated, userCtrl.UPDATE_USER)
  .delete(isAuthenticated, userCtrl.DELETE_USER);

router.route('/users').get(userCtrl.GET_USERS);

module.exports = router;
