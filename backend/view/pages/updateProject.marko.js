// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/pages/updateProject.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    page_template = marko_loadTemplate(require.resolve("../layout/page.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f,
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
                out.w("<section class=\"about-us\"><div><form class=\"container\" action=\"/project/update\" method=\"post\"><div class=\"form-group\"><label for=\"name_project\"><span> * </span> Название проекта</label><input required type=\"text\" class=\"form-control\" name=\"name_project\" id=\"name_project\" value=\"" +
                  marko_escapeXmlAttr(input.project.title) +
                  "\" spellcheck=\"true\"></div><div class=\"form-area form-group\"><label for=\"about_project\"><span> * </span> О проекте</label><textarea required class=\"form-control\" id=\"about_project\" name=\"about_project\" rows=\"5\" spellcheck=\"true\">" +
                  marko_escapeXml(input.project.text) +
                  "</textarea></div><div class=\"form-area form-group\"><label for=\"project_problem\"><span> * </span> Проблемы</label><textarea required class=\"form-control\" id=\"project_problem\" name=\"project_problem\" rows=\"5\" spellcheck=\"true\">" +
                  marko_escapeXml(input.project.problem) +
                  "</textarea></div><div class=\"form-area form-group\"><label for=\"project_solution\">Решение</label><textarea class=\"form-control\" id=\"project_solution\" name=\"project_solution\" rows=\"5\" spellcheck=\"true\">" +
                  marko_escapeXml(input.project.solution) +
                  "</textarea></div><div class=\"form_group\"><div class=\"row justify-content-center\"><p class=\"field\">Кто требуется в команду?</p></div><style>\n                    .form-control-range {\n                        width: auto;\n                    }\n                </style>");

                var for__24 = 0;

                marko_forEach(Object.keys(input.roles), function(role) {
                  var keyscope__25 = "[" + ((for__24++) + "]");

                  out.w("<label for=\"" +
                    marko_escapeXmlAttr(role) +
                    "\"><span class=\"work\">" +
                    marko_escapeXml(input.roles[role]) +
                    "</span>: </label><input class=\"form-control form-control-range\" value=\"" +
                    marko_escapeXmlAttr(input.project.need[role]) +
                    "\" type=\"number\" id=\"" +
                    marko_escapeXmlAttr(role) +
                    "\" name=\"" +
                    marko_escapeXmlAttr(role) +
                    "\" min=\"0\" max=\"5\">");
                });

                out.w("<table class=\"tablesorter\"><thead><tr><th style=\"width: 0\">№</th><th>Пользователь</th><th>Роль</th></tr></thead><tbody>");

                var for__36 = 0;

                for (let index = 0; index < input.project.users.length; index++) {
                  var keyscope__37 = "[" + ((for__36++) + "]");

                  let user = input.project.users[index]

                  out.w("<tr><form action=\"/project/users/save?id=" +
                    marko_escapeXmlAttr(user._id) +
                    "\" method=\"post\"><td>" +
                    marko_escapeXml(user.name) +
                    " " +
                    marko_escapeXml(user.lastname) +
                    "</td><td>" +
                    marko_escapeXml(user.role) +
                    "</td><td><a href=\"/project/member/delete?id=" +
                    marko_escapeXmlAttr(user._id) +
                    "\">Удалить</a></td></form></tr>");
                }

                out.w("</tbody></table></div><div class=\"flex mt-3 row\"><button type=\"submit\" class=\"btn btn-success\">Сохранить изменения</button><button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#delete-project\" style=\"margin-left: auto\">Удалить проект</button></div><div class=\"modal\" tabindex=\"1\" role=\"dialog\" id=\"delete-project\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\"><h5 class=\"modal-title\">Удаление проекта</h5><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></div><div class=\"modal-body\" style=\"font-size: 20px\"><p>Вы действительно хотите удалить проект? <br> Он будет удален без возможности восстановления <br> <br> Вы ещё не передумали?</p></div><div class=\"modal-footer\"><a href=\"/project/delete\" class=\"btn btn-danger\">Да, удалить</a><button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\">Я передумал</button></div></div></div></div></form></div></section>");
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
    id: "/backend$1.0.0/view/pages/updateProject.marko",
    tags: [
      "../layout/page.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
