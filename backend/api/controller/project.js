const Project = require('../model/project');

const post = async (ctx, next) => {
    let params = ctx.request.body;

    let project = new Project(params);

    try {
        await project.save();
    } catch (error) {
        if (error.code === 11000) {
            ctx.response.body = {
                status: 409,
                error: 'Нельзя создавать более 1 проекта',
            };
            ctx.response.status = 409;
            return;
        }

        throw error;
    }

    ctx.response.body = {
        status: 201,
        id: project.id,
    };
    ctx.response.status = 201
};

const get = async (ctx, next) => {
    ctx.response.body = await Project.find({}).limit(500)
        .populate('uid', '-passwordHash -creAt -upAt -__v').select({creAt:0, upAt: 0, __v: 0}).lean().exec();
};

const getOne = async (ctx, next) => {
    let q = {_id: ctx.params.id};

    let project = await Project.findOne(q).lean().exec();

    if (null === project) {
        ctx.response.body = { status: 404 };
        ctx.response.status = 404;
        return;
    }

    ctx.response.body = project;
};

const put = async (ctx, next) => {
    const projectId = ctx.params.id;

    // todo проверка creUid c токеном из под которого идет запрос, можно себе только менять
    let params = ctx.request.body;
    // @todo слой валидации входных данных и фильтраций

    let project = await Project.findById(projectId);
    if (null === project) {
        ctx.response.body = { status: 404 };
        ctx.response.status = 404;
        return;
    }

    project.set(params);
    await project.save();

    ctx.response.body = {
        status: 200
    };
};


module.exports = {
    post: post,
    get: get,
    getOne: getOne,
    put: put,
};