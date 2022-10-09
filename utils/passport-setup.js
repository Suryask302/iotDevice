
// const passport = require('passport');
// require('dotenv').config();
// const GoogleStrategy = require('passport-google-oauth2').Strategy;

// // used to serialize the user for the session

// passport.serializeUser(function (user, done) {
//     done(null, user);
// });

// // used to deserialize the user

// passport.deserializeUser(function (user, done) {
//     done(null, user);
// });

// //Google strategy

// passport.use(new GoogleStrategy({

//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://localhost:3000/google/callback",
//     passReqToCallback: true


// }, (request, accessToken, refreshToken, profile, done) => {

//     console.log(profile)
//     done(null, profile)

// }));




const GoogleStrategy = require("passport-google-oauth20").Strategy;
const facebookStrategy = require('passport-facebook').Strategy
require('dotenv').config();
const passport = require("passport");

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:3000/google/callback",
            scope: ["profile", "email"],
        },
        function (accessToken, refreshToken, profile, callback) {
            callback(null, profile);
        }
    )
);


passport.use(
    new facebookStrategy({
        
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_SECRET_ID,
        callbackURL: "http://localhost:3000/facebook/callback",
        profileFields: ['id', 'displayName', 'name', 'gender', 'picture.type(large)', 'email']

    },// facebook will send back the token and profile
        function (token, refreshToken, profile, done) {
            console.log(profile)
            return done(null, profile)
        })
)

passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser((user, done) => {
    done(null, user);
})

