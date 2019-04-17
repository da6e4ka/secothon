// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/admin/meta.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<form class=\"container\" method=\"post\" action=\"/admin/meta\" enctype=\"multipart/form-data\">");

  let meta = input.meta

  out.w("<div class=\"form-group\"><label for=\"title\"> <span> * </span> Заголовок</label><input name=\"title\" id=\"title\" class=\"form-control\" value=\"" +
    marko_escapeXmlAttr(meta.title) +
    "\" placeholder=\"Заголовок\" required><label for=\"description\"> Описание (Желательно не более <strong>160</strong> символов)</label><textarea name=\"description\" id=\"description\" class=\"form-control\" value=\"" +
    marko_escapeXmlAttr(meta.description) +
    "\" placeholder=\"Описание, которое видно в под названием в поисковиках\">" +
    marko_escapeXml(meta.description) +
    "</textarea><label for=\"keywords\"> Ключевые слова (через запятую)</label><input name=\"keywords\" id=\"keywords\" class=\"form-control\" value=\"" +
    marko_escapeXmlAttr(meta.keywords) +
    "\" placeholder=\"Ключевые слова (через запятую), по которым будет производится поиск\"></div><div class=\"form-group\"><label for=\"yandex\"> <span style=\"color: #ff0000\">Y</span><span style=\"color: #000000\">andex</span> Метрика</label><textarea name=\"yandex\" id=\"yandex\" class=\"form-control\" style=\"min-height: 110px;\" value=\"" +
    marko_escapeXmlAttr(meta.yandex) +
    "\" placeholder=\"Введите код от Yandex Метрики\">" +
    marko_escapeXml(meta.yandex) +
    "</textarea><label for=\"google\"> <span style=\"color: #4285f4\">G</span><span style=\"color: #ea4335\">o</span><span style=\"color: #fbbc05\">o</span><span style=\"color: #4285f4\">g</span><span style=\"color: #34a853\">l</span><span style=\"color: #ea4335\">e</span> Аналитика</label><textarea name=\"google\" id=\"google\" class=\"form-control\" style=\"min-height: 110px;\" value=\"" +
    marko_escapeXmlAttr(meta.google) +
    "\" placeholder=\"Введите код от Google Аналитики\">" +
    marko_escapeXml(meta.google) +
    "</textarea></div><div class=\"flex\"><button type=\"submit\" class=\"btn btn-success\">Обновить</button><button type=\"reset\" class=\"btn btn-blue\" style=\"margin-left: auto;\">Сбросить</button></div></form>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/backend$1.0.0/view/admin/meta.marko"
  };
