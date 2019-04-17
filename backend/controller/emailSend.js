const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'secothon-org@secon.ru',
        pass: '5xaS9MaG' // @todo пароль не должен храниться в git
    }
});


module.exports = async mailOptions => await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});