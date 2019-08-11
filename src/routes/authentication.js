const express = require('express');
const authCtrl = require('../controllers/authentication');
const userCtrl = require('../controllers/user');
const router = express.Router();

router.post('/register', userCtrl.CREATE_USER);
router.post('/login', authCtrl.SIGN_IN);
router.delete('/logout', authCtrl.LOGOUT);

/**
 * POST /api/v1/authentication/verify-email?apiToken,
 * returns new auth token
 */
router.get('/verify-email', authCtrl.VERIFY_EMAIL);

module.exports = router;
