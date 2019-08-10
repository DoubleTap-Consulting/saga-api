import * as express from 'express';
import * as httpStatus from 'http-status';
import { User } from '../../models/user';
import { sendgridService } from '../../config/sendgrid';
import axios from 'axios';
import * as uuid from 'uuid';

/**
 * Create the user if one doesn't exist. Sends an email with a link to activate their account.
 * @param req ExpressReq
 * @param res ExpressResp
 * @param next ExpressNext
 */
export const create = async (req, res, next) => {
  try {
    const user = await User.basicInfo().findOne({ email: req.body.email });
    if (user) {
      return next({
        status: httpStatus.CONFLICT,
        message: 'A user with that email address already exists.',
      });
    }

    // setCode using a uuid
    const activationToken = uuid.v4();
    const hashedPassword = await User.hashPassword(req.body.password);
    const createdUser = await User.query().insertGraph({
      email: req.body.email,
      gamerTag: req.body.gamerTag,
      password: hashedPassword,
      userToken: [
        {
          activation: activationToken,
        },
      ],
    });
    const redirectUrl = `${process.env.WEBUI_PROTOCOL}://${
      process.env.WEBUI_URL
    }/account-confirmed?activationToken=${activationToken}`;
    await sendgridService.send({
      to: req.body.email,
      from: 'contact@saga.gg',
      content: `Please click the following link to verify your email address and activate your account: ${redirectUrl}`,
      subject: 'Verify your email address for your Saga account.',
    });
    res.status(httpStatus.OK).send('Created successfully');
  } catch (e) {
    return next(e);
  }
};

export const getById = async (req, res, next) => {
  try {
    const dummyData3 = 'dummy-data';
    return res.json(dummyData3);
  } catch (e) {
    return next(e);
  }
};

export default {
  create,
  getById,
};
