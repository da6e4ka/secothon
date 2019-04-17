// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/admin/new/support.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    adminPage_template = marko_loadTemplate(require.resolve("../../layout/adminPage.marko")),
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_merge = require("marko/src/runtime/helper-merge"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  include_tag({
      _target: adminPage_template,
      _arg: marko_merge({
          title: "Создать информационного партнёра",
          body: {
              renderBody: function renderBody(out) {
                out.w("<form class=\"container\" method=\"post\" action=\"/admin/support\" enctype=\"multipart/form-data\"><div class=\"form-group\"><label for=\"name\"><span>*</span> Название ресурса</label><input name=\"name\" class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Название\" required></div><div class=\"form-group\"><label for=\"link\"><span>*</span> Ссылка на ресурс</label><div class=\"input-group\" id=\"link\"><div class=\"input-group-prepend\"><span class=\"input-group-text\">http://</span></div><input type=\"text\" name=\"link\" class=\"form-control\" placeholder=\"Ссылка\" required></div></div><div class=\"form-group\"><label for=\"picture\"><span>*</span> Лого ресурса</label><br><input accept=\"image/jpeg,image/jpg,image/png,image/gif,image/svg,image/x-icon\" name=\"picture\" id=\"picture\" type=\"file\" required></div><button type=\"submit\" class=\"btn btn-blue\">Сохранить</button></form>");
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
    id: "/backend$1.0.0/view/admin/new/support.marko",
    tags: [
      "../../layout/adminPage.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
