(()=>{
    const path = require('path');
    const router = require('express').Router();
    const apiRoutes = require('./api');
    const scrapeRoutes = require('./scrape');
    const passport = require('passport');
    

    var mongoose = require('mongoose');
    // Require all models
    var db = require('../models');


    // router.get('/api/main/news'), (req,res) => {
    //     console.log('news api hit')
    //     db.News.find({}).then((newsStroy)=>{res.json(newsStroy)}).catch((err) => console.log(`THE IS ERROR IS THE FOLLOWING: ${err}`));
    // }
    router.use('/api', apiRoutes);
    router.use('/scrape', scrapeRoutes);

    router.get('/auth/linkedin',
        passport.authenticate('linkedin'),
        function (req, res) {
            // The request will be redirected to LinkedIn for authentication, so this 
            // function will not be called. 
        });

    router.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
        successRedirect: '/index',
        failureRedirect: '/login'
    }));

    router.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    router.use(function (req, res) {
        res.sendFile(path.join(__dirname, '../client/public/index.html'));
    });

    module.exports = router;
})();