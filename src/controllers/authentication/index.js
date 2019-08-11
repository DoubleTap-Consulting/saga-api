const { sendgridService } = require('../../config/sendgrid');
const { generateTokens } = require('../../utils/auth');

let userController = {};
let userModel = require('../../models/user');
let Promise = require('bluebird');

/**
 * Create the user if one doesn't exist. Sends an email with a link to activate their account.
 * @param req ExpressReq
 * @param res ExpressResp
 * @param next ExpressNext
 */

userController.SIGN_IN = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

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

userController.VERIFY_EMAIL = (req, res) => {
  let email = req.body.email;

  return authModel.VERIFY_EMAIL(email).then(response => {
    if (response.success) {
      res.status(200).send(response);
    } else {
      res.status(400).send(response);
    }
  });
};

userController.LOGOUT = (req, res) => {
  res.sendStatus(200);
};

module.exports = userController;
