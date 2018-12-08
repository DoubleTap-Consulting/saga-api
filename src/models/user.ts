import * as bcrypt from 'bcryptjs';

const { Model } = require('objection');

export class User extends Model {
  static get tableName(): string {
    return 'user';
  }

  static get relationMappings(): any {
    return {
      userActivation: {
        relation: Model.HasOneRelation,
        modelClass: `${__dirname}/userActivation`,
        join: {
          from: 'user.id',
          to: 'userActivation.userId',
        },
      },
    };
  }

  /**
   *
   * @param token the token to be inserted into the users table
   */
  static async hashPassword(password: string): Promise<any> {
    try {
      const hashedPassword = await new Promise(
        (resolve: any, reject: any): any => {
          bcrypt.hash(password, 10, function(err: any, hash: any): any {
            if (err) {
              reject(err);
            }
            resolve(hash);
          });
        },
      );
      return hashedPassword;
    } catch (e) {
      throw {
        message: 'Error in hashing password',
        e,
      };
    }
  }

  static async create(user: any): Promise<any> {
    try {
      const hashedPassword = await User.hashPassword(user.password);
      const newUser = await User.query().insert({
        email: user.email,
        password: hashedPassword,
        gamerTag: user.gamerTag,
      });
      return newUser;
    } catch (e) {
      throw {
        message: 'Error in creating user',
        e,
      };
    }
  }

  static async createToken(token: string): Promise<any> {
    try {
      const user = await User.query().insert({
        firstName: 'Jennifer',
        lastName: 'Lawrence',
        phoneNumber: 'testnumber',
        email: 'testemail',
        address: 'some address',
      });
      return 'todo: update the user record';
    } catch (e) {
      throw {
        message: 'Error in creating token',
        e,
      };
    }
  }
}
