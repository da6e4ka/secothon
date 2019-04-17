require('marko/node-require');

const User = require('../api/model/user');

const recoveryPage = require('../view/login/recovery.marko');
const nodemailer = require('nodemailer');
const alertOnPage = require('./alertOnPage');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'secothon-org@secon.ru',
        pass: '5xaS9MaG'
    }
});


const post = async (ctx, next) => {

    //let mail = params.email;
    //console.log(mail);
    let params = ctx.request.body;

    let user = await User.findOne({email: params.email});

    if (null === user) {

        ctx.redirect('/recovery?alert=' + encodeURIComponent("На такую почту не зарегестрирована ни одна учетная запись"));

    } else {


        let usermail = user.get('email');
        let token = user.get('recoveryToken');

        let mailOptions = {
            from: 'secothon@secon.ru',
            to: usermail,
            subject: 'Ваша ссылка для восстановления',
            text: 'http://secothon.secon.ru/recovery/' + token
            //html:
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        ctx.redirect('/?type=success&alert=' + encodeURIComponent("На Вашу почту отправлено письмо"));
    }
};

const get = async (ctx, next) => {
    ctx.type = 'html';
    ctx.body = recoveryPage.stream({
        title: 'Восстановление аккаунта',
        alert: await alertOnPage(ctx)
    });
};

module.exports = {
    post: post,
    get: get,
};
