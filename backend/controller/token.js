require('marko/node-require');

const util = require('util');
const moment = require('moment');
const User = require('../api/model/user');
const jwt = require('jsonwebtoken');
const config = require('../config');

const jwtSign = util.promisify(jwt.sign);

const logUser = async (ctx, next) => {

    let code = ctx.params.token;
    let user = await User.findOne({recoveryToken: code});
    if (null === user) {
        ctx.throw(400, 'неверный код');
    }

    let token = await jwtSign({
        uid: user.id,
        iat: +moment().format('X'),
    }, config.jwt.secret, { expiresIn: '7d' });

    ctx.cookies.set(config.jwt.cookie, token, {
        expires: new Date(+(moment().add(7, 'days').format('x'))),
        overwrite: true
    });

    ctx.redirect('/profile/password');

};

module.exports = {
    logUser: logUser,
};
