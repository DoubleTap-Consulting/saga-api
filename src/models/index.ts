import * as objection from 'objection';
const db = objection.Model;
import { User } from './user';
import { UserActivation } from './userActivation';

export {
  db,
  User,
  UserActivation,
};
