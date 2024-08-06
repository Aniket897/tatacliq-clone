import passport from "passport";
import { Strategy as googleStrategy } from "passport-google-oauth20";

import User from "../models/user";

passport.use(
  new googleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: "/auth/google/callback",
      passReqToCallback: true,
    },
    async (req: any, accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({
          googleId: profile.id,
        });
        if (existingUser) {
          return done(null, existingUser);
        }

        // if dosen't exists creting one

        const newUser = await User.create({
          googleId: profile.id,
          profile: {
            name: profile.displayName,
            email: profile.emails ? profile.emails[0].value : "",
            avatar: profile._json.picture,
          },
        });

        done(null, newUser);
      } catch (error) {
        console.log(error);
        done(error);
      }
    }
  )
);

passport.serializeUser<any, any>((req, user, done) => {
  done(undefined, user);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});
