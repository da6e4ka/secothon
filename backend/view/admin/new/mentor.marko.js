// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/admin/new/mentor.marko",
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
          title: "Создать ментора",
          body: {
              renderBody: function renderBody(out) {
                out.w("<form class=\"container\" method=\"post\" action=\"/admin/new/mentor\" enctype=\"multipart/form-data\"><div class=\"form-group\"><label for=\"name\"><span>*</span> Имя ментора</label><input name=\"name\" class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Имя\" required></div><div class=\"form-group\"><label for=\"company\">Компания ментора</label><input name=\"company\" class=\"form-control\" id=\"company\" type=\"text\" placeholder=\"Компания\"></div><div class=\"form-group\"><label for=\"job\"><span>*</span> Должность ментора</label><input name=\"job\" class=\"form-control\" id=\"job\" type=\"text\" placeholder=\"Должность\" required></div><div class=\"form-group\"><label for=\"description\">О менторе</label><textarea name=\"description\" class=\"form-control\" id=\"description\" type=\"text\" placeholder=\"Информация о менторе\"></textarea></div><div class=\"form-group\"><label for=\"fb\" style=\"color: #3b5998\">Facebook</label><div class=\"input-group\" id=\"fb\"><div class=\"input-group\"><div class=\"input-group-prepend\"><span class=\"input-group-text\">https://facebook.com/</span></div><input name=\"fb\" type=\"text\" class=\"form-control\" placeholder=\"Facebook\"></div></div><br><label for=\"vk\" style=\"color: #4d7198\">ВКонтакте</label><div class=\"input-group\" id=\"vk\"><div class=\"input-group-prepend\"><span class=\"input-group-text\">https://vk.com/</span></div><input name=\"vk\" type=\"text\" class=\"form-control\" placeholder=\"ВКонтакте\"></div></div><div class=\"form-group\"><label for=\"picture\"><span>*</span> Фото ментора</label><br><input accept=\"image/jpeg,image/jpg,image/png,image/gif,image/svg,image/x-icon\" name=\"picture\" id=\"picture\" type=\"file\" required></div><button type=\"submit\" class=\"btn btn-blue\">Сохранить</button></form>");
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
    id: "/backend$1.0.0/view/admin/new/mentor.marko",
    tags: [
      "../../layout/adminPage.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
