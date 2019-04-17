// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/layout/paidEmail.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\"><html xmlns=\"http://www.w3.org/1999/xhtml\"><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta name=\"viewport\" content=\"width=device-width\"><style type=\"text/css\">\n        * { margin: 0; padding: 0; font-size: 100%; font-family: 'Avenir Next', \"Helvetica Neue\", \"Helvetica\", Helvetica, Arial, sans-serif; line-height: 1.65; }\n        img { max-width: 100%; margin: 0 auto; display: block; }\n        body, .body-wrap { width: 100% !important; height: 100%; background: #f8f8f8; }\n        a { color: #1f0f55; text-decoration: none; }\n        a:hover { text-decoration: underline; }\n        .button { display: inline-block; color: white; background: #200f51; border: solid #1f0f55; border-width: 10px 20px 8px; font-weight: bold; border-radius: 4px; }\n        .button:hover { text-decoration: none; }\n        h1, h2, h3, h4, h5, h6 { margin-bottom: 20px; line-height: 1.25; }\n        h1 { font-size: 32px; }\n        h2 { font-size: 28px; }\n        h3 { font-size: 24px; }\n        h4 { font-size: 20px; }\n        h5 { font-size: 16px; }\n        p, ul, ol { font-size: 16px; font-weight: normal; margin-bottom: 20px; }\n        .container { display: block !important; clear: both !important; margin: 0 auto !important; max-width: 580px !important; }\n        .container table { width: 100% !important; border-collapse: collapse; }\n        .container .content { background: white; padding: 30px 35px; }\n        .container .content.footer { background: none; }\n        .container .content.footer p { margin-bottom: 0; color: #888; text-align: center; font-size: 14px; }\n        .container .content.footer a { color: #888; text-decoration: none; font-weight: bold; }\n        .container .content.footer a:hover { text-decoration: underline; }\n    </style></head><body>");

  component_globals_tag({}, out);

  out.w("<table class=\"body-wrap\"><tr><td class=\"container\"><table><tr><td align=\"center\" class=\"masthead\"><img src=\"http://secothon.secon.ru/img/email.png\" style=\"background-position: center; background-size: cover\" alt=\"\"></td></tr><tr><td class=\"content\"><h2>ДОБРЫЙ ДЕНЬ, " +
    marko_escapeXml(input.name) +
    "!</h2><p>Благодарим Вас за оплату участия в SECOTHON'2018!</p><table><tr><td align=\"center\"><p>Для того, что бы Вы смогли всеми возможностями сайта <a href=\"http://secothon.secon.ru\">SECON'2018</a> следует зарегестрироваться или создать аккаунт с данной почтой: <strong>" +
    marko_escapeXml(input.email) +
    "</strong><br> Так же, если у Вас что-то пошло не так, то пишите нам на <a href=\"mailto:secothon@secon.ru\">почту</a> или администраторам группы <a href=\"https://vk.com/secothon_2018\">SECOTHON'2018 в ВКонтакте</a></p></td></tr></table><p>Если Вы не регистрировались, просим не отвечать на это письмо. <br> Спасибо.</p><p><em>– Команда SECOTHON'2018 </em></p></td></tr></table></td></tr><tr><td class=\"container\"><table><tr><td class=\"content footer\" align=\"center\"><p>Оргазинатор <a href=\"http://secon.ru/\">Ассоциация Secon</a></p><p><a href=\"mailto:secothon@secon.ru\">secothon@secon.ru</a> | <a href=\"http://secothon.secon.ru/\">SECOTHON'2018</a></p></td></tr></table></td></tr></table>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "40");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/backend$1.0.0/view/layout/paidEmail.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
