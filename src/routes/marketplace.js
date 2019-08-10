import * as validate from 'express-validation';
import marketplaceCtrl from '../controllers/marketplace';
import * as express from 'express';

const router = express.Router();

/**
 * POST /api/v1/marketplace,
 * returns new marketplace
 */
router.post('/', marketplaceCtrl.create);

/**
 * GET /api/v1/marketplace/id,
 * returns marketplace
 */
router.get('/id', marketplaceCtrl.getById);

export default router;
