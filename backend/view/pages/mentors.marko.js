// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/pages/mentors.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    page_template = marko_loadTemplate(require.resolve("../layout/page.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_escapeXml = marko_helpers.x,
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
                if (!input.mentors.length) {
                  out.w("<p class=\"container mt-3 text-about-us\">В списке пока никого нет</p>");
                } else {
                  out.w("<div class=\"content\">");

                  var for__4 = 0;

                  marko_forEach(input.mentors, function(mentor) {
                    var keyscope__5 = "[" + ((for__4++) + "]");

                    let isReal = (key) => (mentor[key] && mentor[key].toString() && !(mentor[key].toString() in ['""', "''", "{}", "[]", ""]));

                    out.w("<div class=\"container\" id=\"" +
                      marko_escapeXmlAttr(mentor._id) +
                      "\"><div class=\"mb-4 row align-items-center\"><div class=\"col-md mentor-info\"><div class=\"text-center\" style=\"float: left; margin-right: 20px;\"><img class=\"users_pic\" src=\"" +
                      marko_escapeXmlAttr(mentor.picture) +
                      "\" style=\"border-radius: 50%; width: 110px; height: 110px\" alt=\"\"></div><p class=\"part_users\" style=\"text-align: left;\">" +
                      marko_escapeXml(mentor.name) +
                      "<br></p><div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\"><div class=\"panel panel-default\"><div class=\"panel-heading\" role=\"tab\" id=\"headingOne\"><h4 class=\"panel-title\" style=\"background-color: #fff; padding: 40px 0 0;\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse" +
                      marko_escapeXmlAttr(mentor._id) +
                      "MentorInfo\" aria-expanded=\"true\" aria-controls=\"collapseOne\">Подробнее</a></h4></div><div id=\"collapse" +
                      marko_escapeXmlAttr(mentor._id) +
                      "MentorInfo\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\" style=\"text-align: left\"><div><p class=\"faq-header-list\" style=\"margin-bottom: 0\">О менторе: ");

                    if (mentor.description) {
                      out.w("<span class=\"users_work\">" +
                        marko_escapeXml(mentor.description) +
                        "</span>");
                    }

                    out.w("</p>");

                    if (mentor.company) {
                      out.w("<p class=\"faq-header-list\" style=\"padding: 0; margin: 0 0 0 25px;\">Работает в компании: <span class=\"users_work\">" +
                        marko_escapeXml(mentor.company) +
                        "</span></p>");
                    }

                    out.w("<p class=\"faq-header-list\" style=\"padding: 0; margin: 0 0 1rem 25px;\">Должность: <span class=\"users_work\">" +
                      marko_escapeXml(mentor.job) +
                      "</span></p></div>");

                    if (isReal("vk") || isReal("fb")) {
                      out.w("<p class=\"faq-header-list\" style=\"margin-bottom: 0\">Ссылки на соц. сети:<br><ul>");

                      if (isReal("fb")) {
                        out.w("<li><a href=\"https://facebook.com/" +
                          marko_escapeXmlAttr(mentor.fb) +
                          "\"><i class=\"fab fa-facebook-f\" style=\"color: var(--fb)\"></i> Facebook</a></li>");
                      }

                      if (isReal("vk")) {
                        out.w("<li><a href=\"https://vk.com/" +
                          marko_escapeXmlAttr(mentor.vk) +
                          "\"><i class=\"fab fa-vk\" style=\"color: var(--vk)\"></i> VK</a></li>");
                      }

                      out.w("</ul></p>");
                    }

                    out.w("</div></div></div></div></div></div>");
                  });

                  out.w("</div>");
                }
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
    id: "/backend$1.0.0/view/pages/mentors.marko",
    tags: [
      "../layout/page.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
