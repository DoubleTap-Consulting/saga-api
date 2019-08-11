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
  if (!user) {
    return reject(new Error('Missing required argument(s)'));
  }

  let token = jwt.sign(
    {
      user_id: user.id,
    },
    process.env.JWT_SECRET,
    { expiresIn: '168h' },
  );

  return token;
}

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
