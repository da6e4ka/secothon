const Project = require('../api/model/project');
const User = require('../api/model/user');

module.exports = async (ctx, next) => {
    ctx.response.body = (await User.find({isVerify: true})).length + ' ' + (await Project.find({})).length
};