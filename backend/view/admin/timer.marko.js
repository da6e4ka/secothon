// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/admin/timer.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXmlAttr = marko_helpers.xa;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<form class=\"container\" method=\"post\" action=\"/admin/timer\" enctype=\"multipart/form-data\"><div class=\"form-group\">");

  let timer = input.timer

  out.w("<label for=\"startDate\"> <span> * </span> Время начала хакатона</label><div class=\"input-group\" id=\"startDate\"><input name=\"startDate\" type=\"date\" class=\"form-control\" value=\"" +
    marko_escapeXmlAttr((((timer.startYear + "-") + timer.startMonth) + "-") + timer.startDay) +
    "\" required><input name=\"startTime\" type=\"time\" class=\"form-control\" value=\"" +
    marko_escapeXmlAttr((timer.startHour + ":") + timer.startMinutes) +
    "\" required></div><label for=\"endDate\"> <span> * </span> Время конца хакатона</label><div class=\"input-group\" id=\"endDate\"><input name=\"endDate\" type=\"date\" class=\"form-control\" value=\"" +
    marko_escapeXmlAttr((((timer.endYear + "-") + timer.endMonth) + "-") + timer.endDay) +
    "\" required><input name=\"endTime\" type=\"time\" class=\"form-control\" value=\"" +
    marko_escapeXmlAttr((timer.endHour + ":") + timer.endMinutes) +
    "\" required></div></div><div class=\"form-group\"><label for=\"notStartMessage\"> <span> * </span> Текст до начала хакатона</label><input name=\"notStartMessage\" type=\"text\" class=\"form-control\" id=\"notStartMessage\" value=\"" +
    marko_escapeXmlAttr(timer.notStartMessage) +
    "\" placeholder=\"Текст до начала хакатона\" required><label for=\"startMessage\"> <span> * </span> Текст во время хакатона</label><input name=\"startMessage\" type=\"text\" class=\"form-control\" id=\"startMessage\" value=\"" +
    marko_escapeXmlAttr(timer.startMessage) +
    "\" placeholder=\"Текст во время хакатона\" required><label for=\"endMessage\"> <span> * </span> Текст после хакатона</label><input name=\"endMessage\" type=\"text\" class=\"form-control\" id=\"endMessage\" value=\"" +
    marko_escapeXmlAttr(timer.endMessage) +
    "\" placeholder=\"Текст после хакатона\" required></div><div class=\"flex\"><button type=\"submit\" class=\"btn btn-success\">Обновить</button><button type=\"reset\" class=\"btn btn-blue\" style=\"margin-left: auto;\">Сбросить</button></div></form>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/backend$1.0.0/view/admin/timer.marko"
  };
