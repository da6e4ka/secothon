// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/pages/partners.marko",
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
                out.w("<section class=\"about-us\"><div class=\"container mt-3 text-about-us\">");

                let r = '';

                var for__4 = 0;

                marko_forEach(input.partner, function(partner) {
                  var keyscope__5 = "[" + ((for__4++) + "]");

                  if (r !== partner.partnerType) {
                    out.w("<h2 class=\"main-header\" id=\"" +
                      marko_escapeXmlAttr(r = partner.partnerType) +
                      "\">" +
                      marko_escapeXml(r) +
                      "</h2>");
                  }

                  out.w("<div class=\"media partners-list\" id=\"" +
                    marko_escapeXmlAttr(partner.link) +
                    "\"><a href=\"http://" +
                    marko_escapeXmlAttr(partner.link) +
                    "\" class=\"more-link\"><img class=\"mr-3 org-logo\" src=\"" +
                    marko_escapeXmlAttr(partner.picture) +
                    "\" alt=\"\"></a><div class=\"media-body partners-block\"><h2 class=\"mt-3 partners-header\">" +
                    marko_escapeXml(partner.name) +
                    "</h2><div class=\"partners-description\">" +
                    marko_escapeXml(partner.description) +
                    "</div></div></div>");
                });

                out.w("<a href=\"https://drive.google.com/file/d/1FHda16fpfCPajG40DftCl5vzdyS0MGec/view\" style=\"margin: 0;\" target=\"_blank\"><button type=\"button\" class=\"btn btn-blue\" style=\"padding: 10px 15px;\">Хочу стать спонсором или партнером</button></a></div></section>");
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
    id: "/backend$1.0.0/view/pages/partners.marko",
    tags: [
      "../layout/page.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
