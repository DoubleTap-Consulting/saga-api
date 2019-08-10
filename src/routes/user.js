import * as validate from 'express-validation';
import userCtrl from '../controllers/user';
// import pV from './paramValidation';
import * as express from 'express';

const router = express.Router();

/**
 * POST /api/v1/user,
 * returns new auth token
 */
// router.post('/', userCtrl.create);

/**
 * GET /api/v1/user/id,
 * returns user
 */
router.get('/id', userCtrl.getById);

export default router;
