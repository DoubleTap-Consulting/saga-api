const featuredCtrl = require('../controllers/featured');
const express = require('express');
const router = express.Router();

/**
 * POST /api/v1/featured,
 * returns new featured
 */
router.post('/', featuredCtrl.CREATE_FEATURED);

/**
 * GET /api/v1/featured/id,
 * returns featured
 */
router.get('/id', featuredCtrl.GET_FEATURED);

module.exports = router;
