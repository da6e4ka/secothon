// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/pages/users.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    page_template = marko_loadTemplate(require.resolve("../layout/page.marko")),
    user_template = marko_loadTemplate(require.resolve("../layout/user.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f,
    marko_merge = require("marko/src/runtime/helper-merge"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    hasRenderBodyKey = Symbol.for("hasRenderBody");

function render(input, out, __component, component, state) {
  var data = input;

  include_tag({
      _target: page_template,
      _arg: marko_merge({
          body: {
              renderBody: function renderBody(out) {
                out.w("<div class=\"users\"><div class=\"container\"><div class=\"row justify-content-center\"><h4 class=\"number_users\">Участников: " +
                  marko_escapeXml(input.users.length) +
                  "</h4></div><hr><div class=\"container\">");

                let r = ''

                var for__8 = 0;

                marko_forEach(input.users, function(user) {
                  var keyscope__9 = "[" + ((for__8++) + "]");

                  if (user.role !== r) {
                    out.w("<label style=\"color: mediumvioletred\">" +
                      marko_escapeXml(input.roles[r = user.role.toString()]) +
                      "</label>");
                  }

                  include_tag({
                      _target: user_template,
                      _arg: marko_merge({
                          user: user,
                          class: "mb-4 row align-items-center",
                          showAbout: true
                        }, input)
                    }, out, __component, "11" + keyscope__9);
                });

                out.w("</div></div></div>");
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
    id: "/backend$1.0.0/view/pages/users.marko",
    tags: [
      "../layout/page.marko",
      "../layout/user.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
