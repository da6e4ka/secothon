// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/admin/partner.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div><a href=\"/admin/new/partner\" class=\"btn btn-blue\" style=\"margin: 20px\">Создать партнера</a><button class=\"btn btn-blue\" onclick=\"saveOrder(this, 'partner')\">Сохранить порядок</button><form class=\"container\" action=\"/admin/partner/types\" method=\"post\"><div class=\"form-group\"><label for=\"types\"><span>*</span> Типы (статусы) партнёров (во множеств. числе и через запятую <code>,</code>)</label><input type=\"text\" name=\"types\" id=\"types\" class=\"form-control\" value=\"" +
    marko_escapeXmlAttr(input.partnersType.toString()) +
    "\" placeholder=\"Типы партнёров. ПОРЯДОК ВЛИЯЕТ НА СОРТИРОВКУ\" required><label for=\"types\">ВНИМАНИЕ! Партнёры сначала сортируются по типу (статусу), а потом уже по тому, как Вы их расположите</label><button class=\"btn btn-blue\" type=\"submit\">Сохранить изменения</button></div></form>");

  if (input.partners.length) {
    out.w("<table class=\"tablesorter\"><thead><tr><th style=\"width: 0\" class=\"{sorter:false} move-col\"></th><th>№</th><th class=\"{sorter:false}\">Фото</th><th>Название</th><th>Описание</th><th>Ссылка</th><th>Статус</th><th class=\"{sorter: false}\">Редактировать</th></tr></thead><tbody id=\"partner-move\">");

    let count = 1;

    var for__23 = 0;

    marko_forEach(input.partners, function(partner) {
      var keyscope__24 = "[" + ((for__23++) + "]");

      out.w("<tr class=\"drag-elem\"><td class=\"move-col\"><i class=\"fas fa-bars move-bars partner-order\" id=\"" +
        marko_escapeXmlAttr(partner._id) +
        "\"></i></td><td>" +
        marko_escapeXml(count++) +
        "</td><td><img src=\"" +
        marko_escapeXmlAttr(partner.picture) +
        "\" alt=\"\" class=\"admin-image\"></td><td>" +
        marko_escapeXml(partner.name) +
        "</td><td>" +
        marko_escapeXml(partner.description.length < 150 ? partner.description : partner.description.slice(0, 149) + "…") +
        "</td><td><a href=\"http://" +
        marko_escapeXmlAttr(partner.link) +
        "\">" +
        marko_escapeXml(partner.link) +
        "</a></td><td>" +
        marko_escapeXml(partner.partnerType) +
        "</td><td><a class=\"edit-link\" href=\"/admin/edit/partner?id=" +
        marko_escapeXmlAttr(partner._id) +
        "\">Изменить</a><a class=\"edit-link\" href=\"/admin/partner/delete?id=" +
        marko_escapeXmlAttr(partner._id) +
        "\">Удалить</a></td></tr>");
    });

    out.w("</tbody><script>\n            // List with handle\n            sortInit('partner')\n        </script></table>");
  } else {
    out.w("<p class=\"container\">Вы ещё не создали ни одного информационного партнёра. Сделайте это прямо <a href=\"/admin/new/partner\">сейчас!</a></p>");
  }

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/backend$1.0.0/view/admin/partner.marko"
  };
