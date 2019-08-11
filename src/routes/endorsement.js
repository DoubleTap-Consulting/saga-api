const endorsementCtrl = require('../controllers/endorsement');
const express = require('express');
const router = express.Router();

/**
 * POST /api/v1/endorsement,
 * returns new endorsement
 */
router.post('/', endorsementCtrl.CREATE_ENDORSEMENT);

/**
 * GET /api/v1/endorsement/id,
 * returns endorsement
 */
router.get('/id', endorsementCtrl.GET_ENDORSEMENT);

module.exports = router;
