import * as jwt from 'jsonwebtoken';
import * as _ from 'lodash';
import { series } from 'async';
import { env } from '../../config/env';
console.log('='.repeat(10), 'env is', '='.repeat(10), '\n', env);
// import { userRoles, roleTypes } from 'tespa-configs'; // eslint-disable-line
// import { getRoleSlugs } from '../../config/tespa-configs';
// import { RefreshToken } from '../../config/db';

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

// function generatePermissions(user) {
//   if (!user) throw new Error('Missing required argument: user');
//   if (!user.role_slug) {
//     return [];
//   }

//   const roles = getRoleSlugs();
//   let permissions;

//   switch (user.role_slug) {
//     case userRoles.regionalCoordinator.slug:
//     case userRoles.tespaAdmin.slug:
//     case userRoles.superAdmin.slug:
//       permissions = roles.slice(2, roles.indexOf(user.role_slug) + 1);
//       break;
//     case userRoles.paidChapterLeader.slug:
//       permissions =
//         user.status === 'Paid'
//           ? [userRoles.paidValidStudent.slug, user.role_slug]
//           : [userRoles.freeChapterLeader.slug];
//       break;
//     case userRoles.paidChapterMember.slug:
//       permissions =
//         user.status === 'Paid'
//           ? [userRoles.paidValidStudent.slug, user.role_slug]
//           : [userRoles.freeChapterMember.slug];
//       break;
//     case userRoles.paidValidStudent.slug:
//       permissions = [
//         user.status === 'Paid' ? user.role_slug : userRoles.validStudent.slug,
//       ];
//       break;
//     default:
//       permissions = [user.role_slug];
//   }

//   return permissions;
// }

// async function removeTokens(user) {
//   const userTokens = await user.getRefreshToken();

//   return RefreshToken.destroy({
//     where: { id: { $in: _.map(userTokens, 'id') } },
//   });
// }

export default { generateTokens };
