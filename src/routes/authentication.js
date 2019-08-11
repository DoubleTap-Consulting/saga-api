const express = require('express');
const authCtrl = require('../controllers/authentication');
const userCtrl = require('../controllers/user');
const router = express.Router();

router.get('/verify-email', authCtrl.VERIFY_EMAIL);

router.route('/register').post(userCtrl.CREATE_USER);

router.route('/login').post(authCtrl.SIGN_IN);

router.route('/gamerTag/:gamerTag').get(authCtrl.CHECK_GAMERTAG);

router.route('/logout').delete(authCtrl.LOGOUT);

router.route('/verify-email').get(authCtrl.VERIFY_EMAIL);

module.exports = router;
