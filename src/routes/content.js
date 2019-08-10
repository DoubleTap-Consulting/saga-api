import * as validate from 'express-validation';
import contentCtrl from '../controllers/content';
import * as express from 'express';

const router = express.Router();

/**
 * POST /api/v1/content,
 * returns new content
 */
router.post('/', contentCtrl.create);

/**
 * GET /api/v1/content/id,
 * returns content
 */
router.get('/id', contentCtrl.getById);

export default router;
