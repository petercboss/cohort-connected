(()=>{
    const express = require('express')
        , passport = require('passport')
        , bodyParser = require('body-parser')
        , mongoose = require('mongoose')
        , routes = require('./routes')
        , app = express()
        , passportSetup = require('./config/passport-setup')
        , keys = require('./config/keys')
        , PORT = process.env.PORT || 3001
        , path = require('path')


    // Set mongoose to leverage built in JavaScript ES6 Promises
    mongoose.Promise = Promise;
    const cookieSession = require('cookie-session');
    // set up session cookies
    app.use(cookieSession({
        maxAge: 24 * 60 * 60 * 1000,
        keys: [keys.session.cookieKey]
    }));


    
    // configure Express
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    // Serve up static assets
    app.use(express.static(path.join(__dirname, 'client','build')));
    // Add routes, both API and view

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });

    app.use(routes);

    


    // Connect to the Mongo DB
    mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cohortconnected");

    app.get("*", (req, res) => {  
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });

    // Start the API server
    app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
})();