import * as objection from 'objection';
const db = objection.Model;

import { User } from './user';
import { Tournament } from './tournament';
import { Authentication } from './authentication';
import { Endorsement } from './endorsement';

export { db, User, Authentication, Tournament, Endorsement };
