import * as validate from 'express-validation';
import authCtrl from '../controllers/authentication';
// import pV from './paramValidation';
import * as express from 'express';

const router = express.Router();

/**
 * POST /authentication/v1/token,
 * returns new auth token
 */
router.post('/token', authCtrl.token);

/**
 * POST /api/v1/authentication/verify-email?apiToken,
 * returns new auth token
 */

router.get('/verify-email', authCtrl.verifyEmail);

export default router;
