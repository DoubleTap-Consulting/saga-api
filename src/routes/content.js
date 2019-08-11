const contentCtrl = require('../controllers/content');
const express = require('express');
const router = express.Router();

/**
 * POST /api/v1/content,
 * returns new content
 */
router.post('/', contentCtrl.CREATE_ARTICLE);

/**
 * GET /api/v1/content/id,
 * returns an article
 */
router.get('/id', contentCtrl.GET_ARTICLE);

module.exports = router;
