// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/pages/about.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    page_template = marko_loadTemplate(require.resolve("../layout/page.marko")),
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_merge = require("marko/src/runtime/helper-merge"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  include_tag({
      _target: page_template,
      _arg: marko_merge({
          body: {
              renderBody: function renderBody(out) {
                out.w("<p class=\"container mt-3 text-about-us\">19-21 октября мы объединим самых активных представителей технологических, креативных и предпринимательских сообществ Пензы и ближайших регионов, чтобы они смогли за 48 часов запустить свои IT и Hardware-проекты. <br><br> Мы не ограничиваем области идей и инструменты для их реализации. Это могут быть как коммерческие, так и некоммерческие проекты, на которые у Вас просто не хватает времени в обычной жизни. Главное правило – никакого кода до начала мероприятия. <br><br> Все участники получат круглосуточный доступ на площадку, горячее питание, кофе-брейки и, самое главное, консультации экспертов из разных областей, которые могут дать конкретные рекомендации по реализации идей. <br><br> Можно бесконечно говорить о том, что было бы прикольно/полезно/перспективно запустить вот такой проект... А можно прийти, собрать команду и сделать! <br><br> Всем «выжившим» на SECOTHON гарантирована гордость за себя, а лучшим проектам и участникам достанутся призы и подарки от спонсоров и партнёров. <br><br> Участие в мероприятии условно-платное и составляет 512 рублей — стандартный билет и 256 рублей - для студентов и школьников. Однако каждый желающий может написать мотивационное письмо организаторам на <a style=\"color: #3e1da4\" class=\"secon-link\" href=\"mailto:secothon@secon.ru\">secothon@secon.ru</a> и получить свой билет абсолютно бесплатно. Вход на демофест (презентации проектов и награждение победителей в воскресенье) — свободный для всех желающих. До встречи! <br><br></p>");
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
    id: "/backend$1.0.0/view/pages/about.marko",
    tags: [
      "../layout/page.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
