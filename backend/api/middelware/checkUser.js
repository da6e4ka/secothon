const currentUser = async (ctx, next) => {
    if (!ctx.state.currentUser) {
        ctx.redirect('/login?alert=' + encodeURIComponent('Вы не авторизовались для выполнения данного действия. Сделайте это прямо сейчас!'));
        return
    }

    return next();
};

const userWithoutProject = async (ctx, next) => {
    if (!ctx.state.currentUser && ctx.state.currentUser.project /*&& ctx.state.currentUser.paid*/) {
        ctx.redirect('/?alert=' + encodeURIComponent('У Вас уже есть проект. Вы не можете выполнить данное пока Вы состоите в проекте'));
        return
    }

    return next();
};
const userWithProject = async (ctx, next) => {
    if (!ctx.state.currentUser && !ctx.state.currentUser.project /*&& ctx.state.currentUser.paid*/) {
        ctx.redirect('/?alert=' + encodeURIComponent('Вы не можете выполнить данное пока Вы не состоите в проекте'));
        return
    }

    return next();
};

const adminUser = async (ctx, next) => {
    if (!ctx.state.currentUser || !ctx.state.currentUser.administrator) {
        if (!ctx.state.currentUser) ctx.redirect('/login?alert=' + encodeURIComponent('Вы ещё не вошли'));
        else ctx.redirect('/?alert=' + encodeURIComponent('У Вас недостаточно прав'));
        return
    }

    return next();
};
module.exports = {
    currentUser: currentUser,
    userWithoutProject: userWithoutProject,
    userWithProject: userWithProject,
    adminUser: adminUser
};