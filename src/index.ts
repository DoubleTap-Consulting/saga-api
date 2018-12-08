import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

import * as express from 'express';
import * as compression from 'compression';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as helmet from 'helmet';
import * as expressValidation from 'express-validation';
import * as path from 'path';
import { dbInit } from './config/db';
import routes from './routes';
import { authError, objectionError, genericError, validationError } from './utils/error-handlers';

const { Model } = require('objection');

dbInit(process.env);
// Configure express server

const app = express()
  .set('port', 4240)
  .use(helmet())
  .use(compression())
  .use(cors())
  .use(logger('short'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use('/api/v1', routes) // mount all routes in /api/v1
  .use(objectionError)
  .use(genericError);

// Start server
app.listen(app.get('port'), () => {
  console.info(
    '  App is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env'),
  );
});
