import * as validate from 'express-validation';
import endorsementCtrl from '../controllers/endorsement';
import * as express from 'express';

const router = express.Router();

/**
 * POST /api/v1/endorsement,
 * returns new endorsement
 */
router.post('/', endorsementCtrl.create);

/**
 * GET /api/v1/endorsement/id,
 * returns endorsement
 */
router.get('/id', endorsementCtrl.getById);

export default router;
