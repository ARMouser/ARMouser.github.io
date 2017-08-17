var credentials = require('./emailSecret.js');
var nodemailer = require('nodemailer');
 
module.exports = (name, message) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: credentials.email,
            pass: credentials.password
        }
    });

    var mailOptions = {
        from: credentials.email,
        to: credentials.email,
        subject: `Message from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, function(err, info){
        if (err) throw err;
        console.log('Email sent: ' + info.response);
    });
 };
