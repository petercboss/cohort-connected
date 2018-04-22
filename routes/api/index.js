(()=>{
    const router = require('express').Router();
    const passport = require('passport');
    var mongoose = require('mongoose');
    // Require all models
    var db = require('../../models');
    // router.get('/', function (req, res) {
    //     res.render('index', { user: req.user });
    // });

    //send News
    router.get("/main/news", (req,res) => {
        db.News.find({}).then((data)=> res.json(data))
    });

    router.get("/main/events", (req,res) => {
        console.log('route hit')
        db.Events.find({}).then((data)=> res.json(data))
    });
    

    //get news data 
    router.post('/user', (req,res)=> {
        console.log('scott smells');
        console.log(req.body);
        db.User.create(req.body).then(user => res.json(user)).catch(err => res.json(err));
    })
    module.exports = router;
})();