// PAGES
const adminPage = require('../view/pages/admin.marko');

const newMentorPage        = require('../view/admin/new/mentor.marko'),
      newNominationPage    = require('../view/admin/new/nomination.marko'),
      newPartnerPage       = require('../view/admin/new/partner.marko'),
      newSupportPage       = require('../view/admin/new/support.marko');

const editMentorPage       = require('../view/admin/edit/mentor.marko'),
      editNominationPage   = require('../view/admin/edit/nomination.marko'),
      editPartnerPage      = require('../view/admin/edit/partner.marko'),
      editSupportPage      = require('../view/admin/edit/support.marko'),
      editProjectPage      = require('../view/admin/edit/project.marko');

// MODELS
const Settings     = require("../api/model/settings"),
      User         = require("../api/model/user"),
      Nomination   = require('../api/model/nomination'),
      Partner      = require("../api/model/partner"),
      Project      = require("../api/model/project"),
      Mentor       = require("../api/model/mentor"),
      Support      = require("../api/model/support");

// CONTROLLERS
const alertOnPage = require('./alertOnPage'),
      fsMove = require('./fsMove');


// MAIN CODE

// FUNCTION
const order = (Scheme) => {
    return async (ctx, next) => {
        const order = Object.keys(ctx.request.body)[0].split(',');
        let schemeArray = await Scheme.find({});

        for (let i = 0; i < schemeArray.length; i++) {
            let scheme = schemeArray[i];
            scheme.set('index', order.indexOf(scheme._id.toString()));
            await scheme.save();
        }
        ctx.status = 200;
        ctx.body = {status: 200, message: "ok"}
    };
};


// PAGE LOGIC
const get = async (ctx, next) => {
    const settings = await Settings();
    let timer = await settings.getVal("timer");


    let rolesObject = (await Settings.find({key: "roles"}))[0].value;
    let rolesArray = {};

    let a = Array.from(rolesObject.roles);
    a.push(rolesObject.default_role);

    a.forEach(elem => rolesArray[elem.key] = elem.users_name);

    ctx.type = 'html';
    ctx.body = await adminPage.stream({
        admin: ctx.state.currentUser,
        timer: timer,
        users: await User.find({}),
        projects: await Project.find({}),
        alert: await alertOnPage(ctx),
        partners: await Partner().getSorted(),
        partnersType: await settings.getVal("partnersType"),
        mentors: await Mentor().getSorted(),
        support: await Support().getSorted(),
        roles: rolesArray,
        meta: await settings.getVal('meta'),
        nominations: await Nomination.find({})
    });
};

const timer = async (ctx, next) => {
    const settings = await Settings();

    let params = ctx.request.body;
    console.log("Timer:", params);
    let [ startYear, startMonth, startDay ] = params.startDate.split('-');
    let [ startHour, startMinutes ] = params.startTime.split(':');

    let [ endYear, endMonth, endDay ] = params.endDate.split('-');
    let [ endHour, endMinutes ] = params.endTime.split(':');

    let value = {
        startYear: startYear,
        startMonth: startMonth,
        startDay: startDay,

        startHour: startHour,
        startMinutes: startMinutes,


        endYear: endYear,
        endMonth: endMonth,
        endDay: endDay,

        endHour: endHour,
        endMinutes: endMinutes,

        notStartMessage: params.notStartMessage,
        startMessage: params.startMessage,
        endMessage: params.endMessage,
    };
    await settings.setVal("timer", value);

    ctx.redirect("/admin#timer")
};

const meta = async (ctx, next) => {
    const settings = await Settings();

    let params = ctx.request.body;
    console.log("Meta:", params);
    let meta = await settings.getSettings("meta");
    meta.set('value', params);
    await meta.save();

    ctx.redirect("/admin#meta")
};


// USER
const saveUser = async (ctx, next) => {
    let params = ctx.request.body;
    const userId = ctx.request.query.id;
    const user = await User.findById(userId);

    user.set("administrator", eval(params.admin));
    user.set("paid", params.paid === "on");
    user.set("isVerify", params.isVerify === "on");
    user.save();

    ctx.redirect('/admin#users')
};

const deleteUser = async (ctx, next) => {
    const userId = ctx.request.query.id;
    const projects = await Project();
    const user = await User.deleteOne({_id: userId});
    let project = await projects.getProjectByUserId(userId);

    if (project) {
        if (userId in project.users) {
            let users = project.users.concat([]);
            users.slice(users.indexOf(userId), 1);
            project.set('users', users);
        } else {
            await Project.deleteOne({_id: project._id})
        }
    }

    console.log("===== DELETE USER =====\n", user);

    ctx.redirect('/admin#users')
};


// NOMINATION
const newNominationPost = async(ctx, next) =>{
    let params = ctx.request.body;
    let image = params.picture;

    params.description = params.description.trim().split('\n').map(elem => elem.trim()).filter(elem => !!elem).join('\n');

    const nomination = await new Nomination(params);

    if (image) {
        let fileName = "/nomination/" + nomination._id;

        let avatar = await fsMove(image, fileName, console.log);
        if (avatar) nomination.set("picture", avatar);
        await nomination.save();

        console.log('Picture set)');
        ctx.redirect('/admin#nominations')
    }
};

const newNominationGet = async(ctx, next) =>{
    ctx.type='html';
    ctx.body = newNominationPage.stream({})
};

const saveNomination = async (ctx, next) =>{
    let params = ctx.request.body;
    const nominationId = ctx.request.query.id;
    const nomination = await Partner.findById(partnerId);

    nomination.set(params);
    await nomination.save();

    ctx.redirect('/admin?type=success&alert=' + encodeURIComponent('Изменения успешно сохранены') + "#nomination")
};

const deleteNomination = async (ctx, next) => {
    const nominationId = ctx.request.query.id;
    const nomination = await Nomination.deleteOne({_id: nominationId});

    console.log("===== DELETE NOMINATION =====\n", nomination);

    ctx.redirect('/admin?type=success&alert=' + encodeURIComponent('Вы успешно удалили номинацию!') +'#nomination')
};


// PARTNER
const newPartnerGet = async(ctx, next) =>{
    ctx.type='html';
    ctx.body = newPartnerPage.stream({
        partnersType: await Settings().getVal("partnersType")
    })
};

const newPartnerPost = async(ctx, next) =>{
    let params = ctx.request.body;
    let image = params.picture;

    const partner = await new Partner(params);

    if (image) {
        let fileName = "/partners/" + partner._id;

        let avatar = await fsMove(image, fileName, console.log);
        if (avatar) partner.set("picture", avatar);
        await partner.save();

        console.log('Picture set)');
        ctx.redirect('/admin#partners')
    }
};

const savePartner = async (ctx, next) =>{
    let params = ctx.request.body;
    const partnerId = ctx.request.query.id;
    const partner = await Partner.findById(partnerId);

    partner.set(params);
    await partner.save();

    ctx.redirect('/admin?type=success&alert=' + encodeURIComponent('Изменения успешно сохранены') + "#partners")
};

const deletePartner = async (ctx, next) => {
    const partnerId = ctx.request.query.id;
    const partner = await Partner.deleteOne({_id: partnerId});

    console.log("===== DELETE PARTNER =====\n", partner);

    ctx.redirect('/admin?type=success&alert=' + encodeURIComponent('Вы успешно удалили партнёра!') +'#partners')
};

const partnersType = async (ctx, next) => {
    let params = ctx.request.body.types.trim().split(',').map(elem => elem.trim()).filter(elem => !!elem);
    await Settings().setVal('partnersType', params);
    ctx.redirect("/admin?type=success&alert=" + encodeURIComponent("Вы успешно изменили типы!") + "#partners")
};


// INFORM SUPPORT
const newSupportGet = async (ctx, next) =>{
    ctx.type = "html";
    ctx.body = newSupportPage.stream({});
};

const newSupportPost = async(ctx, next) =>{
    let params = ctx.request.body;
    let image = params.picture;
    let index = await Support.find({}).length;
    const support = await new Support(params);

    if (image) {
        let fileName = "/support/" + support._id;

        let avatar = await fsMove(image, fileName, console.log);
        if(avatar) support.set("picture", avatar);
        support.set("index", index);
        await support.save();

        console.log('Picture set)');
        ctx.redirect('/admin#support')
    }
};

const saveSupport = async (ctx, next) =>{
    let params = ctx.request.body;
    const supportId = ctx.request.query.id;
    const support = await Support.findById(supportId);

    support.set(params);
    await support.save();

    ctx.redirect('/admin?type=success&alert=' + encodeURIComponent('Изменения успешно сохранены') + "#support")
};

const deleteSupport = async(ctx, next) =>{
    const supportId = ctx.request.query.id;
    const support = await Support.deleteOne({_id: supportId});

    console.log("===== DELETE PARTNER =====\n", support);

    ctx.redirect('/admin#support')
};


// MENTOR
const newMentorGet = async (ctx, next) =>{
    ctx.type='html';
    ctx.body = newMentorPage.stream({})
};

const newMentorPost = async (ctx, next)=>{
    let params = ctx.request.body;
    let image = params.picture;
    let index = await Mentor.find({}).length;
    const mentor = await new Mentor(params);

    if (image) {
        let fileName = "/mentors/" + mentor._id;

        let avatar = await fsMove(image, fileName, console.log);
        if (avatar) mentor.set("picture", avatar);
        mentor.set("index", index)
        await mentor.save();

        console.log('Picture set)');
        ctx.redirect('/admin#mentors')
    }
};

const deleteMentor = async (ctx, next) => {
    const mentorId = ctx.request.query.id;
    const mentor = await Mentor.deleteOne({_id: mentorId});

    console.log("===== DELETE PARTNER =====\n", mentor);

    ctx.redirect('/admin#mentors')
};


// PROJECT
const deleteProject = async (ctx, next) => {
    const projectId = ctx.request.query.id;
    let project = await Project.findOne({_id: projectId});
    if (projectId && project) {
        await project.deleteProject();
        ctx.redirect("/admin?type=success&alert=" + encodeURIComponent("Вы успешно удалили проект!") + "#project");
        return
    }
    ctx.redirect("/admin?alert=" + encodeURIComponent("Такого проекта мы не нашли...") + "#project")
};



// EDIT

const editMentorPost = async (ctx, next) => {
    let params = ctx.request.body;
    const id = ctx.request.query.id;
    const data = await Mentor.findById(id);

    let image = params.picture;
    delete params.picture;

    data.set(params);

    if (image && image.size) {
        let fileName = "/mentors/" + id;

        let avatar = await fsMove(image, fileName, console.log);
        if (avatar) {
            data.set("picture", avatar);
            console.log('picture set)');
        }
    }

    await data.save();
    console.log("====== MENTOR EDITED " + id + " ======");
    ctx.redirect('/admin?type=success&alert=' + encodeURIComponent("Вы успешно изменили ментора") + '#mentors')
};

const editNominationPost = async (ctx, next) => {
    let params = ctx.request.body;
    const id = ctx.request.query.id;
    const data = await Nomination.findById(id);

    let image = params.picture;
    delete params.picture;

    params.description = params.description.trim().split('\n').map(elem => elem.trim()).filter(elem => !!elem).join('\n');

    data.set(params);

    if (image && image.size) {
        let fileName = "/nomination/" + id;

        let avatar = await fsMove(image, fileName, console.log);
        if (avatar) {
            data.set("picture", avatar);
            console.log('picture set)');
        }
    }

    await data.save();
    console.log("====== NOMINATION EDITED " + id + " ======");
    ctx.redirect('/admin?type=success&alert=' + encodeURIComponent("Вы успешно изменили номинацию") + '#nomination')
};

const editPartnerPost = async (ctx, next) => {
    let params = ctx.request.body;
    const id = ctx.request.query.id;
    const data = await Partner.findById(id);

    let image = params.picture;
    delete params.picture;

    data.set(params);

    if (image && image.size) {
        let fileName = "/partners/" + id;

        let avatar = await fsMove(image, fileName, console.log);
        if (avatar) {
            data.set("picture", avatar);
            console.log('picture set)');
        }
    }

    await data.save();
    console.log("====== PARTNER EDITED " + id + " ======");
    ctx.redirect('/admin?type=success&alert=' + encodeURIComponent("Вы успешно изменили партнёра") + '#partners')
};

const editSupportPost = async (ctx, next) => {
    let params = ctx.request.body;
    const id = ctx.request.query.id;
    const data = await Support.findById(id);

    let image = params.picture;
    delete params.picture;

    data.set(params);

    if (image && image.size) {
        let fileName = "/support/" + id;

        let avatar = await fsMove(image, fileName, console.log);
        if (avatar) {
            data.set("picture", avatar);
            console.log('picture set)');
        }
    }

    await data.save();
    console.log("====== SUPPORT EDITED " + id + " ======");
    ctx.redirect('/admin?type=success&alert=' + encodeURIComponent("Вы успешно изменили информационного партнёра") + '#support')
};

const editProjectPost = async (ctx, next) => {

    let params = ctx.request.body;
    const id = ctx.request.query.id;
    const data = await Project.findById(id);

    data.set(params);

    await data.save();
    console.log("====== PROJECT EDITED " + id + " ======");
    ctx.redirect('/admin?type=success&alert=' + encodeURIComponent("Вы успешно изменили проект") + '#project')


};


// EDIT PAGES

const editMentorGet = async (ctx, next) => {
    ctx.type = 'html';
    const id = ctx.request.query.id;
    if (!id) {
        ctx.redirect('/admin?alert=' + encodeURIComponent('Такой ментор не найдена') + '#mentors');
        return
    }
    const data = await Mentor.findById(id);
    ctx.body = editMentorPage.stream({
        data: data
    })
};

const editNominationGet = async (ctx, next) => {
    ctx.type = 'html';
    const id = ctx.request.query.id;
    if (!id) {
        ctx.redirect('/admin?alert=' + encodeURIComponent('Такая номинация не найдена') + '#nomination');
        return
    }
    const data = await Nomination.findById(id);
    ctx.body = editNominationPage.stream({
        data: data
    })
};

const editPartnerGet = async (ctx, next) => {
    ctx.type = 'html';
    const id = ctx.request.query.id;
    if (!id) {
        ctx.redirect('/admin?alert=' + encodeURIComponent('Такой партнёр не найден') + '#partners');
        return
    }
    const data = await Partner.findById(id);
    ctx.body = editPartnerPage.stream({
        data: data,
        partnersType: await Settings().getVal("partnersType"),
    })
};

const editSupportGet = async (ctx, next) => {
    ctx.type = 'html';
    const id = ctx.request.query.id;
    if (!id) {
        ctx.redirect('/admin?alert=' + encodeURIComponent('Такой информационный партнёр не найден') + '#support');
        return
    }
    const data = await Support.findById(id);
    console.log(data);
    ctx.body = editSupportPage.stream({
        data: data
    })
};

const editProjectGet = async (ctx, next) => {

    ctx.type = 'html';
    const id = ctx.request.query.id;
    if (!id) {
        ctx.redirect('/admin?alert=' + encodeURIComponent('Хм... Похоже, такого проекта не существует :/') + '#project');
        return
    }
    const data = await Project.findById(id);
    console.log(data);
    ctx.body = editProjectPage.stream({
        data: data
    })

};


module.exports = {
    timer: timer,
    meta: meta,
    get: get,
    user: {
        save: saveUser,
        delete: deleteUser,
    },
    partner:{
        save: savePartner,
        delete: deletePartner,
        order: order(Partner),
        types: partnersType
    },
    support: {
        save: saveSupport,
        post: newSupportPost,
        get: newSupportGet,
        delete: deleteSupport,
        order: order(Support),
    },
    nomination: {
        save: saveNomination,
        delete: deleteNomination,
        order: order(Nomination)
    },
    project: {
        delete: deleteProject,
    },

    new: {
        partner: {
            post: newPartnerPost,
            get: newPartnerGet
        },
        mentor:{
            post: newMentorPost,
            get: newMentorGet
        },
        nomination:{
            post: newNominationPost,
            get: newNominationGet
        }
    },

    edit: {
        mentor: {
            get: editMentorGet,
            post: editMentorPost
        },
        nomination: {
            get: editNominationGet,
            post: editNominationPost
        },
        partner: {
            get: editPartnerGet,
            post: editPartnerPost
        },
        support: {
            get: editSupportGet,
            post: editSupportPost
        },
        project: {
            get: editProjectGet,
            post: editProjectPost,
        }
    },
    mentor: {
        delete: deleteMentor,
        order: order(Mentor)
    }
};