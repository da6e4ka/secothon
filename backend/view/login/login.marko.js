// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/login/login.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    page_template = marko_loadTemplate(require.resolve("../layout/page.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXmlAttr = marko_helpers.xa,
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_merge = require("marko/src/runtime/helper-merge"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  include_tag({
      _target: page_template,
      _arg: marko_merge({
          body: {
              renderBody: function renderBody(out) {
                out.w("<section class=\"sing_up\"><div class=\"for-vk\"><div class=\"container\"><div class=\"mt-3 row justify-content-center vk-row\"><a href=\"" +
                  marko_escapeXmlAttr(input.link) +
                  "\"><img class=\"vk-logo img-fluid\" src=\"/img/auth-vk.png\" alt=\"\"></a></div></div></div><form class=\"container\" action=\"/login\" method=\"post\"><div class=\"mt-5 form-group\"><label for=\"email\">* E-mail</label><input name=\"email\" type=\"email\" class=\"form-control\" id=\"email\"></div><div class=\"mt-2 form-group\"><label for=\"password\">* Пароль</label><input name=\"password\" type=\"password\" class=\"form-control\" id=\"password\"></div><button type=\"submit\" class=\"mb-4 btn btn-primary\">Войти</button><div class=\"mb-5 row\"><div class=\"col-md-12 sing-link\"><a href=\"/registration\">Зарегистрироваться</a></div><div class=\"col-md-12 sing-link\"><a href=\"/recovery\">Забыли пароль?</a></div></div></form></section>");
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
    id: "/backend$1.0.0/view/login/login.marko",
    tags: [
      "../layout/page.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
