// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/admin/edit/project.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    adminPage_template = marko_loadTemplate(require.resolve("../../layout/adminPage.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_escapeXml = marko_helpers.x,
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_merge = require("marko/src/runtime/helper-merge"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  include_tag({
      _target: adminPage_template,
      _arg: marko_merge({
          title: "Редактировать проект",
          body: {
              renderBody: function renderBody(out) {
                let data = input.data

                out.w("<form class=\"container\" method=\"post\" action=\"/admin/edit/project?id=" +
                  marko_escapeXmlAttr(data._id) +
                  "\" enctype=\"multipart/form-data\"><div class=\"form-group\"><label for=\"title\"><span>*</span> Название проекта</label><input name=\"title\" class=\"form-control\" id=\"title\" type=\"text\" placeholder=\"Название\" value=\"" +
                  marko_escapeXmlAttr(data.title) +
                  "\" required></div><div class=\"form-group\"><label for=\"text\"><span>*</span> Описание проекта</label><textarea name=\"text\" class=\"form-control\" id=\"text\" type=\"text\" placeholder=\"Описание\" value=\"" +
                  marko_escapeXmlAttr(data.text) +
                  "\" required>" +
                  marko_escapeXml(data.text) +
                  "</textarea></div><div class=\"form-group\"><label for=\"problem\"><span>*</span> Проблема</label><textarea name=\"problem\" class=\"form-control\" id=\"problem\" type=\"text\" placeholder=\"Проблема\" value=\"" +
                  marko_escapeXmlAttr(data.problem) +
                  "\" required>" +
                  marko_escapeXml(data.problem) +
                  "</textarea></div><div class=\"form-group\"><label for=\"solution\"><span>*</span> Решение</label><textarea name=\"solution\" class=\"form-control\" id=\"solution\" type=\"text\" placeholder=\"Решение\" value=\"" +
                  marko_escapeXmlAttr(data.solution) +
                  "\" required>" +
                  marko_escapeXml(data.solution) +
                  "</textarea></div><div class=\"flex\"><button type=\"submit\" class=\"btn btn-blue\">Обновить</button><button type=\"reset\" class=\"btn btn-blue\" style=\"margin-left: auto;\">Сбросить</button></div></form>");
              }
            },
          [hasRenderBodyKey]: true
        }, input)
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/backend$1.0.0/view/admin/edit/project.marko",
    tags: [
      "../../layout/adminPage.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
