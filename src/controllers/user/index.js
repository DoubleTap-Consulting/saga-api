import { sendgridService } from '../../config/sendgrid';
import { verifyToken, generateTokens } from '../utils/auth';

let userController = {};
let userModel = require('../models/user');
let Promise = require('bluebird');

/**
 * Create the user if one doesn't exist. Sends an email with a link to activate their account.
 * @param req ExpressReq
 * @param res ExpressResp
 * @param next ExpressNext
 */
userController.SIGN_UP = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let company = req.body.company;
  let termsaccepted = req.body.termsaccepted;

  return userModel.CHECK_USER_EXISTS(email).then(response => {
    if (response.user_exists) {
      res.status(400).send({
        error: true,
        message: 'That email is already taken.',
      });
      return;
    }

    userModel
      .SIGN_UP(email, password, company, termsaccepted)
      .then(response => {
        if (!response.success) {
          res.status(400).send(response);
          return;
        }

        const redirectUrl = `${process.env.WEBUI_PROTOCOL}://${
          process.env.WEBUI_URL
        }/account-confirmed?activationToken=${activationToken}`;

        await sendgridService.send({
          to: email,
          from: 'contact@saga.gg',
          content: `Please click the following link to verify your email address and activate your account: ${redirectUrl}`,
          subject: 'Verify your email address for your Saga account.',
        });

        let token = generateTokens(response.user.id);
        res.status(200).send({ token });
      });
  });
};

userController.SIGN_IN = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  return userModel.SIGN_IN(email, password).then(response => {
    if (response.success) {
      let getTokens = () => {
        return new Promise((resolve, reject) => {
          let tokens = generateTokens(response.user.id);
          resolve(tokens);
        });
      };

      getTokens().then(tokens => {
        res.status(200).send({ tokens });
      });
    } else {
      res.status(400).send(response);
    }
  });
};

userController.ADMIN_SIGN_IN = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  return userModel.ADMIN_SIGN_IN(email, password).then(response => {
    if (response.success) {
      let getTokens = () => {
        return new Promise((resolve, reject) => {
          let tokens = generateTokens(response.user.id);
          resolve(tokens);
        });
      };

      getTokens().then(tokens => {
        res.status(200).send({ tokens });
      });
    } else {
      res.status(400).send(response);
    }
  });
};

userController.GET_USER = (req, res) => {
  let authorized = verifyToken(req.headers.authorization);

  if (!authorized.decoded) {
    res.status(400).send({
      error: 'No account created',
    });
    return;
  }

  return userModel
    .GET_USER(authorized.decoded.user_id)
    .then(response => res.status(200).send(response));
};

userController.GET_USERS = (req, res) => {
  let authorized = verifyToken(req.headers.authorization);

  if (!authorized.decoded) {
    res.status(400).send({
      error: 'No account created',
    });
    return;
  }

  return userModel.GET_USERS().then(response => res.status(200).send(response));
};

userController.UPDATE_USER = (req, res) => {
  let userId = req.params.userId;
  let userDataToUpdate = req.body;

  return userModel
    .UPDATE_USER(userId, userDataToUpdate)
    .then(response => res.status(200).send(response));
};

userController.DELETE_USER = (req, res) => {
  return userModel.DELETE_USER().then(() => res.sendStatus(200));
};

userController.LOGOUT = (req, res) => {
  res.sendStatus(200);
};

module.exports = userController;
