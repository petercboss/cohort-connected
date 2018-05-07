(()=>{
    const express = require('express')
        , passport = require('passport')
        , bodyParser = require('body-parser')
        , mongoose = require('mongoose')
        , routes = require('./routes')
        , app = express()
        , keys = require('./config/keys')
        , PORT = process.env.PORT || 3001
        , path = require('path')
        , schedule = require('node-schedule')
        , axios = require('axios')
        , nodemailer = require('nodemailer');
 

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

    // Start the API server
    app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });


    const scrape = schedule.scheduleJob('0 5 * * * ', () => {
        axios.get('https://cohortconnected.herokuapp.com/scrape/news/techcrunch')
        .then(axios.get('https://cohortconnected.herokuapp.com/scrape/events/builtin/0'))
        .then(axios.get('https://cohortconnected.herokuapp.com/scrape/events/builtin/1'))
        .then(axios.get('https://cohortconnected.herokuapp.com/scrape/events/builtin/2'))
        .then(axios.get('https://cohortconnected.herokuapp.com/scrape/events/builtin/3'))
        .then(axios.get('https://cohortconnected.herokuapp.com/scrape/events/builtin/4'))
        .then(axios.get('https://cohortconnected.herokuapp.com/scrape/events/builtin/5'))
        .then(axios.get('https://cohortconnected.herokuapp.com/scrape/events/builtin/6'))
      });

})();