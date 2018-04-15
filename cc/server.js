const express = require('express')
    , passport = require('passport')
    , bodyParser = require('body-parser')
    , mongoose = require('mongoose')
    , routes = require('./routes')
    , app = express()
    , LinkedinStrategy = require('./lib').Strategy
    , PORT = process.env.PORT || 3001

// API Access link for creating client ID and secret:
const LINKEDIN_CLIENT_ID = "78xlkz34c94sm1";
const LINKEDIN_CLIENT_SECRET = "ZhytKExkzWeIfnU1";

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

// Use the LinkedinStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Linkedin
//   profile), and invoke a callback with a user object.
passport.use(new LinkedinStrategy({
    clientID: LINKEDIN_CLIENT_ID,
    clientSecret: LINKEDIN_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/linkedin/callback",
    scope: ['r_basicprofile', 'r_emailaddress'],
    passReqToCallback: true
},
    function (req, accessToken, refreshToken, profile, done) {
        // asynchronous verification, for effect...
        req.session.accessToken = accessToken;
        process.nextTick(function () {
            // To keep the example simple, the user's Linkedin profile is returned to
            // represent the logged-in user.  In a typical application, you would want
            // to associate the Linkedin account with a user record in your database,
            // and return that user instead.
            return done(null, profile);
        });
    }
));

// configure Express
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 // Serve up static assets
app.use(express.static("client/build"));
 // Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cohortconnected");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});