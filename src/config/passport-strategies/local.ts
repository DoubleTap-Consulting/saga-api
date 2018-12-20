import * as httpStatus from 'http-status';
import * as passport from 'passport';
import * as localStrategy from 'passport-local';
import { User } from '../../models/user';
import * as express from 'express';

passport.use(
  new localStrategy.Strategy(
    { usernameField: 'email' },
    async (email: string, password: string, done: any): Promise<any> => {
      try {
        const user = await User.query().findOne({ email });

        if (!user || !password) {
          return done({
            status: httpStatus.UNAUTHORIZED,
            message: 'The username or password you entered is incorrect.',
            isPublic: true,
          });
        }

        const isMatch = User.checkPasword(password, user.password);

        if (!isMatch) {
          return done({
            status: httpStatus.UNAUTHORIZED,
            message: 'The username or password you entered is incorrect.',
            isPublic: true,
          });
        }

        if (!user.activated) {
          return done({
            status: httpStatus.PRECONDITION_REQUIRED,
            message: 'This account has not yet been confirmed.',
            isPublic: true,
          });
        }

        return done(null, user);
      } catch (e) {
        return done(e);
      }
    },
  ),
);

export default passport;
