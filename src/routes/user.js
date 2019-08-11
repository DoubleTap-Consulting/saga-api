const userCtrl = require('../controllers/user');
const express = require('express');

const router = express.Router();

/**
 * GET /api/v1/user/id,
 * returns user
 */
router.get('/id', userCtrl.GET_USER);

module.exports = router;
