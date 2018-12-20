import * as objection from 'objection';
const db = objection.Model;
import { User } from './user';
import { UserToken } from './userToken';

export {
  db,
  User,
  UserToken,
};
