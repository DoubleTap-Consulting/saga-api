import * as objection from 'objection';
const db = objection.Model;

import { User } from './user';
import { Tournament } from './tournament';
import { Authentication } from './authentication';
import { Endorsement } from './endorsement';
import { Featured } from './featured';
import { League } from './league';
import { Marketplace } from './marketplace';
import { Partner } from './partner';
import { Content } from './content';

export {
  db,
  User,
  Authentication,
  Tournament,
  Endorsement,
  Featured,
  League,
  Marketplace,
  Partner,
  Content,
};
