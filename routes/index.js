(()=>{
    const path = require('path');
    const router = require('express').Router();
    const apiRoutes = require('./api');
    const scrapeRoutes = require('./scrape');
    const passport = require('passport');
    


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
        res.sendFile(path.join(__dirname, '../client/public/login.html'));
    });

    module.exports = router;
})();