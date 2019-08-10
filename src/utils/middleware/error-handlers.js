import * as express from 'express';

const isProd = process.env.NODE_ENV === 'production';

export const authError = (err, req, res, next) => {
  console.info('Error occurred 4', err);
  if (err.name === 'UnauthorizedError') {
    let message = 'Unauthorized token';
    if (!isProd) {
      message = `${message}: ${err}`;
    }
    return res.status(401).send(message);
  }
  next(err);
};

export const validationError = (err, req, res, next) => {
  if (err.message === 'validation error') {
    return res.status(422).send(err);
  }
  next(err);
};

export const objectionError = (err, req, res, next) => {
  if (!err.statusCode) {
    return next(err);
  }

  const errMsgs = {
    400: 'Request unsuccessful',
    401: 'Unauthorized token',
    404: 'Resource not found',
  };

  let message = errMsgs[err.statusCode];
  if (!message) {
    return next(err);
  }

  console.info('Error occurred 2', err);
  if (!isProd) {
    message = `${message}: ${err.message}`;
  }
  return res.status(err.statusCode).send(message);
};

export const genericError = (err, req, res, next) => {
  let message = err.message || 'Something went wrong';
  if (!isProd && !err.message) {
    message = `${message}: ${JSON.stringify(err)}`;
  }
  console.info('Error occurred', err);
  res.status(err.status || 500).send(message);
};
