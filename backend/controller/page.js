let md5 = require('md5');
require('marko/node-require');
const aboutPage = require('../view/pages/about.marko');
const mainPage = require('../view/pages/main.marko');
const mentorsPage = require('../view/pages/mentors.marko');
const usersPage = require('../view/pages/users.marko');
const profilePage = require('../view/pages/profile.marko');
const roleSelect = require('../view/pages/role_select.marko');
const nominationPage = require('../view/pages/nomination.marko');
const partnersPage = require('../view/pages/partners.marko');
const projectsPage = require('../view/pages/projects.marko');
const createProjectPage = require('../view/pages/create_new_project.marko');
const updateProjectPage = require('../view/pages/updateProject.marko');
const archivePage = require('../view/pages/archive.marko');
const emailPage = require('../view/layout/email.marko');
const config = require('../config');
const fsMove = require("./fsMove");
const sendMail = require("./emailSend");
const alertOnPage = require('./alertOnPage');

const Settings = require('../api/model/settings');
const Project = require('../api/model/project');
const Mentor = require('../api/model/mentor');
const User = require('../api/model/user');
const Partner = require('../api/model/partner');
const Support = require('../api/model/support');
const Nomination = require('../api/model/nomination');

const link = "https://oauth.vk.com/authorize?client_id=" + config.vk.clientCode +
    "&redirect_uri=" + config.vk.redirectURL + "&response_type=code&display=popup&scope=4259840&v=5.80";


const archive = async (ctx, next) => {
    let proj = await Project.find({});
    let us = await User.find({isVerify: true});
    ctx.type = "html";
    ctx.body = archivePage.stream(
        {title : "Итоги Secothon`2018",
         projects: proj,
        users: us,
            alert: await alertOnPage(ctx)});
};

const settingsData = async (key) => {
    return (await Settings.find({"key": key}))[0]['value']
};
const nomination = async (ctx, next) =>{
    ctx.type='html';
    ctx.body = nominationPage.stream({title: 'Номинации',
        alert: await alertOnPage(ctx),
        nominations: await Nomination.find({})
    });
};




const partners = async (ctx, next) =>{
    const partner = {}
    ctx.type="html";
    ctx.body = partnersPage.stream({title: 'Наши партнеры',
        alert: await alertOnPage(ctx),
        partner: partner
    });

};

const about = async (ctx, next) => {
    ctx.type = 'html';
    ctx.body = aboutPage.stream({title: 'О хакатоне',
        alert: await alertOnPage(ctx)});
};

const main = async (ctx, next) => {
    const settings = await Settings();
    const support = await Support().getSorted();
    const nomination = await Nomination.find({});
    const mentors = await Mentor().getSorted();


    let partnerType = '';
    const partner = [];
    let p = await Partner().getSorted();
    p.forEach(i => {
        if (partnerType !== i.partnerType) {
            partner.push({type: i.partnerType, array: [i]});
            partnerType = i.partnerType
        } else {
            partner[partner.length - 1].array.push(i)
        }
    });

    ctx.type = 'html';
    ctx.body = mainPage.stream({
        title: 'Secothon',
        currentUser: ctx.state.currentUser || null,
        timer: '1213',
        meta: '132',
        alert: await alertOnPage(ctx),
        partner: partner,
        support: support,
        mentors: mentors,
        program: [1],
        nomination: nomination,
    });
};

const create_project_page = async(ctx, next)=>{
    ctx.type = 'html';

    let rolesObject = (await Settings.find({key: "roles"}))[0].value;
    let rolesArray = {};

    Array.from(rolesObject.roles).forEach(elem => rolesArray[elem.key] = elem.users_name);

    ctx.body =  createProjectPage.stream({title: 'Предложить проект', users: users,
        alert: await alertOnPage(ctx), roles: rolesArray})
};

const create_project = async(ctx, next)=>{
    let author = ctx.state.currentUser;
    let params = ctx.request.body;


    let rolesArray = Array.from((await Settings.find({key: "roles"}))[0].value.roles).map(elem => elem.key);
    let need = {};
    rolesArray.forEach(elem => need[elem] = params[elem] * 1);

    let project = await new Project({
        title: params.name_project,
        text: params.about_project,
        problem: params.project_problem,
        solution: params.project_solution,
        uid: author._id,
        need: need
    });

    await project.save();
    author.set("project", project._id);
    await author.save();

    ctx.redirect('/projects?type=success&alert=' + encodeURIComponent("Вы успешно создали проект"))
};

const updateProject = async (ctx, next) =>{

    //let projects = await Project();
    let params = ctx.request.body;
    let user = ctx.state.currentUser;
    let project = await Project.findOne({uid: user._id});

    let rolesArray = Array.from((await Settings.find({key: "roles"}))[0].value.roles).map(elem => elem.key);
    let need = {};
    rolesArray.forEach(elem => need[elem] = params[elem] * 1);

    project.set({
        title: params.name_project,
        text: params.about_project,
        problem: params.project_problem,
        solution: params.project_solution,
        need: need
    });
    await project.save();

    ctx.redirect('/projects?type=success&alert=' + encodeURIComponent("Проект успешно сохранен"))
};

const deleteProject = async (ctx, next) => {

    let user = ctx.state.currentUser;
    let projectUID = user.get('_id');
    let project = await Project.findOne({uid: projectUID});
    let projectID = project.get('_id');

    await User.updateMany(
        {project: projectID},
        {project: ""}
        );
    await Project.deleteOne(
        {uid: projectUID}
    );
    console.log('=====PROJECT DELETED=====');

    ctx.redirect('/projects?type=success&alert=' + encodeURIComponent('Проект удален'))

};

const updateProjectGet = async (ctx, next) => {

    let user = ctx.state.currentUser;
    let project = await Project.findOne({'uid': user._id});
    ctx.type = 'html';
    let rolesObject = (await Settings.find({key: "roles"}))[0].value;
    let rolesArray = {};
    let a = Array.from(rolesObject.roles);
    a.forEach(elem => rolesArray[elem.key] = elem.users_name);
    ctx.body =  updateProjectPage.stream({
        title: 'Изменить проект',
        alert: await alertOnPage(ctx),
        roles: rolesArray,
        project: project,
        user: user
    })
};


const mentors = async (ctx, next) => {
    ctx.type = 'html';
    ctx.body = mentorsPage.stream({title: 'Менторы',
        alert: await alertOnPage(ctx),
    mentors: await Mentor().getSorted()});
};

const profileWithToken = async (ctx, next) => {
    let token = ctx.params.token;
    let user = ctx.state.currentUser;
    let userToken = user.get('verifyToken');

    console.log(token, userToken, token === userToken);

    if (token === userToken) {
        user.set("isVerify", true);
        user.save()
    }

    ctx.redirect('/profile')
};

const projects = async (ctx, next) => {
    let pr = await Project.find({});
    let users = await User.find({});

    let rolesObject = (await Settings.find({key: "roles"}))[0].value;
    let rolesArray = {};
    let needRolesArray = {};

    let a = Array.from(rolesObject.roles);
    a.push(rolesObject.default_role);

    a.forEach(elem => rolesArray[elem.key] = elem.show_name);
    a.forEach(elem => needRolesArray[elem.key] = elem.users_name);

    ctx.type = 'html';
    ctx.body = projectsPage.stream({
        title: 'Проекты',
        projects: pr,
        users: users,
        alert: await alertOnPage(ctx),
        roles: rolesArray,
        needRole: needRolesArray,
        user: ctx.state.currentUser
    });
};


const profile = async (ctx, next) => {
    let data = await settingsData("roles");
    //let project = await projects.findOne({'uid': user_id});
    // console.log(data);

    /*
    let projects = await Project();
    let user = ctx.state.currentUser;
    let Id = user.get('_id');

    let project = await projects.findOne({uid: author.Id});
    if (project == null) {
        console.log('no projects')
    }
    */

    ctx.type = 'html';
    ctx.body = profilePage.stream({
        title: 'Профиль',
        profile: ctx.state.currentUser,
        roles: data,
        link: link,
        alert: await alertOnPage(ctx),
        //project: project,
    });
};

function sortArrayByFunction(func) {
    return function (a, b) {
        if (func(a) > func(b)) return 1;
        if (func(a) < func(b)) return -1;
    }
}

function sortArrayByObjectKey(key) {
    return sortArrayByFunction(function (elem) {
        return elem[key]
    })
}


const users = async (ctx, next) => {
    await next();


    let users = (await User.find({isVerify: true}));
    users = users.map(user => {
        user.emailMd5 = md5(user.email);
        return user;
    });

    let rolesObject = (await Settings.find({key: "roles"}))[0].value;
    let roles = [];
    for (let i in rolesObject.roles) {
        roles.push(rolesObject.roles[i].key)
    }

    roles.push(rolesObject.default_role.key);
    let rolesArray = {};

    let a = Array.from(rolesObject.roles);
    a.push(rolesObject.default_role);

    a.forEach(elem => rolesArray[elem.key] = elem.users_name);
    console.log(rolesArray);

    ctx.type = 'html';
    ctx.body = usersPage.stream({
        title: 'Участники',
        users: users.sort(sortArrayByFunction( elem => roles.indexOf(elem['role'].toString()) )),
        roles: rolesArray
    });
};

const putProfile = async (ctx, next) => {
    let user = ctx.state.currentUser;
    let alert = '';

    let params = ctx.request.body;
    let image = params.image;
    let maxSize = 2 * 1000000; // in bytes; 1000000 bytes === 1 Mb

    if (image && image.size && image.size < maxSize) {
        let fileName = "/users/" + user._id;

        let avatar = await fsMove(image, fileName, console.log);
        if (avatar) {
            user.set("avatar", avatar);
            console.log('Avatar set)');
        } else {
            alert = '?alert=' + encodeURIComponent('Данный формат файла не поддерживается')
        }
    } else {
        alert = '?alert=' + encodeURIComponent("Загруженное Вами изображение оказалось слишком большим")
    }

    console.log("PAGE PUT");
    let isVerify = user.get('isVerify');

    user.set(params);

    user.set(params);
    if (isVerify) {
        console.log("already verifyed");
    } else {
        console.log("verify not passed");
    }
    await user.save();

    ctx.redirect('/profile' + alert);
};

const resendEmail = async (ctx, next) => {
    let user = ctx.state.currentUser;

    let token = await user.get('verifyToken');
    let userMail = await user.get('email');

    let mailOptions = {
        from: 'secothon-org@secon.ru',
        to: userMail,
        subject: 'Your verification code',
        // text: 'Перейдите по ссылке: http://secothon.secon.ru/profile/' + token
        html: emailPage.renderToString({link: "http://secothon.secon.ru/profile/" + token})
    };

    await sendMail(mailOptions);
    ctx.redirect('/profile')
};

module.exports = {
    archive : archive,
    partners: partners,
    nomination: nomination,
    projects: projects,
    create_project_page: create_project_page,
    create_project: create_project,
    updateProject: updateProject,
    updateProjectGet: updateProjectGet,
    deleteProject: deleteProject,
    about: about,
    main: main,
    mentors: mentors,
    users: users,
    profile: profile,
    profileWithToken: profileWithToken,
    putProfile: putProfile,
    resendEmail: resendEmail,
};