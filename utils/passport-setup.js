
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const facebookStrategy = require('passport-facebook').Strategy
require('dotenv').config();
const passport = require("passport");

passport.use(
    new GoogleStrategy({

        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/google/callback",
        scope: ["profile", "email"],

    },
        function (accessToken, refreshToken, profile, callback) {
            callback(null, profile);
        }
    )

)


passport.use(

    new facebookStrategy({

        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_SECRET_ID,
        callbackURL: "http://localhost:3000/facebook/callback",
        profileFields: ['id', 'displayName', 'name', 'gender', 'picture.type(large)', 'email']

    },
        function (token, refreshToken, profile, done) {
            console.log(profile)
            return done(null, profile)
        }
    )


)

passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser((user, done) => {
    done(null, user);
})

