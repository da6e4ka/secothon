require('marko/node-require');
const util = require('util');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const bcrypt = require('bcrypt');
const User = require('../api/model/user');
const config = require('../config');
const alertOnPage = require('./alertOnPage');

const loginPage = require('../view/login/login.marko');

const jwtSign = util.promisify(jwt.sign);

const scopeVk = 4259840;
const link = "https://oauth.vk.com/authorize?client_id=" + config.vk.clientCode +
    "&redirect_uri=" + config.vk.redirectURL + "&response_type=code&display=popup&scope=" + scopeVk + "&v=5.80";


const post = async (ctx, next) => {
    let params = ctx.request.body;
    let user = await User.findOne({email: params.email});

    if (null === user) {
        ctx.redirect('/login?alert=' + encodeURIComponent("Не правильный логин или пароль!"));
        return;
    }

    if (!user.passwordHash && user.VKUid) {
        ctx.redirect("/login?type=danger&alert=" + encodeURIComponent("У Вас ещё нет пароля. Войдите через Вконтакте"));
        return;
    }

    let isSame = await bcrypt.compare(params.password, user.passwordHash);
    if (!isSame) {
        ctx.redirect('/login?alert=' + encodeURIComponent("Не правильный логин или пароль!"));
        return;
    }


    console.log(user);

    let token = await jwtSign({
        uid: user.id,
        iat: +moment().format('X'),
    }, config.jwt.secret, {expiresIn: '7d'});

    ctx.cookies.set(config.jwt.cookie, token, {
        expires: new Date(+(moment().add(7, 'days').format('x'))),
        overwrite: true
    });

    ctx.redirect('/');
};

const get = async (ctx, next) => {
    ctx.type = 'html';
    ctx.body = loginPage.stream({
        title: 'Авторизация', link: link,
        alert: await alertOnPage(ctx)
    });
};

module.exports = {
    post: post,
    get: get,
};