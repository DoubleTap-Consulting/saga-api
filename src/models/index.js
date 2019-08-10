import * as objection from 'objection';
const db = objection.Model;
import { User } from './user';
import { Tournament } from './tournament';
import { UserToken } from './userToken';

export { db, User, UserToken, Tournament };
