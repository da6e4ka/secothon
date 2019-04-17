module.exports = async (ctx) => {
    if (!ctx.request.query.alert) return '';

    return {
        text: decodeURIComponent(ctx.request.query.alert),
        type: ctx.request.query.type || "warning"
    };
};

const newAlert = async (ctx) => {
    if (!ctx.static.alertData) return '';

    return {
        text: decodeURIComponent(ctx.static.alertData.text),
        type: ctx.static.alertData.type || "warning"
    };
};