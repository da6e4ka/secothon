const Project = require('../api/model/project');
const User = require('../api/model/user');

module.exports = async (ctx, next) => {
    ctx.response.type = "json";
    ctx.response.body = {
        "notifications": [
            {"friend": (await User.find({isVerify: true})).length},
            {"earth": (await Project.find({})).length}
        ],
        "refresh_time" :  3,
    }
};