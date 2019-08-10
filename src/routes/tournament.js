import * as validate from 'express-validation';
import tournamentCtrl from '../controllers/tournament';
import * as express from 'express';

const router = express.Router();

/**
 * POST /api/v1/tournament,
 * returns new tournament
 */
router.post('/', tournamentCtrl.create);

/**
 * GET /api/v1/tournament/id,
 * returns tournament
 */
router.get('/id', tournamentCtrl.getById);

export default router;
