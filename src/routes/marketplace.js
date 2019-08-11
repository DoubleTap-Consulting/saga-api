const marketplaceCtrl = require('../controllers/marketplace');
const express = require('express');
const router = express.Router();

/**
 * POST /api/v1/marketplace,
 * returns new marketplace
 */
router.post('/', marketplaceCtrl.CREATE_PRODUCT);

/**
 * GET /api/v1/marketplace/id,
 * returns marketplace
 */
router.get('/id', marketplaceCtrl.GET_PRODUCT);

module.exports = router;
