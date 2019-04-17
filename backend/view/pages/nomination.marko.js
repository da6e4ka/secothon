// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/pages/nomination.marko",
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
                out.w("<section class=\"about-us\"><div class=\"container mt-3 text-about-us\">");

                var for__4 = 0;

                marko_forEach(input.nominations, function(nomination) {
                  var keyscope__5 = "[" + ((for__4++) + "]");

                  out.w("<div class=\"row justify-content-center align-items-center\" id=\"" +
                    marko_escapeXmlAttr(nomination.name) +
                    "\"><div class=\"col-md-1 p-0 m-4\"><img class=\"nomination-logo\" src=\"" +
                    marko_escapeXmlAttr(nomination.picture) +
                    "\" alt=\"\"></div><div class=\"col-md-10 p-0\"><h3>" +
                    marko_escapeXml(nomination.name) +
                    "</h3></div><div class=\"col-md-12\"><div><ul class=\"list\">");

                  var for__14 = 0;

                  marko_forEach(nomination.description.split("\n"), function(l) {
                    var keyscope__15 = "[" + (((for__14++) + keyscope__5) + "]");

                    out.w("<li>" +
                      marko_escapeXml(l) +
                      "</li>");
                  });

                  out.w("</ul></div></div></div><hr>");
                });

                out.w("</div></section>");
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
    id: "/backend$1.0.0/view/pages/nomination.marko",
    tags: [
      "../layout/page.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
