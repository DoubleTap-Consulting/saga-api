const express = require('express');
const authCtrl = require('../controllers/authentication');
const userCtrl = require('../controllers/user');
const router = express.Router();

/**
 * POST /api/v1/auth/register,
 * returns auth token
 */
router.post('/register', userCtrl.CREATE_USER);

/**
 * POST /api/v1/auth/login,
 * returns new auth token
 */
router.post('/login', authCtrl.SIGN_IN);

/**
 * POST /api/v1/auth/logout,
 * returns success
 */
router.delete('/logout', authCtrl.LOGOUT);

/**
 * POST /api/v1/auth/verify-email?apiToken,
 * returns new auth token
 */
router.get('/verify-email', authCtrl.VERIFY_EMAIL);

module.exports = router;
