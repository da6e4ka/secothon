const Mentor = require('../model/mentor');

const get = async(ctx, next) =>{
    ctx.response.body = await Mentor().getSorted();
    console.log('get');
};

const post = async(ctx, next) =>{
    let params = ctx.request.body;
    console.log(params);
    let mentor = await new Mentor(params);
    await mentor.save();
    ctx.response.status = 201
};

module.exports = {
    get: get,
    post: post
};