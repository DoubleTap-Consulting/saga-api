import * as Knex from 'knex';
import { Model } from 'objection';

const models = require('../models');

export const dbInit = async function(env: {
  [index: string]: string | undefined;
}): Promise<void> {
  try {
    const knex = Knex({
      client: env.DB_DIALECT,
      connection: env.DATABASE_URL,
      searchPath: ['public'!, 'public'],
      // todo: have to figure out why we're creating >10 connections to database...
      // pool: {
      //   afterCreate: (conn: any, done: any): void => {
      //     console.log('='.repeat(10), 'connection made', '='.repeat(10), '\n');
      //     conn.query('SELECT * FROM user', (err: any): void => {
      //       console.log('='.repeat(10), 'user is', '='.repeat(10), '\n');
      //     });
      //     conn.query('select 1 + 1 as result', (err: any): void => {
      //       console.log('='.repeat(10), 'err is', '='.repeat(10), '\n', err);
      //     })
      //   },
      //   min: 2,
      //   max: 10,
      // },
    });
    // todo: only log on dev mode
    knex.on('query', (data: any) => { console.info('query info \n'); console.dir(data); });
    Model.knex(knex);
  } catch (e) {
    console.info('='.repeat(10), 'error in initing db', '='.repeat(10), '\n', e);
  }
};

export default models;
