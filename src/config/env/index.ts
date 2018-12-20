import * as path from 'path';

/* istanbul ignore next */
const NODE_ENV = process.env.NODE_ENV || 'development';

import config from './development';

const defaults = {
  NODE_ENV,
  DB_DIALECT: process.env.DB_DIALECT || 'pg',
  DATABASE_URL: process.env.DATABASE_URL,
  DB_DATABASE: process.env.DB_DATABASE,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_ACCESS_TOKEN_TTL: process.env.JWT_ACCESS_TOKEN_TTL,
  JWT_REFRESH_TOKEN_TTL: process.env.JWT_REFRESH_TOKEN_TTL,
};

// todo: export default
export let env: any = Object.assign(defaults, config);
