// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/layout/alert.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa;

function render(input, out, __component, component, state) {
  var data = input;

  if (input.alert) {
    out.w("<div style=\"width: 100%; z-index: 10000; position: absolute; top: 0; left: 0; padding: 40px;\"><div class=\"alert alert-" +
      marko_escapeXmlAttr(input.alert.type ? input.alert.type : "warning") +
      " alert-dismissible fade show\" role=\"alert\" style=\"width: auto\">" +
      marko_escapeXml(input.alert.text ? input.alert.text : input.alert) +
      "<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" onclick=\"window.location.search = ''\"><span aria-hidden=\"true\">&times;</span></button></div></div>");
  }
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/backend$1.0.0/view/layout/alert.marko"
  };
