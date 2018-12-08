import * as express from 'express';

const isProd = process.env.NODE_ENV === 'production';

export const authError = (
  err: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): any => {
  if (err.name === 'UnauthorizedError') {
    let message = 'Unauthorized token';
    if (!isProd) {
      message = `${message}: ${err}`;
    }
    return res.status(401).send(message);
  }
  next(err);
};

export const validationError = (
  err: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): any => {
  if (err.message === 'validation error') {
    return res.status(422).send(err);
  }
  next(err);
};

export const objectionError = (
  err: any,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): any => {
  if (!err.statusCode) {
    return next(err);
  }

  const errMsgs: { [index: string]: string } = {
    400: 'Request unsuccessful',
    401: 'Unauthorized token',
    404: 'Resource not found',
  };

  let message = errMsgs[err.statusCode];
  if (!message) {
    return next(err);
  }

  if (!isProd) {
    message = `${message}: ${err.message}`;
  }
  return res.status(err.statusCode).send(message);
};

export const genericError = (
  // TODO: create our own Error class
  err: any,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): void => {
  // console.log(err.name);
  let message = err.message || 'Something went wrong';
  if (!isProd) {
    message = `${message}: ${err}`;
  }
  console.info('Error occurred', err);
  res.status(err.status || 500).send(message);
};
