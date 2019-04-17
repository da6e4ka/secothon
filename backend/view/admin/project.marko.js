// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/admin/project.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div>");

  if (input.projects.length) {
    out.w("<table class=\"tablesorter\"><thead><tr><th style=\"width: 0\" class=\"{sorter:false} move-col\"></th><th>№</th><th>Название</th><th>Описание</th><th>Кол-во участников</th><th>Требуется</th><th class=\"{sorter: false}\">Редактировать</th></tr></thead><tbody id=\"project-move\">");

    let count = 1;

    const short = text => {return (text.length < 130 ? text : text.slice(0, 129) + "…").replace(/\n/g, "\t")}

    var for__12 = 0;

    marko_forEach(input.projects, function(project) {
      var keyscope__13 = "[" + ((for__12++) + "]");

      out.w("<tr class=\"drag-elem\">");

      let need = 0;

      for(let key in project.need) {
                        need += project.need[key]
                    }

      out.w("<td class=\"move-col\"><i class=\"fas fa-bars move-bars project-order\" id=\"" +
        marko_escapeXmlAttr(project._id) +
        "\"></i></td><td>" +
        marko_escapeXml(count++) +
        "</td><td>" +
        marko_escapeXml(project.title) +
        "</td><td>" +
        marko_escapeXml(short(project.text)) +
        "</td><td>" +
        marko_escapeXml(project.users.length) +
        "</td><td>" +
        marko_escapeXml(need) +
        "</td><td><a class=\"edit-link\" href=\"/admin/edit/project?id=" +
        marko_escapeXmlAttr(project._id) +
        "\">Изменить</a><a class=\"edit-link\" href=\"/admin/project/delete?id=" +
        marko_escapeXmlAttr(project._id) +
        "\">Удалить</a></td></tr>");
    });

    out.w("</tbody><script>\n            // List with handle\n            sortInit('project')\n        </script><button class=\"btn btn-blue\" onclick=\"saveOrder(this, 'project')\" style=\"margin: 20px\">Сохранить порядок</button></table>");
  } else {
    out.w("<p class=\"container\">Пока никто не предложил свой проект. Ждём....</p>");
  }

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/backend$1.0.0/view/admin/project.marko"
  };
