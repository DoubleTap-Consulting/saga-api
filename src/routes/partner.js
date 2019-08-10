import * as validate from 'express-validation';
import partnerCtrl from '../controllers/partner';
import * as express from 'express';

const router = express.Router();

/**
 * POST /api/v1/partner,
 * returns new partner
 */
router.post('/', partnerCtrl.create);

/**
 * GET /api/v1/partner/id,
 * returns partner
 */
router.get('/id', partnerCtrl.getById);

export default router;
