const config = require('../../config');
const jwt = require('jsonwebtoken');
const User = require('../model/user');
const util = require('util');
const jwtVerify = util.promisify(jwt.verify);

module.exports = async function (ctx, next) {
    let token = ctx.cookies.get(config.jwt.cookie);
    let decoded;

    try {
        decoded = await jwtVerify(token, config.jwt.secret);
    } catch (error) {
        return next();
    }

    let user = await User.findById(decoded.uid);
    if (user) {
        ctx.state.currentUser = user;
    }

    return next();
};