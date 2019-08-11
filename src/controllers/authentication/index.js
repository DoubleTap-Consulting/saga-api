const Promise = require('bluebird');
const { generateTokens } = require('../../utils/auth');
const userModel = require('../../models/user');
const authModel = require('../../models/authentication');
let authController = {};

/**
 * Create the user if one doesn't exist. Sends an email with a link to activate their account.
 * @param req ExpressReq
 * @param res ExpressResp
 * @param next ExpressNext
 */

authController.SIGN_IN = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  return userModel.SIGN_IN(email, password).then(response => {
    if (response.success) {
      let getTokens = () => {
        return new Promise((resolve, reject) => {
          let tokens = generateTokens(response.user);
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

authController.VERIFY_EMAIL = (req, res) => {
  const activationToken = req.body.activationToken;

  return authModel.VERIFY_EMAIL(activationToken).then(response => {
    if (response.success) {
      res.status(200).send(response);
    } else {
      res.status(400).send(response);
    }
  });
};

authController.CHECK_GAMERTAG = (req, res) => {
  const gamerTag = req.params.gamerTag;

  return authModel.CHECK_USER_GAMERTAG_EXISTS(gamerTag).then(response => {
    res.status(200).send(response);
  });
};

authController.LOGOUT = (req, res) => {
  res.sendStatus(200);
};

module.exports = authController;
