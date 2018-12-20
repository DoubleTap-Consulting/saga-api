import * as passport from 'passport';
import '../../config/passport-strategies/local'; // init local strategy

/* Passport local strategy middleware */
const passportLocalMiddleware = passport.authenticate('local', { session: false });

const middlewares = {
  passportLocalMiddleware,
};

export {
  passportLocalMiddleware,
};
