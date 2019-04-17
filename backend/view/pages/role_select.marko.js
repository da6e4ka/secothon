// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/pages/role_select.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_forEach = marko_helpers.f;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<select name=\"role\" class=\"form-control\" id=\"role\"><option value=\"" +
    marko_escapeXmlAttr(input.roles.default_role.key) +
    "\">" +
    marko_escapeXml(input.roles.default_role.show_name) +
    "</option>");

  var for__2 = 0;

  marko_forEach(input.roles.roles, function(i) {
    var keyscope__3 = "[" + ((for__2++) + "]");

    let selected = input.user && input.user.role === i.key;

    if (selected) {
      out.w("<option value=\"" +
        marko_escapeXmlAttr(i.key) +
        "\" selected>" +
        marko_escapeXml(i.show_name) +
        "</option>");
    } else {
      out.w("<option value=\"" +
        marko_escapeXmlAttr(i.key) +
        "\">" +
        marko_escapeXml(i.show_name) +
        "</option>");
    }
  });

  out.w("</select>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/backend$1.0.0/view/pages/role_select.marko"
  };
