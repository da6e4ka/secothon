// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/admin/users.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_attrs = marko_helpers.as,
    marko_escapeXmlAttr = marko_helpers.xa;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"users\"><div class=\"counter\"><div class=\"not-paid-users\">Оплаченные пользователи (<a href=\"#users\"> " +
    marko_escapeXml(input.users.filter(elem => elem.paid).length) +
    " </a> из <a href=\"#users\"> " +
    marko_escapeXml(input.users.filter(elem => elem.isVerify).length) +
    " </a>)</div></div><div class=\"flex row row-exit\"><a href=\"/admin/users/csv\" class=\"btn btn-blue btn-auto-magin\">Сохранить таблицу CSV (ВСЕ)</a><a href=\"/admin/users/csv?paid=true\" class=\"btn btn-blue btn-auto-magin\">Сохранить таблицу CSV (ОПЛАЧЕННЫЕ)</a><a href=\"/admin/users/excel\" class=\"btn btn-blue btn-auto-magin\">Сохранить таблицу Excel (ВСЕ)</a><a href=\"/admin/users/excel?paid=true\" class=\"btn btn-blue btn-auto-magin\">Сохранить таблицу Excel (ОПЛАЧЕННЫЕ)</a></div><table class=\"tablesorter\"><thead><tr><th style=\"width: 0\">№</th><th>ФИО</th><th>Email</th><th>Тип</th><th>Оплачено</th><th>Верифицированно</th><th class=\"{sorter: false}\">Редактировать</th></tr></thead><tbody>");

  var for__21 = 0;

  for (let index = 0; index < input.users.length; index++) {
    var keyscope__22 = "[" + ((for__21++) + "]");

    let user = input.users[index]

    out.w("<tr><form action=\"/admin/users/save?id=" +
      marko_escapeXmlAttr(user._id) +
      "\" method=\"post\"><td>" +
      marko_escapeXml(index + 1) +
      "</td><td>" +
      marko_escapeXml(user.name) +
      " " +
      marko_escapeXml(user.lastname) +
      "</td><td>" +
      marko_escapeXml(user.email) +
      "</td><td class=\"full-content\">");

    let admin = user.administrator;

    out.w("<select name=\"admin\" class=\"form-control\"><option value=\"true\"" +
      marko_attrs(admin ? "selected" : "") +
      ">Администратор</option><option value=\"false\"" +
      marko_attrs(admin ? "" : "selected") +
      ">Пользователь</option></select></td><td>");

    if (user.paid) {
      out.w("<input type=\"checkbox\" name=\"paid\" checked>");
    } else {
      out.w("<input type=\"checkbox\" name=\"paid\">");
    }

    out.w("</td><td>");

    if (user.isVerify) {
      out.w("<input type=\"checkbox\" name=\"isVerify\" checked>");
    } else {
      out.w("<input type=\"checkbox\" name=\"isVerify\">");
    }

    out.w("</td><td><button class=\"btn-link\" type=\"submite\" href=\"#\">Сохранить изменения </button> &nbsp; <a href=\"/admin/users/delete?id=" +
      marko_escapeXmlAttr(user._id) +
      "\">Удалить</a></td></form></tr>");
  }

  out.w("</tbody></table><div class=\"flex row row-exit\"><a href=\"/admin/users/csv\" class=\"btn btn-blue btn-auto-magin\">Сохранить таблицу CSV (ВСЕ)</a><a href=\"/admin/users/csv?paid=true\" class=\"btn btn-blue btn-auto-magin\">Сохранить таблицу CSV (ОПЛАЧЕННЫЕ)</a><a href=\"/admin/users/excel\" class=\"btn btn-blue btn-auto-magin\">Сохранить таблицу Excel (ВСЕ)</a><a href=\"/admin/users/excel?paid=true\" class=\"btn btn-blue btn-auto-magin\">Сохранить таблицу Excel (ОПЛАЧЕННЫЕ)</a></div></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/backend$1.0.0/view/admin/users.marko"
  };
