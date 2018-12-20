import * as express from 'express';
import * as httpStatus from 'http-status';
import { User, UserToken } from '../../models/';
import authHelper from '../../utils/auth';
import * as jwt from 'jsonwebtoken';

export const token = async (
  req: express.Request,
  res: express.Response,
): Promise<any> => {
  const dummyToken = 'absd';
  const user = User.createToken(dummyToken);
  res.json(dummyToken);
};

/**
 * Returns jwt accessToken and refreshToken
 * -- Email and password validation handled in passport middleware
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
async function sign(req: express.Request, res: express.Response, next: express.NextFunction): Promise<any> {
  try {
    const id = req.user.id || req.user.userId;

    const user = await User.basicInfo().findById(id);

    if (!user) {
      return next({
        status: httpStatus.INTERNAL_SERVER_ERROR,
        message: 'User Not Found',
      });
    }

    const tokens = await authHelper.generateTokens(user);
    const { accessToken, refreshToken } = tokens;
    const decodedRefreshToken = jwt.decode(refreshToken, { complete: true });
    const decodedAccessToken = jwt.decode(accessToken, { complete: true });
    const updatedUser = await User.query().upsertGraph({
      id: user.id,
      userToken: [{
        refresh: decodedRefreshToken && typeof decodedRefreshToken === 'object' && decodedRefreshToken.signature,
        access: decodedAccessToken && typeof decodedAccessToken === 'object' && decodedAccessToken.signature,
      }],
    });
    return res.json({
      accessToken,
      refreshToken,
      user,
    });
  } catch (e) {
    return next(e);
  }
}

/**
 * Verifies that the user has activated their account once they click the link on their email.
 * @param req ExpressReq
 * @param res ExpressResp
 * @param next ExpressNext
 */
export const verifyEmail = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): Promise<any> => {
  try {
    let user = await User.query()
      .findOne({})
      .innerJoin('userToken', 'userToken.userId', 'user.id')
      .where('userToken.activation', '=', req.query.activationToken);
    if (!user) {
      return next({
        status: httpStatus.CONFLICT,
        message: 'No token exists for that user',
      });
    } else {
      // Probably should do this in a transaction. Update the activated field to true, and then delete the token.
      user = await User.query().findById(user.id).patch({ activated: true });
      await UserToken.query().delete().where({ activation: req.query.activationToken });
    }
    res.json({
      httpStatus: 'OK',
      message: 'Account Verified',
    });
  } catch (e) {
    return next(e);
  }
};

export default {
  token,
  verifyEmail,
  sign,
};
