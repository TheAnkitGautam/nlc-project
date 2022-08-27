const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const UserModel = require('../models/user');

// Telling passport we want to use Google Strategy
passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {

        // check if user already exists in our own db
        UserModel.findOne({ googleId: profile._json.sub })
            .then(user => {
                if (user) {
                    done(null, user);
                } else {
                    const newUser = new UserModel({
                        googleId: profile._json.sub,
                        fullName: profile._json.name,
                        email: profile._json.email,
                        profilePic: profile._json.picture,
                    })

                    newUser.save()
                        .then(() => {
                            done(null, newUser);
                        })
                }
            })
    })
);

// serialize user into session
passport.serializeUser((user, done) => {
    done(null, user.id);
})

// deserialize user from session
passport.deserializeUser((id, done) => {
    UserModel.findById(id)
        .then(user => {
            done(null, user);
        })
})