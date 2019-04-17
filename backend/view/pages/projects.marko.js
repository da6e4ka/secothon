// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/pages/projects.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    page_template = marko_loadTemplate(require.resolve("../layout/page.marko")),
    user_template = marko_loadTemplate(require.resolve("../layout/user.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f,
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_str = marko_helpers.s,
    marko_merge = require("marko/src/runtime/helper-merge"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    hasRenderBodyKey = Symbol.for("hasRenderBody");

function render(input, out, __component, component, state) {
  var data = input;

  include_tag({
      _target: page_template,
      _arg: marko_merge({
          body: {
              renderBody: function renderBody(out) {
                const multiline = (string) => string.split('&').join('&amp;').split('"').join('&quot;').split("'").join('&#39;').split('<').join('&lt;').split('>').join('&gt;').split('\r\n').join("<br/>");

                out.w("<section class=\"about-us\">");

                if ((input.user && (!input.user.project)) || input.projects.length) {
                  out.w("<section class=\"container\">");

                  if (input.user && (!input.user.project)) {
                    out.w("<div class=\"row m-3 justify-content-center\"><a href=\"/project/create\"><button class=\"btn button-project btn-blue\">Добавить проект</button></a></div>");
                  }

                  out.w("<div class=\"row justify-content-center\">");

                  if (input.projects.length) {
                    out.w("<h4 class=\"number_participant\">Идей: " +
                      marko_escapeXml(input.projects.length) +
                      "</h4>");
                  }

                  out.w("</div><hr></section>");
                }

                if (input.projects.length) {
                  out.w("<div>");

                  var for__11 = 0;

                  marko_forEach(input.projects, function(project) {
                    var keyscope__12 = "[" + ((for__11++) + "]");

                    let author = input.users.find(elem => project.uid.toString() == elem._id.toString())

                    if (author) {
                      out.w("<div class=\"project container\"><div class=\"projects_header\"><div class=\"content_title\">Проект:</div><div class=\"projects_name\">" +
                        marko_escapeXml(project.title) +
                        "</div></div><div class=\"projects_body row mb-3\"><div class=\"project_sidebar col-sm-8\"><div class=\"project_content\"><div class=\"content_title\">О проекте:</div><div class=\"project-description\">" +
                        marko_escapeXml(project.text) +
                        "</div></div><div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\"><div class=\"panel panel-default\"><div class=\"panel-heading\" role=\"tab\" id=\"headingOne\"><a class=\"btn btn-blue\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse" +
                        marko_escapeXmlAttr(project.uid) +
                        "\" aria-expanded=\"true\" aria-controls=\"collapseOne\">Подробнее</a></div><div id=\"collapse" +
                        marko_escapeXmlAttr(project.uid) +
                        "\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\"><div class=\"content_title\">Проблема:</div><div class=\"project-description\">" +
                        marko_str(multiline(project.problem)) +
                        "</div><div class=\"content_title\">Решение:</div><div class=\"project-description\">" +
                        marko_str(multiline(project.solution)) +
                        "</div><div class=\"content_title\">Команда проекта:</div><div class=\"project-description\">");

                      if (project.users.length) {
                        var for__33 = 0;

                        marko_forEach(project.users, function(userId) {
                          var keyscope__34 = "[" + (((for__33++) + keyscope__12) + "]");

                          let projectUser = input.users.find( elem => elem._id.toString() === userId.toString() )

                          if (projectUser) {
                            include_tag({
                                _target: user_template,
                                _arg: marko_merge({
                                    user: projectUser,
                                    showUserRole: true
                                  }, input)
                              }, out, __component, "35" + keyscope__34);
                          }
                        });
                      } else {
                        out.w("В комманде пока никого нет");
                      }

                      out.w("</div></div></div><div class=\"project_content\"><div class=\" project_content\"><div class=\"idea_author\"><div class=\"content_title \">Автор идеи:</div></div>");

                      include_tag({
                          _target: user_template,
                          _arg: marko_merge({
                              user: author,
                              showUserRole: true
                            }, input)
                        }, out, __component, "40" + keyscope__12);

                      out.w("</div></div></div><div class=\"project_group col-sm-auto\">");

                      if (project.need && Object.values(project.need).reduce((x, y) => x * 1 + y * 1)) {
                        out.w("В команду ещё нужны:<br>");

                        var for__43 = 0;

                        marko_forEach(Object.keys(project.need), function(role) {
                          var keyscope__44 = "[" + (((for__43++) + keyscope__12) + "]");

                          let count = project.need[role] * 1

                          if (count && (count === 1)) {
                            out.w("<label><span class=\"users_work\">" +
                              marko_escapeXml(input.roles[role]) +
                              "</span></label>");
                          } else if (count) {
                            out.w("<label><span class=\"users_work\">" +
                              marko_escapeXml(input.needRole[role]) +
                              "</span>: " +
                              marko_escapeXml(count) +
                              "</label>");
                          }

                          if (count || (count === 1)) {
                            out.w("<br>");
                          }
                        });
                      } else {
                        out.w("Команда проекта в полном составе");
                      }

                      out.w("</div></div></div>");

                      if (input.user && input.user.paid) {
                        if (((!input.user.project) && project.need) && project.need[input.user.role]) {
                          out.w("<a class=\"btn btn-blue\" href=\"/join?project=" +
                            marko_escapeXmlAttr(project._id) +
                            "\">Присоединиться к проекту</a>");
                        } else if (input.user.project && (input.user._id.toString() === project.uid.toString())) {
                          out.w("<a class=\"btn btn-success\" href=\"/project/update\">Изменить проект</a>");
                        } else if (input.user.project && (project.users.indexOf(input.user._id.toString()) !== (-1))) {
                          out.w("<a class=\"btn btn-danger\" href=\"/leave\">Выйти из проекта</a>");
                        }
                      }

                      out.w("</div>");
                    }
                  });

                  out.w("</div>");
                } else {
                  out.w("<p class=\"container mt-3 text-about-us\">Проектов пока нет. Будьте первыми, кто ");

                  if (!(!input.user)) {
                    out.w("<a href=\"/project/create\">");
                  }

                  out.w("предложит идею для проекта!");

                  if (!(!input.user)) {
                    out.w("</a>");
                  }

                  out.w("<br>");

                  if (!input.user) {
                    out.w("Для этог нужно <a href=\"/login\">быть зарегистрированным на нашем сайте</a>.");
                  }

                  out.w("</p>");
                }

                out.w("</section>");
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
    id: "/backend$1.0.0/view/pages/projects.marko",
    tags: [
      "../layout/page.marko",
      "../layout/user.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
