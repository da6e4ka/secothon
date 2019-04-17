// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/pages/create_new_project.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    page_template = marko_loadTemplate(require.resolve("../layout/page.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
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
                out.w("<section class=\"about-us\"><div><form class=\"container\" action=\"/project/create\" method=\"post\"><div class=\"form-group\"><label for=\"name_project\"><span> * </span> Название проекта</label><input required type=\"text\" class=\"form-control\" name=\"name_project\" id=\"name_project\" spellcheck=\"true\"></div><div class=\"form-area form-group\"><label for=\"about_project\"><span> * </span> О проекте</label><textarea required class=\"form-control\" id=\"about_project\" name=\"about_project\" rows=\"5\" spellcheck=\"true\"></textarea></div><div class=\"form-area form-group\"><label for=\"project_problem\"><span> * </span> Проблемы</label><textarea required class=\"form-control\" id=\"project_problem\" name=\"project_problem\" rows=\"5\" spellcheck=\"true\"></textarea></div><div class=\"form-area form-group\"><label for=\"project_solution\"><span> * </span> Решение</label><textarea required class=\"form-control\" id=\"project_solution\" name=\"project_solution\" rows=\"5\" spellcheck=\"true\"></textarea></div><div class=\"form_group\"><div class=\"row justify-content-center\"><p class=\"field\">Кто требуется в команду?</p></div><style>\n                    .form-control-range {\n                        width: auto;\n                    }\n                </style>");

                var for__25 = 0;

                marko_forEach(Object.keys(input.roles), function(role) {
                  var keyscope__26 = "[" + ((for__25++) + "]");

                  out.w("<label for=\"" +
                    marko_escapeXmlAttr(role) +
                    "\"><span class=\"work\">" +
                    marko_escapeXml(input.roles[role]) +
                    "</span>: </label><input class=\"form-control form-control-range\" value=\"0\" type=\"number\" id=\"" +
                    marko_escapeXmlAttr(role) +
                    "\" name=\"" +
                    marko_escapeXmlAttr(role) +
                    "\" min=\"0\" max=\"5\">");
                });

                out.w("</div><button type=\"submit\" class=\"mt-3 mb-5 btn btn-success\">Предложить проект</button></form></div></section>");
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
    id: "/backend$1.0.0/view/pages/create_new_project.marko",
    tags: [
      "../layout/page.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
