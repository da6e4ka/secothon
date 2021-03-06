// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/login/setPassword.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    page_template = marko_loadTemplate(require.resolve("../layout/page.marko")),
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_merge = require("marko/src/runtime/helper-merge"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  include_tag({
      _target: page_template,
      _arg: marko_merge({
          body: {
              renderBody: function renderBody(out) {
                out.w("<section class=\"about-us\"><div class=\"new_password\"><div class=\"container\"></div><form class=\"container\" action=\"/profile/password\" method=\"post\"><div class=\"form-group\"><label for=\"password\">Пароль</label><input name=\"password\" required type=\"password\" class=\"form-control\" id=\"password\" minLength=\"8\" placeholder=\"Не менее 8 символов\"></div><div class=\"form-group\"><label for=\"repeat_password\">Подтвердите пароль</label><input name=\"password2\" required type=\"password\" minLength=\"8\" class=\"form-control\" id=\"repeat_password\"></div><button type=\"submit\" class=\"mb-5 btn btn-primary\"> Изменить пароль </button></form></div></section>");
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
    id: "/backend$1.0.0/view/login/setPassword.marko",
    tags: [
      "../layout/page.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
