
require('marko/node-require');

const alertOnPage = require('./alertOnPage');

const updaterecovery = require('../view/login/setPassword.marko');


const post = async (ctx, next) => {
    console.log('updaterecovery post');
    let params = ctx.request.body;
    let user = ctx.state.currentUser;

    if (params.password === params.password2) {
        let newPass = params.password;
        await user.setPassword(newPass);
        await user.save();
        ctx.redirect('/profile?type=success&alert' + encodeURIComponent("Вы успешно изменили пароль!"));
    } else {
        ctx.redirect('/profile/password?alert='+ encodeURIComponent("Пароли не совпадают!"));
    }
};

const get = async (ctx, next) => {
    ctx.type = 'html';
    ctx.body = updaterecovery.stream({title: 'Восстановление аккаунта',
        alert: await alertOnPage(ctx)});
};

module.exports = {
    post: post,
    get: get,
};




/*

сonst recovery = async (ctx, next) =>{

    ctx.type="html";
    ctx.body = recoveryPage.stream({title: 'Восстановление аккаунта'});
    let recoveryMail = params.email;
    console.log(recoveryMail);

};
*/