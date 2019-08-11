const bcrypt = require('bcryptjs');
const { comparePasswords } = require('../../utils/auth');

let userModel = {};
let User = require('../../db').Users;

userModel.SIGN_IN = (email, password) => {
  return User.findOne({
    where: {
      email,
    },
  }).then(user => {
    if (!user) {
      return {
        success: false,
        message: 'Incorrect username or password',
      };
    }

    return comparePasswords(password, user.password).then(result => {
      if (result) {
        return {
          success: true,
          user,
        };
      }

      return {
        success: false,
        message: 'Incorrect username or password',
      };
    });
  });
};

userModel.VERIFY_EMAIL = activationToken => {
  return User.findOne({
    where: {
      activationToken,
    },
  }).then(user => {
    if (user) {
      User.update(
        { email_verified: true, activationToken: null },
        { where: activationToken },
      );
    } else {
      return {
        success: false,
        message: 'No activation token found',
      };
    }
  });
};

userModel.CHECK_USER_GAMERTAG_EXISTS = gamerTag => {
  return User.findOne({
    where: {
      gamerTag,
    },
  }).then(user => {
    if (user) {
      return {
        user_exists: true,
        message: 'That gamertag is already taken.',
      };
    }
    return {
      user_exists: false,
    };
  });
};

const checkPasword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};

const hashPassword = async function(password) {
  try {
    const hashedPassword = new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, function(err, hash) {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
    return hashedPassword;
  } catch (e) {
    throw {
      message: 'Error in hashing password',
      e,
    };
  }
};

module.exports = userModel;
