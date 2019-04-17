const Koa = require('koa');
const mongoose = require('mongoose');
const parser = require('koa-parser');
const router = require('./router');
const errorPage = require('./view/pages/error.marko');
const sendStatic = require('koa-static');
const errorHandler = require('koa-better-error-handler');
// const logger = require('koa-logger');

(async () => {
    const app = new Koa;

    mongoose.connect('mongodb://admin:Yeqcrjd1@ds119374.mlab.com:19374/secothon');

    const port = 80;

    // override koa undocumented error handler
    app.context.onerror = errorHandler;
    const criticalError = async (func) => {
        return async (ctx, next) => {
            try {
                return func(ctx, next)
            } catch (err) {
                console.error("=============== FATAL ERROR ===============\n\n", err, "\n\n\n\n===========================================");
                ctx.type="html";
                ctx.status = 502;
            }
        }
    };

    const alertOnPage = async (ctx, next) => {
        ctx.static.alert = async (text, type) => {
            ctx.static.alertData = {
                text: text,
                type: type || "warning"
            }
        };
        ctx.static.alertData = {};

        next()
    };


    app
        // .use(logger())
        // .use(alertOnPage)
        .use(sendStatic('./public'))
        .use(parser({ strict: false, multipart: true }))
        .use(await criticalError(router.routes()))
        .use(await criticalError(router.allowedMethods()))
        .use(async ctx => {
            ctx.type="html";
            ctx.body = errorPage.stream();
            ctx.status = 404;
        })
        .listen(port, () => {
            console.log("Server started on port: " + port + " <3")
        });
})();
