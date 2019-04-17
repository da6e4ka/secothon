// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/pages/archive.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    page_template = marko_loadTemplate(require.resolve("../layout/page.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f,
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
                out.w("<section class=\"about-us\"><div><div class=\"project-container\"><div class=\"projects_header\"><div class=\"projects_name\">Было участников: " +
                  marko_escapeXml(input.users.length) +
                  "</div><div class=\"projects_name\">Фото:</div><div class=\"projects_name\">Отчёт:</div></div><h2 class=\"header-row\">Победители номинаций</h2><div><div class=\"project-container\"><div class=\"projects_header\"><div class=\"nomination-item \"><img src=\"img/panel/Tech.png\" alt=\"\"><p>Tech</p></div><div class=\"projects_name\">Название команды:</div><div class=\"nomination-item \"><img src=\"img/panel/Startup.png\" alt=\"\"><p>StartUp</p></div><div class=\"projects_name\">Название команды:</div><div class=\"nomination-item \"><img src=\"img/panel/Tech.png\" alt=\"\"><p>Hardware</p></div><div class=\"projects_name\">Название команды:</div><div class=\"nomination-item \"><img src=\"img/panel/hack.png\" alt=\"\"><p>Hack</p></div><div class=\"projects_name\">Название команды:</div><div class=\"nomination-item \"><img src=\"img/panel/enter.png\" alt=\"\"><p>Entertainment</p></div><div class=\"projects_name\">Название команды:</div></div><h2 class=\"header-row\">Список проектов 2018 года</h2>");

                var for__34 = 0;

                marko_forEach(input.projects, function(project) {
                  var keyscope__35 = "[" + ((for__34++) + "]");

                  out.w("<div class=\"projects_name\">Название проекта: " +
                    marko_escapeXml(project.title) +
                    "</div>");
                });

                out.w("</div><section id=\"org\"><h2 class=\"header-row\">Менторы</h2><div id=\"carousel\" class=\"carousel\"><div class=\"carousel-element\"><div class=\"nomination-item\"><img src=\"img/mentors/1.png\" alt=\"\"><p class=\"mentor-work\"> Иван Иванов Сodeinside <br> Frontend-разработчик </p></div><div class=\"logo-link-mentor\"><a class=\"social-link-mentor rounded-circle-mentor text-white\" href=\"https://vk.com/club44400637\"><img src=\"img/media/Vk.svg\"></a></div></div><div class=\"carousel-element\"><div class=\"nomination-item\"><img src=\"img/mentors/1.png\" alt=\"\"><p class=\"mentor-work\">Иван Иванов Сodeinside <br> Java-разработчик </p></div><div class=\"logo-link-mentor\"><a class=\"social-link-mentor rounded-circle-mentor text-white\" href=\"https://vk.com/club44400637\"><img src=\"img/media/Vk.svg\"></a></div></div><div class=\"carousel-element\"><div class=\"nomination-item\"><img src=\"img/mentors/1.png\" alt=\"\"><p class=\"mentor-work\"> Иван Иванов Codeinside <br> Backend-разработчик </p></div><div class=\"logo-link-mentor\"><a class=\"social-link-mentor rounded-circle-mentor text-white\" href=\"https://vk.com/club44400637\"><img src=\"img/media/Vk.svg\"></a></div></div><div class=\"carousel-element\"><div class=\"nomination-item\"><img src=\"img/mentors/1.png\" alt=\"\"><p class=\"mentor-work\">Иван Иванов Codeinside <br> Frontend-разработчик </p></div><div class=\"logo-link-mentor\"><a class=\"social-link-mentor rounded-circle-mentor text-white\" href=\"https://vk.com/club44400637\"><img src=\"img/media/Vk.svg\"></a></div></div><div class=\"carousel-element\"><div class=\"nomination-item\"><img src=\"img/mentors/1.png\" alt=\"\"><p class=\"mentor-work\">Иван Иванов Codeinside <br> Java-разработчик </p></div><div class=\"logo-link-mentor\"><a class=\"social-link-mentor rounded-circle-mentor text-white\" href=\"https://vk.com/club44400637\"><img src=\"img/media/Vk.svg\"></a></div></div><div class=\"carousel-element\"><div class=\"nomination-item\"><img src=\"img/mentors/1.png\" alt=\"\"><p class=\"mentor-work\">Иван Иванов Codeinside <br> Backend-разработчик </p></div><div class=\"logo-link-mentor\"><a class=\"social-link-mentor rounded-circle-mentor text-white\" href=\"https://vk.com/club44400637\"><img src=\"img/media/Vk.svg\"></a></div></div></div></section></div></div></div></section>");
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
    id: "/backend$1.0.0/view/pages/archive.marko",
    tags: [
      "../layout/page.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
