import * as validate from 'express-validation';
import featuredCtrl from '../controllers/featured';
import * as express from 'express';

const router = express.Router();

/**
 * POST /api/v1/featured,
 * returns new featured
 */
router.post('/', featuredCtrl.create);

/**
 * GET /api/v1/featured/id,
 * returns featured
 */
router.get('/id', featuredCtrl.getById);

export default router;
