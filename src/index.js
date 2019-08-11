import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

import * as express from 'express';
import * as passport from 'passport';
import * as compression from 'compression';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as helmet from 'helmet';
import * as expressValidation from 'express-validation';
import * as path from 'path';
// import './config/passport-strategies/local'; // init passport strategies
import routes from './routes';
import {
  objectionError,
  genericError,
} from './utils/middleware/error-handlers';

const app = express()
  .set('port', 4240)
  .use(helmet())
  .use(compression())
  // initialize passport
  .use(passport.initialize())
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
