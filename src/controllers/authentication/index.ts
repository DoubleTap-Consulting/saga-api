import * as express from 'express';
import * as httpStatus from 'http-status';
import { User, UserActivation } from '../../models/';

export const token = async (
  req: express.Request,
  res: express.Response,
): Promise<any> => {
  const dummyToken = 'absd';
  const user = User.createToken(dummyToken);
  res.json(dummyToken);
};

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
      .innerJoin('userActivation', 'userActivation.userId', 'user.id')
      .where('userActivation.token', '=', req.query.activationToken);
    if (!user) {
      return next({
        status: httpStatus.CONFLICT,
        message: 'No token exists for that user',
      });
    } else {
      // Probably should do this in a transaction. Update the activated field to true, and then delete the token.
      user = await User.query().findById(user.id).patch({ activated: true });
      await UserActivation.query().delete().where({ token: req.query.activationToken });
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
};
