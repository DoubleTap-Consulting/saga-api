import * as bcrypt from 'bcryptjs';
import { comparePasswords } from '../utils/auth';

let userModel = {};
let User = require('../db').Users;

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

userModel.VERIFY_EMAIL = email => {
  return User.findOne({
    where: {
      email,
    },
  }).then(user => {
    if (user.email_verified) {
      return {
        success: true,
      };
    } else {
      return {
        success: false,
        message: 'Please verify your email address',
      };
    }
  });
};

userModel.CHECK_USER_EXISTS = email => {
  return User.findOne({
    where: {
      email,
    },
  }).then(user => {
    if (user) {
      return {
        user_exists: true,
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
    const hashedPassword = await new Promise((resolve, reject) => {
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
