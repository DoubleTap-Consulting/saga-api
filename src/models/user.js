import * as bcrypt from 'bcryptjs';
import { throws } from 'assert';

const { Model } = require('objection');

export class User extends Model {
  static get tableName() {
    return 'user';
  }

  static get relationMappings() {
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

  static checkPasword(password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword);
  }

  static basicInfo() {
    return this.query().select('id', 'gamerTag', 'email');
  }
  /**
   *
   * @param token the token to be inserted into the users table
   */
  static async hashPassword(password) {
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
  }

  static async create(user) {
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

  static async createToken(token) {
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
