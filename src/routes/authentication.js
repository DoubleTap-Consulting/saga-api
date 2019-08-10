import * as validate from 'express-validation';
import authCtrl from '../controllers/authentication';
// import pV from './paramValidation';
import userCtrl from '../controllers/user';
import { passportLocalMiddleware } from '../utils/middleware/passport';

import * as express from 'express';

const router = express.Router();

/**
 * POST /authentication/v1/token,
 * returns new auth token
 */
router.post('/token', authCtrl.token);

router.post('/register', userCtrl.create);
router.post('/login', passportLocalMiddleware, authCtrl.sign);
/**
 * POST /api/v1/authentication/verify-email?apiToken,
 * returns new auth token
 */

router.get('/verify-email', authCtrl.verifyEmail);

export default router;
