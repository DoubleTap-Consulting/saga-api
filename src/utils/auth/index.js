const jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');

/**
 * Generates jwt accessToken and refreshToken
 * @param userId
 * @param roleId_
 * @param passwordHash - encrypted password
 * @returns {*}
 */

function generateTokens(user) {
  return new Promise((resolve, reject) => {
    // eslint-disable-line
    if (!user) {
      return reject(new Error('Missing required argument(s)'));
    }
    const passwordHash = user.password || ''; // eslint-disable-line

    series(
      {
        accessToken: next => {
          const tokenPayload = {
            userId: user.id,
          };

          jwt.sign(
            tokenPayload,
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_ACCESS_TOKEN_TTL },
            next,
          );
        },
        refreshToken: next => {
          const timestamp = Date.now();
          const key = process.env.JWT_SECRET + passwordHash + timestamp;
          jwt.sign(
            { userId: user.id, timestamp },
            key,
            { expiresIn: process.env.JWT_REFRESH_TOKEN_TTL },
            next,
          );
        },
      },
      (err, tokens) => {
        if (err) {
          return reject(err);
        }

        return resolve(tokens);
      },
    );
  });
}

// const generateTokens = user_id => {
//   let token = jwt.sign(
//     {
//       user_id,
//     },
//     process.process.env.JWT_SECRET,
//     { expiresIn: '168h' },
//   );

//   return token;
// };

const verifyToken = token => {
  return jwt.verify(token, process.process.env.JWT_SECRET, (error, decoded) => {
    if (error) {
      return {
        succeeded: false,
        error,
      };
    } else {
      return {
        succeeded: true,
        decoded,
      };
    }
  });
};

const hashPassword = password => {
  return bcrypt.hash(password, 10).then(hash => {
    return hash;
  });
};

const comparePasswords = (password, hash) => {
  return bcrypt.compare(password, hash).then(res => {
    return res;
  });
};

module.exports = {
  generateTokens,
  verifyToken,
  hashPassword,
  comparePasswords,
};
