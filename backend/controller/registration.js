require('marko/node-require');
const jwt = require('jsonwebtoken');
const util = require('util');
const moment = require('moment');
const config = require('../config');
const regPage = require('../view/login/registration.marko');
const emailPage = require('../view/layout/email.marko');
const sendMail = require("./emailSend");

const validator = require('validator');
const alertOnPage = require('./alertOnPage');

const Settings = require('../api/model/settings');

const link = "https://oauth.vk.com/authorize?client_id=" + config.vk.clientCode +
    "&redirect_uri=" + config.vk.redirectURL + "&response_type=code&display=popup&scope=4259840&v=5.80";

const jwtSign = util.promisify(jwt.sign);

const post = async (ctx, next) => {
    let params = ctx.request.body;

    let mailCheck = validator.isEmail(params.email);
    if (!mailCheck) {
        console.log("not a mail");
        ctx.redirect('/registration?alert='+ encodeURIComponent("Не правильная почта!"));
    }

    if (params.password !== params.password2) {
        ctx.redirect('/registration?alert='+ encodeURIComponent("Пароли не совпадают!"));
    }

    let user = await next() || ctx.state.currentUser;
    console.log("==== USER REG ====\n", user, '\n\n');

    if (ctx.response.status === 201) {
        let token = await jwtSign({
            uid: ctx.response.body.id,
            iat: +moment().format('X'),
        }, config.jwt.secret, { expiresIn: '7d' });

        ctx.cookies.set(config.jwt.cookie, token, {
            expires: new Date(+(moment().add(7, 'days').format('x'))),
            overwrite: true
        });

        let verifyToken = await user.get('verifyToken');
        let userMail = await user.get('email');

        let mailOptions = {
            from: 'secothon-org@secon.ru',
            to: userMail,
            subject: 'Ваш код верификации',
            // text: 'Перейдите по ссылке: http://secothon.secon.ru/profile/' + token
            html: emailPage.renderToString({link: "http://secothon.secon.ru/profile/" + verifyToken})
        };

        await sendMail(mailOptions);

        ctx.redirect('/profile');
    }
};


const get = async (ctx, next) => {
    ctx.type = 'html';
    ctx.body = regPage.stream({title: 'Регистрация',
        roles: (await Settings.find({"key": "roles"}))[0]['value'],
        link: link,
        alert: await alertOnPage(ctx)});
};


module.exports = {
    get: get,
    post: post,
};