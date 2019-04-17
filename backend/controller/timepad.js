require('marko/node-require');
const Users = require('../api/model/user');
const Settings = require('../api/model/settings');
const sendMail = require("./emailSend");
const paidEmailPage = require('../view/layout/paidEmail.marko');

const getData = async (ctx, next) => {
    let data = ctx.request.body;
    const settings = await Settings();

    let email = data.email;
    let answers = {};
    console.log(data);
    console.log(data["answers"]);
    for (let i = 0; i < data["answers"].length; i++) {
        let a = data["answers"][i];
        answers[a.name] = a.value
    }
    let evenValid =
        data["event_id"] === 922813 &&
        data["event_name"] === "Хакатон SECOTHON" &&
        data["organization_id"] === 42761 &&
        data["org_name"] === "SECON ассоциация разработчиков" &&
        data["event_city"] === "Пенза"
    ;

    console.log("=========== TIMEPAD ===========\nEmail:", email, '\n\n');
    ctx.status = evenValid ? 200 : 400;
    if (evenValid) {
        let paid = await settings.getSettings('paid');
        if (Array.from(paid.value).indexOf(email) === -1 && (data.status_raw === "paid" || data.status_raw === "ok")) paid.set('value', await paid.value.concat(email));
        await paid.save();

        let user = await Users.findOne({'email': email});
        console.log("TIMEPAD USER:", user);
        if (user) {
            user.set('paid', true);
            console.log("User paid:", user.email);
            await user.save()
        }
        if (answers && (data.status_raw === "paid" || data.status_raw === "ok")) await sendMail({
            from: 'secothon-org@secon.ru',
            to: email,
            subject: 'Спасибо за оплату своего участия на SECOTHON\'2018',
            html: paidEmailPage.renderToString({
                name: answers["Имя"] + ' ' + answers["Фамилия"],
                email: email
            })
        });
    }

    await sendMail({
        from: 'secothon-org@secon.ru',
        to: "jag-k58@ya.ru",
        subject: 'Пользователь ' + email + ' оплатил (или нет) своё участие на SECOTHON\'2018',
        text: JSON.stringify(ctx.request.body, null, 4)
    });
};

module.exports = getData;