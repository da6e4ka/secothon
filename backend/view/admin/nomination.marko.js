// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/admin/nomination.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div><a href=\"/admin/new/nomination\" class=\"btn btn-blue\" style=\"margin: 20px\">Создать номинацию</a><button class=\"btn btn-blue\" onclick=\"saveOrder(this, 'nomination')\">Сохранить порядок</button>");

  if (input.nominations.length) {
    out.w("<table class=\"tablesorter\"><thead><tr><th style=\"width: 0\" class=\"{sorter:false} move-col\"></th><th>№</th><th class=\"{sorter:false}\">Фото</th><th>Название</th><th>Описание</th><th class=\"{sorter: false}\">Редактировать</th></tr></thead><tbody id=\"nomination-move\">");

    let count = 1;

    var for__13 = 0;

    marko_forEach(input.nominations, function(nomination) {
      var keyscope__14 = "[" + ((for__13++) + "]");

      out.w("<tr class=\"drag-elem\"><td class=\"move-col\"><i class=\"fas fa-bars move-bars partner-order\" id=\"" +
        marko_escapeXmlAttr(nomination._id) +
        "\"></i></td><td>" +
        marko_escapeXml(count++) +
        "</td><td><img src=\"" +
        marko_escapeXmlAttr(nomination.picture) +
        "\" alt=\"\" class=\"admin-image\"></td><td>" +
        marko_escapeXml(nomination.name) +
        "</td><td>" +
        marko_escapeXml(nomination.description.length < 150 ? nomination.description : nomination.description.slice(0, 149) + "…") +
        "</td><td><a class=\"edit-link\" href=\"/admin/edit/nomination?id=" +
        marko_escapeXmlAttr(nomination._id) +
        "\">Изменить</a><a class=\"edit-link\" href=\"/admin/nomination/delete?id=" +
        marko_escapeXmlAttr(nomination._id) +
        "\">Удалить</a></td></tr>");
    });

    out.w("</tbody><script>\n            // List with handle\n            sortInit('nomination')\n        </script></table>");
  } else {
    out.w("<p class=\"container\">Вы ещё не создали ни одной номинации. Сделайте это прямо <a href=\"/admin/new/nomination\">сейчас!</a></p>");
  }

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/backend$1.0.0/view/admin/nomination.marko"
  };
