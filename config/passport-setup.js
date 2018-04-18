const passport = require('passport');
const keys = require('./keys');

const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;


// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete Linkedin profile is
//   serialized and deserialized.
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});


passport.use(new LinkedInStrategy({
    clientID: keys.linkedIn.LINKEDIN_CLIENT_ID,
    clientSecret: keys.linkedIn.LINKEDIN_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/linkedin/callback",
    scope: ['r_emailaddress', 'r_basicprofile'],
    state: true
}, function (accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect... 
    process.nextTick(function () {
        // To keep the example simple, the user's LinkedIn profile is returned to 
        // represent the logged-in user. In a typical application, you would want 
        // to associate the LinkedIn account with a user record in your database, 
        // and return that user instead. 
        console.log(profile);
        return done(null, profile);
    });
}));





