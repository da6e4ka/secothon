// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/login/recovery.marko",
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
                out.w("<div class=\"new_password\"><div class=\"container\"><div class=\"row justify-content-center\"><h3 class=\"main_header\">Забыли пароль?</h3></div></div><form class=\"container\" action=\"/recovery\" method=\"post\"><div class=\"mt-5 form-group\"><label for=\"email\">* E-mail</label><input name=\"email\" type=\"email\" class=\"form-control\" id=\"email\"></div><button type=\"submit\" class=\"mb-4 btn btn-primary\">Восстановить пароль</button><div class=\"mb-5 row\"><div class=\"col-md-12 sing-link\"><a href=\"/login\">Авторизоваться</a></div><div class=\"col-md-12 sing-link\"><a href=\"/registration\">Зарегистрироваться</a></div></div></form></div>");
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
    id: "/backend$1.0.0/view/login/recovery.marko",
    tags: [
      "../layout/page.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
