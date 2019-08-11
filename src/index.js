const path = require('path');
const config = require('dotenv').config({ path: '.env' });
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const rootRouter = require('./routes');
const helmet = require('helmet');
const PORT = process.env.PORT || 4240;

const routes = require('./routes');

const app = express()
  .use(helmet())
  // initialize passport
  .use(cors())
  .use(logger('short'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use('/api/v1', routes); // mount all routes in /api/v1

// Start server
app.listen(PORT, () => console.log('Making some magic on port ', PORT));
