const partnerCtrl = require('../controllers/partner');
const express = require('express');

const router = express.Router();

/**
 * POST /api/v1/partner,
 * returns new partner
 */
router.post('/', partnerCtrl.CREATE_PARTNER);

/**
 * GET /api/v1/partner/id,
 * returns partner
 */
router.get('/id', partnerCtrl.GET_PARTNER);

module.exports = router;
