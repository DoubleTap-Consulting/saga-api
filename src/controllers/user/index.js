const sendgridService = require('../../config/sendgrid');
const { verifyToken, generateTokens } = require('../../utils/auth');
const userModel = require('../../models/user');
const uuid = require('uuid');
let userController = {};

/**
 * Create the user if one doesn't exist. Sends an email with a link to activate their account.
 * @param req ExpressReq
 * @param res ExpressResp
 * @param next ExpressNext
 */
userController.CREATE_USER = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const gamerTag = req.body.gamerTag;

  return userModel.CHECK_USER_EMAIL_EXISTS(email).then(response => {
    if (response.user_exists) {
      res.status(400).send({
        error: true,
        message: response.message,
      });
      return;
    }

    return userModel.CHECK_USER_GAMERTAG_EXISTS(gamerTag).then(response => {
      if (response.user_exists) {
        res.status(400).send({
          error: true,
          message: response.message,
        });
        return;
      }

      userModel.SIGN_UP(email, password, gamerTag).then(response => {
        if (!response.success) {
          res.status(400).send(response);
          return;
        }

        const activationToken = uuid.v4();

        const redirectUrl = `${process.env.WEBUI_PROTOCOL}://${
          process.env.WEBUI_URL
        }/account-confirmed?activationToken=${activationToken}`;

        sendgridService.send({
          to: email,
          from: 'contact@saga.gg',
          content: `Please click the following link to verify your email address and activate your account: ${redirectUrl}`,
          subject: 'Verify your email address for your Saga account.',
        });

        const token = generateTokens(response.user);
        res.status(200).send({ token });
      });
    });
  });
};

userController.GET_USER = (req, res) => {
  let user_id = req.params.userId;

  return userModel
    .GET_USER(user_id)
    .then(response => res.status(200).send(response));
};

userController.GET_PROFILE = (req, res) => {
  // TODO: get userId through auth
  return userModel
    .GET_USER(user_id)
    .then(response => res.status(200).send(response));
};

userController.GET_USERS = (req, res) => {
  return userModel.GET_USERS().then(response => res.status(200).send(response));
};

userController.UPDATE_USER = (req, res) => {
  const userId = req.params.userId;
  const userDataToUpdate = req.body;

  return userModel
    .UPDATE_USER(userId, userDataToUpdate)
    .then(response => res.status(200).send(response));
};

userController.DELETE_USER = (req, res) => {
  return userModel.DELETE_USER().then(() => res.sendStatus(200));
};

userController.UPDATE_GAMERTAG = (req, res) => {
  const userId = req.params.userId;
  const gamerTag = req.body.gamerTag;

  return userModel
    .UPDATE_USER(userId, gamerTag)
    .then(response => res.status(200).send(response));
};

userController.UPDATE_AVATAR = (req, res) => {
  const userId = req.params.userId;
  // TODO: implement images

  return userModel
    .UPDATE_AVATAR(userId)
    .then(response => res.status(200).send(response));
};

module.exports = userController;
