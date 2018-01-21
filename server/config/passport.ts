import { use, serializeUser, deserializeUser } from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { User } from '../models/user.model';

module.exports = () => {
  use(new LocalStrategy((username: string, password: string, done: Function) => {
    User.findOne({ username: username })
      .then((user: any) => {
        if (!user) {
          return done(null, false);
        }

        if (!user.authenticate(password)) {
          return done(null, false);
        }

        return done(null, user);
      });
  }));

  serializeUser((user: any, done: Function) => {
    if (user) {
      return done(null, user._id);
    }
  });

  deserializeUser((id: string, done: Function) => {
    User.findById(id).then((user: any) => {
      if (!user) {
        return done(null, false);
      }

      return done(null, user);
    });
  });
};
