// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/admin/control-panel.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<h2 class=\"admin-block-header\">Вы вошли как <a href=\"#control-panel\">" +
    marko_escapeXml(input.admin.name) +
    " " +
    marko_escapeXml(input.admin.lastname) +
    " (" +
    marko_escapeXml(input.admin.email) +
    ")</a></h2><div class=\"panel\"><div class=\"side users-block\"><h3 class=\"block-header\">Участники:</h3><div class=\"block-content\"><p class=\"payed\">Всего: <a href=\"#users\">" +
    marko_escapeXml(input.users.length) +
    "</a></p><p class=\"payed\">Оплаченных: <a href=\"#users\">" +
    marko_escapeXml(input.users.filter(elem => elem.paid).length) +
    "</a></p><p class=\"not-payed\">Неоплаченных: <a href=\"#users\">" +
    marko_escapeXml(input.users.filter(elem => !elem.paid).length) +
    "</a></p><p class=\"admin-page\">Администраторы: <a href=\"#users\">" +
    marko_escapeXml(input.users.filter(elem => elem.administrator).length) +
    "</a></p><p class=\"confirm-account-users\">Пользователи, подтвердившие аккаунт: <a href=\"#users\">" +
    marko_escapeXml(input.users.filter(elem => elem.isVerify).length) +
    "</a></p><p class=\"vk-users\">Пользователи, авторизовавшиеся через Вконтакте: <a href=\"#users\">" +
    marko_escapeXml(input.users.filter(elem => elem.VKUid).length) +
    "</a></p></div></div><div class=\"side project-block\"><h3 class=\"block-header\">Проекты:</h3><div class=\"block-content\"><p class=\"full-team\">Всего: <a href=\"#project\">" +
    marko_escapeXml(input.projects.length) +
    "</a></p><p class=\"full-team\">С полной командой: <a href=\"#project\">" +
    marko_escapeXml(input.projects.filter(elem => !Object.values(elem.need).reduce((x, y) => x * 1 + y * 1) && elem.users.length).length) +
    "</a></p><p class=\"not-full-team\">Команда собрана не полностью: <a href=\"#project\">" +
    marko_escapeXml(input.projects.filter(elem => Object.values(elem.need).reduce((x, y) => x * 1 + y * 1) && elem.users.length).length) +
    "</a></p><p class=\"no-team\">Без команды: <a href=\"#project\">" +
    marko_escapeXml(input.projects.filter(elem => !Object.values(elem.need).reduce((x, y) => x * 1 + y * 1) && !elem.users.length).length) +
    "</a></p></div></div></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/backend$1.0.0/view/admin/control-panel.marko"
  };
