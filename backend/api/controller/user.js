const User = require('../model/user');
const Settings = require('../model/settings');
const Project = require('../model/project');
const crypto = require('crypto');
const fs = require('fs');
const config = require('../../config');
// const request = require('sync-request');
const request = require('request-promise');
// const fs = require("fs");

const util = require('util');
const moment = require('moment');
const jwt = require('jsonwebtoken');
const jwtSign = util.promisify(jwt.sign);

const cloneObject = (obj) => {
    let key, clone = {};
    for(key in obj) if(obj.hasOwnProperty(key)) clone[key] = obj[key];
    return clone;
};


const post = async (ctx, next) => {
    let params = ctx.request.body;
    const settings = await Settings();


    console.log("user.js post");

    let user = new User(params);
    if (Array.from(await settings.getVal('paid')).indexOf(user.email) !== -1) {
        console.log('USER PAID');
        await user.set("paid", true);
        await user.set("isVerify", true);
    }
    if (params.password) {
        await user.setPassword(params.password);
    }

    try {
        let mailToken = crypto.randomBytes(16).toString('hex'); //генерация токена для подтверждения почты
        console.log("verifyToken (post):", mailToken);
        await user.set('verifyToken', mailToken);

        let recoveryToken = crypto.randomBytes(16).toString('hex'); //генерация токена для дальнейшего восстановления
        await  user.set('recoveryToken', recoveryToken);


        await user.save();
    } catch (error) {
        if (error.code === 11000) {
            ctx.response.body = {
                status: 409,
                error: 'Email уже занят',
            };
            ctx.response.status = 409;
            return;
        }

        throw error;
    }

    ctx.response.body = {
        status: 201,
        id: user.id,
    };
    ctx.response.status = 201;
    return user
};

const sendUserCookie = async (ctx, user) => {
    let token = await jwtSign({
        uid: user._id,
        iat: +moment().format('X'),
    }, config.jwt.secret, { expiresIn: '7d' });

    ctx.cookies.set(config.jwt.cookie, token, {
        expires: new Date(+(moment().add(7, 'days').format('x'))),
        overwrite: true
    });

    await user.save();

    ctx.redirect('/profile')

};

const setVKAvatar = async (ctx, next) => {
    let user = ctx.state.currentUser;
    if (user.VK) {
        await fs.unlink('./public' + user.avatar, () => {console.log("====== OLD AVATAR DELETED ======")});
        user.set("avatar", user.VK.avatar);
        await user.save();
        ctx.redirect('/profile?type=success&alert=' + encodeURIComponent('Ваш аватар установлен'));
        return
    }
    ctx.redirect('/profile?type=warning&alert=' + encodeURIComponent('Вы ещё не привязали свой аккаунт ВКонтакте'))
};

const vk = async (ctx, next) => {
    let code = ctx.request.query.code;
    console.log('=== VK Auth ===');
    console.log(code);
    if(code) {
        let params = {
            "client_id": config.vk.clientCode,
            "client_secret": config.vk.clientSecret,
            "redirect_uri": config.vk.redirectURL,
            "code": code
        };
        let paramsString = '?';
        for(i in params) {
            paramsString += (i + '=' + params[i] + '&')
        }
        let user = ctx.state.currentUser;
        let response = await request({uri: "https://oauth.vk.com/access_token" + paramsString, json: true});


        let data = response;
        params = {
            "access_token": data.access_token,
            "fields": [
                "domain",
                // "photo_50",
                "photo_100",
                // "photo_200_orig",
                // "photo_200",
                // "photo_400_orig",
                // "photo_max",
                // "photo_max_orig"
            ].join(','),
            "user_ids": data.user_id,
            "v": "5.80",
        };

        paramsString = '?';
        for(i in params) {
            paramsString += (i + '=' + params[i] + '&')
        }

        let user_response = await request({uri: "https://api.vk.com/method/users.get" + paramsString, json: true});

        let user_data = user_response.response[0];
        if (!user) {
            let findUser = (await User.findOne({VKUid: data.user_id})) || (await User.findOne({email: data.email}));
            if (findUser) {
                console.log("Find USeR True");
                user = findUser;

                await sendUserCookie(ctx, user);
                } else {
                console.log("USER DATA:", user_data);

                let mailToken = crypto.randomBytes(16).toString('hex'); //генерация токена для подтверждения почты

                let recoveryToken = crypto.randomBytes(16).toString('hex'); //генерация токена для дальнейшего восстановления

                    user = await new User({
                        name: user_data.first_name,
                        lastname: user_data.last_name,
                        email: data.email,
                        isVerify: true,
                        VKUid: data.user_id,
                        avatar: user_data.photo_100,
                        VK: {
                            token: data.access_token,
                            uid: data.user_id,
                            email: data.email,
                            avatar: user_data.photo_100,
                        },
                        verifyToken: mailToken,
                        recoveryToken: recoveryToken,

                    });
                    await sendUserCookie(ctx, user);
                }

            } else {
                await user.set('VK', {
                    token: data.access_token,
                    uid: data.user_id,
                    email: data.email,
                    avatar: user_data.photo_100,
                });
                await user.set("VKUid", data.user_id);
                await sendUserCookie(ctx, user);
            }
    } else {
        ctx.redirect('/')
    }
};

const get = async (ctx, next) => {
    let q = {};
    let projection = {passwordHash: 0, __v: 0, creAt: 0, upAt: 0};

    ctx.response.body = await User.find(q, projection).limit(100).lean().exec();
};

const getOne = async (ctx, next) => {
    let q = {_id: ctx.params.id};
    let projection = {passwordHash: 0, __v: 0, creAt: 0, upAt: 0};

    let user = await User.findOne(q, projection).lean().exec();

    console.log("user.js getOne");

    if (null === user) {
        ctx.response.body = { status: 404 };
        ctx.response.status = 404;
        return;
    }

    return ctx.response.body = user;
};

const put = async (ctx, next) => {
    const userId = ctx.params.id;

    // todo проверка userId c токеном из под которого идет запрос, можно себе только менять
    let params = ctx.request.body;
    // @todo слой валидации входных данных и фильтраций

    console.log("user.js put");
    let user = await User.findById(userId);
    if (null === user) {
        ctx.response.body = { status: 404 };
        ctx.response.status = 404;
        return;
    }


    user.set(params);
    let userToken = params.code;
    delete params.code;
    console.log(params);

    if (params.password) {
        await user.setPassword(params.password);
    }

    let token = user.get('verifyToken');
    console.log("verifyToken (in PUT):", token);
    if (token === userToken) {
        console.log("verify passed");
        user.set('isVerify', true);
    } else {
        console.log("verify not passed");
    }


    await user.save();

    ctx.response.body = {
        status: 200
    };
};

const exit = async (ctx, next) => {
    ctx.cookies.set(config.jwt.cookie, '', {
        expires: new Date(1),
        overwrite: true
    });
    console.log('user.js exit');
    ctx.redirect('/')
};

const deleteUser = async (ctx, next) => {

    console.log('user.js deleteUser');
    //let Id = ctx.params.id;
    let user = ctx.state.currentUser;
    let Id = user.get('_id');

    //await exit({redirect: () => {}})
    if (Id == null) {
        throw error(400)
    } else {

        ctx.cookies.set(config.jwt.cookie, '', {
            expires: new Date(1),
            overwrite: true
        });

        await User.deleteOne({_id: Id});

        ctx.redirect("/?type=success&alert=" + encodeURIComponent("Ваш аккаунт удален."))
    }
};


const joinProject = async (ctx, next) => {
    let user = ctx.state.currentUser;
    let projectId = ctx.request.query.project;
    let project = await Project.findOne({_id: projectId});

    if (project) {
        if (user.role in project.need && project.need[user.role]) {
            user.set('project', projectId);
            let need = cloneObject(await project.get("need"));
            console.log("Project Need:", need);
            need[user.role] = need[user.role] - 1;
            console.log("Project Need:", need);
            await project.set({
                need: need,
                users: project.users.concat([user._id])
            });
            await project.save();
            await user.save()
        } else {
            ctx.redirect("/projects?alert=" + encodeURIComponent("К сожалению, Ваша роль для данного проекта не подходит. Посмотрите другие проекты или создайте свой!"));
            return
        }
    } else {
        ctx.redirect("/projects?alert=" + encodeURIComponent("Данного проекта не существует"));
        return
    }
ctx.redirect("/projects?type=success&alert=" + encodeURIComponent("Вы успешно добавлены в проект! Желаем успехов)"))
};

const leaveProject = async (ctx, next) => {
    let user = ctx.state.currentUser;
    let projectId = user.project;
    let project = await Project.findOne({_id: projectId});
    console.log("Project (leave):", project);

    if (project) {
        if (project.users.map(elem => elem.toString()).indexOf(user._id.toString()) !== -1) {
            user.set('project', '');
            let need = cloneObject(project.need);
            need[user.role] += 1;
            let users = project.users;
            users.splice(users.indexOf(user._id), 1);

            project.set("need", need);
            project.set("users", users);

            await project.save();
            await user.save()
        } else {
            ctx.redirect("/projects?alert=" + encodeURIComponent("Вы не состоите в проекте"));
            return
        }
    } else {
        ctx.redirect("/projects?alert=" + encodeURIComponent("Данного проекта не существует"));
        return
    }
    ctx.redirect("/projects?type=success&alert=" + encodeURIComponent("Вы удалены из проекта"))
};


module.exports = {
    post: post,
    get: get,
    getOne: getOne,
    put: put,
    exit: exit,
    vk: vk,
    setVKAvatar: setVKAvatar,
    joinProject: joinProject,
    leaveProject: leaveProject,
    deleteUser: deleteUser
};