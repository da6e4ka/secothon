// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/admin/mentor.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div><a href=\"/admin/new/mentor\" class=\"btn btn-blue\" style=\"margin: 20px\">Создать ментора</a><button class=\"btn btn-blue\" onclick=\"saveOrder(this, 'mentor')\">Сохранить порядок</button>");

  if (input.mentors.length) {
    out.w("<table class=\"tablesorter\"><thead><tr><th style=\"width: 0\" class=\"{sorter:false} move-col\"></th><th>№</th><th class=\"{sorter:false}\">Фото</th><th>Имя</th><th>Компания</th><th>Должность</th><th>О менторе</th><th>VK</th><th>FB</th><th class=\"{sorter: false}\">Редактировать</th></tr></thead><tbody>");

    var for__17 = 0;

    for (let index = 0; index < input.mentors.length; index++) {
      var keyscope__18 = "[" + ((for__17++) + "]");

      let mentor = input.mentors[index]

      out.w("<tr><td class=\"move-col\"><i class=\"fas fa-bars move-bars mentor-order\" id=\"" +
        marko_escapeXmlAttr(mentor._id) +
        "\"></i></td><td>" +
        marko_escapeXml(index + 1) +
        "</td><td><img src=\"" +
        marko_escapeXmlAttr(mentor.picture) +
        "\" alt=\"\" class=\"admin-image\"></td><td>" +
        marko_escapeXml(mentor.name) +
        "</td><td>" +
        marko_escapeXml(mentor.company || "—") +
        "</td><td>" +
        marko_escapeXml(mentor.job) +
        "</td>");

      if (mentor.description) {
        out.w("<td>" +
          marko_escapeXml((mentor.description.length < 150 ? mentor.description : mentor.description.slice(0, 149) + "…") || "—") +
          "</td>");
      } else {
        out.w("<td>—</td>");
      }

      out.w("<td>");

      if (mentor.vk) {
        out.w("<a href=\"https://vk.com/" +
          marko_escapeXmlAttr(mentor.vk) +
          "\">" +
          marko_escapeXml(mentor.vk) +
          "</a>");
      } else {
        out.w("—");
      }

      out.w("</td><td>");

      if (mentor.fb) {
        out.w("<a href=\"https://facebook.com/" +
          marko_escapeXmlAttr(mentor.fb) +
          "\">" +
          marko_escapeXml(mentor.fb) +
          "</a>");
      } else {
        out.w("—");
      }

      out.w("</td><td>&nbsp; <a class=\"edit-link\" href=\"/admin/edit/mentor?id=" +
        marko_escapeXmlAttr(mentor._id) +
        "\">Изменить</a><a class=\"edit-link\" href=\"/admin/mentor/delete?id=" +
        marko_escapeXmlAttr(mentor._id) +
        "\">Удалить</a></td></tr>");
    }

    out.w("</tbody><script>\n            // List with handle\n            sortInit('mentor')\n        </script></table>");
  } else {
    out.w("<p class=\"container\">Вы ещё не создали ни одного ментора. Сделайте это прямо <a href=\"/admin/new/mentor\">сейчас!</a></p>");
  }

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/backend$1.0.0/view/admin/mentor.marko"
  };
