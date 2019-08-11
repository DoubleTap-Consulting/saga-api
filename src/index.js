const path = require('path');
const config = require('dotenv').config({ path: '.env' });
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const rootRouter = require('./routes');
const helmet = require('helmet');
const PORT = process.env.PORT || 3001;

const routes = require('./routes');

const app = express()
  .set('port', 4240)
  .use(helmet())
  // initialize passport
  .use(cors())
  .use(logger('short'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use('/api/v1', routes); // mount all routes in /api/v1

// Start server
app.listen(app.get('port'), () => {
  console.info(
    '  App is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env'),
  );
});
