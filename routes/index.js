(()=>{
    const path = require('path');
    const router = require('express').Router();
    const apiRoutes = require('./api');
    const scrapeRoutes = require('./scrape');
    const userRoutes = require('./user');
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


    router.use(function (req, res) {
        res.sendFile(path.join(__dirname, '../client/public/index.html'));
    });

    module.exports = router;
})();