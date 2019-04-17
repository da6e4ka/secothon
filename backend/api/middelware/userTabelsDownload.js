const json2csv = require('json2csv'),
      json2xls = require('json2xls');

const User = require('../model/user');

const emptyValue = "" /*"NULL"*/;
const fields = [
    {
        label: "Имя",
        value: "name"
    },
    {
        label: "Фамилия",
        value: "lastname"
    },
    {
        label: "E-mail",
        value: "email"
    },
    {
        label: "ВКонтакте",
        value: (row) => row.VKUid ? "https://vk.com/id" + row.VKUid : emptyValue
    },
    {
        label: "Facebook",
        value: (row) => row.Facebook ? "https://facebook.com/" + row.Facebook : emptyValue
    },
    {
        label: "GitHub",
        value: (row) => row.Github ? "https://github.com/" + row.Github : emptyValue
    },
    {
        label: "Другая соц сеть",
        value: (row) => row.otherSocial ? "http://" + row.otherSocial : emptyValue
    },
    {
        label: "Роль",
        value: (row) => row.role
    }
];

const downloadCSV = async (ctx, next) => {
    let paid = !!ctx.request.query.paid;
    let users = paid ? (await User.find({paid: true})) : (await User.find({})) ;

    let csv = json2csv.parse(users, { fields: fields,  delimiter: ';', quote:''});

    ctx.response.attachment('users.csv');
    ctx.type = 'text/plain';
    ctx.response.body = csv;
};

const downloadExcel = async (ctx, next) => {
    let paid = !!ctx.request.query.paid;
    let users = paid ? (await User.find({paid: true})) : (await User.find({})) ;

    let data = [];
    users.forEach(user => {
        let r = {};
        for (let i in fields) {
            let label = fields[i].label,
                value = fields[i].value;
            if (typeof value === "function") {
                r[label] = value(user)
            } else {
                r[label] = user[value]
            }
        }
        data.push(r)
    });

    let xls = json2xls(data);
    ctx.response.type = 'application/vnd.openxmlformats';
    ctx.response.set('Content-Type', 'application/vnd.openxmlformats');
    ctx.response.set("Content-Disposition", "attachment; filename=users.xlsx");
    ctx.response.body = await new Buffer(xls,'binary');
};

module.exports = {
    csv: downloadCSV,
    excel: downloadExcel,
};
