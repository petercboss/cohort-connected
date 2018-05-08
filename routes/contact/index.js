(()=>{
    const router = require('express').Router();
    var nodemailer = require('nodemailer');
    // const creds = require('../config/config');
    const contactSend = require('./contactSend');

    router.use('/message', contactSend);


    module.exports = router;
})();