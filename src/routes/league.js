import * as validate from 'express-validation';
import leagueCtrl from '../controllers/league';
import * as express from 'express';

const router = express.Router();

/**
 * POST /api/v1/league,
 * returns new league
 */
router.post('/', leagueCtrl.create);

/**
 * GET /api/v1/league/id,
 * returns league
 */
router.get('/id', leagueCtrl.getById);

export default router;
