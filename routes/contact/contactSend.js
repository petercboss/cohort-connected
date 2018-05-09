(()=>{
    const router = require('express').Router();
    var nodemailer = require('nodemailer');
    // const creds = require('../../config/contactForm');

    var transport = {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        tls: {
          rejectUnauthorized: false
        },
        auth: {
          user: 'cohortconnected@gmail.com',
          pass: 'nw_bootcamp'
          // user: process.env.USER,
          // pass: process.env.PASS
        }
      }
      
      var transporter = nodemailer.createTransport(transport)
      
      transporter.verify((error, success) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Server is ready to take messages');
        }
      });

      
      router.post('/send', (req, res, next) => {
        var subject = req.body.subject
        var email = req.body.email
        var message = req.body.message
        var content = `Subject: ${subject} \nEmail: ${email} \nMessage: ${message} `
      
        var mail = {
          from: 'Contact Page',
          to: 'cohortconnected@gmail.com',
          subject: 'New Message from Contact Form',
          text: content
        }
      
        transporter.sendMail(mail, (err, data) => {
          if (err) {
            res.json({
              msg: 'fail'
            })
          } else {
            res.json({
              msg: 'success'
            })
          }
        })
      })
      

    module.exports = router;
})();