// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/admin/support.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div><a href=\"/admin/support\" class=\"btn btn-blue\" style=\"margin: 20px\">Создать ресурс инф. поддержки</a>");

  if (input.support.length) {
    out.w("<table class=\"tablesorter\"><thead><tr><th style=\"width: 0\" class=\"{sorter:false} move-col\"></th><th>№</th><th class=\"{sorter:false}\">Фото</th><th>Название</th><th>Ссылка</th><th class=\"{sorter: false}\">Редактировать</th></tr></thead><tbody id=\"support-move\">");

    let count = 1;

    var for__12 = 0;

    marko_forEach(input.support, function(support) {
      var keyscope__13 = "[" + ((for__12++) + "]");

      out.w("<tr class=\"drag-elem\"><td class=\"move-col\"><i class=\"fas fa-bars move-bars support-order\" id=\"" +
        marko_escapeXmlAttr(support._id) +
        "\"></i></td><td>" +
        marko_escapeXml(count++) +
        "</td><td><img src=\"" +
        marko_escapeXmlAttr(support.picture) +
        "\" alt=\"\" class=\"admin-image\"></td><td>" +
        marko_escapeXml(support.name) +
        "</td><td><a href=\"http://" +
        marko_escapeXmlAttr(support.link) +
        "\">" +
        marko_escapeXml(support.link) +
        "</a></td><td><a class=\"edit-link\" href=\"/admin/edit/support?id=" +
        marko_escapeXmlAttr(support._id) +
        "\">Изменить</a><a class=\"edit-link\" href=\"/admin/support/delete?id=" +
        marko_escapeXmlAttr(support._id) +
        "\">Удалить</a></td></tr>");
    });

    out.w("</tbody><script>\n            // List with handle\n            sortInit('support')\n        </script><button class=\"btn btn-blue\" onclick=\"saveOrder(this, 'support')\">Сохранить порядок</button></table>");
  } else {
    out.w("<p class=\"container\">Вы ещё не создали ни одного информационного партнёра. Сделайте это прямо <a href=\"/admin/support\">сейчас!</a></p>");
  }

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/backend$1.0.0/view/admin/support.marko"
  };
