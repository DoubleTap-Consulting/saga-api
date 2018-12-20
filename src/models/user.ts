import * as bcrypt from 'bcryptjs';
import { throws } from 'assert';

const { Model } = require('objection');

export class User extends Model {
  static get tableName(): string {
    return 'user';
  }

  static get relationMappings(): any {
    return {
      userToken: {
        relation: Model.HasManyRelation,
        modelClass: `${__dirname}/userToken`,
        join: {
          from: 'user.id',
          to: 'userToken.userId',
        },
      },
    };
  }

  static checkPasword(password: string, hashedPassword: string): boolean {
    return bcrypt.compareSync(password, hashedPassword);
  }

  static basicInfo(): any {
    return this.query().select('id', 'gamerTag', 'email');
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
