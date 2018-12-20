import * as jwt from 'jsonwebtoken';
import * as _ from 'lodash';
import { series } from 'async';
import { env } from '../../config/env';

/**
 * Generates jwt accessToken and refreshToken
 * @param userId
 * @param roleId
 * @param passwordHash - encrypted password
 * @returns {*}
 */

function generateTokens(user: any): Promise<any> {
  return new Promise(
    (resolve: any, reject: any): any => {
      // eslint-disable-line
      if (!user) {
        return reject(new Error('Missing required argument(s)'));
      }
      const passwordHash = user.password || ''; // eslint-disable-line

      series(
        {
          accessToken: (next: any): void => {
            const tokenPayload = {
              userId: user.id,
            };

            jwt.sign(
              tokenPayload,
              env.JWT_SECRET,
              { expiresIn: env.JWT_ACCESS_TOKEN_TTL },
              next,
            );
          },
          refreshToken: (next: any): void => {
            const timestamp = Date.now();
            const key = env.JWT_SECRET + passwordHash + timestamp;
            jwt.sign(
              { userId: user.id, timestamp },
              key,
              { expiresIn: env.JWT_REFRESH_TOKEN_TTL },
              next,
            );
          },
        },
        (err: any, tokens: any) => {
          if (err) {
            return reject(err);
          }

          return resolve(tokens);
        },
      );
    },
  );
}

export default { generateTokens };
