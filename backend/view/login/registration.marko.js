// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/login/registration.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    page_template = marko_loadTemplate(require.resolve("../layout/page.marko")),
    role_select_template = marko_loadTemplate(require.resolve("../pages/role_select.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_merge = require("marko/src/runtime/helper-merge");

function render(input, out, __component, component, state) {
  var data = input;

  include_tag({
      _target: page_template,
      _arg: marko_merge({
          body: {
              renderBody: function renderBody(out) {
                out.w("<div class=\"profile\"><div class=\"for-vk\"><div class=\"container\"><div class=\"mt-3 row justify-content-center vk-row\"><a href=\"" +
                  marko_escapeXmlAttr(input.link) +
                  "\"><img class=\"vk-logo img-fluid\" src=\"/img/auth-vk.png\" alt=\"\"></a></div></div></div><h2 style=\"color: #4c4c4c; font-family: PantonBold; text-align: center; margin: 50px\">Создать свой профиль</h2><div class=\"container\"><div class=\"row justify-content-end\"><p class=\"field number_participant\"><span> * </span>Поля, обязательные для заполнения</p></div></div></div><div><form class=\"container\" action=\"/registration\" method=\"post\"><div class=\"form-group\"><label for=\"name\"> <span> * </span> Имя</label><input required name=\"name\" type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Иван\"></div><div class=\"form-group\"><label for=\"surname\"> <span> * </span> Фамилия</label><input required name=\"lastname\" type=\"text\" class=\"form-control\" id=\"surname\" placeholder=\"Иванов\"></div><div class=\"form-group\"><label for=\"email\"> <span> * </span> E-mail</label><input name=\"email\" required type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"adress@example.com\"></div><div class=\"form-group\"><div class=\"logo-link-form\"><a class=\"social-link-form rounded-circle-form text-white\" href=\"https://www.facebook.com/events/1787014618072626/\"><img src=\"img/media/Facebook.svg\"></a></div><label for=\"Facebook\"> Facebook </label><div class=\"input-group\"><div class=\"input-group-prepend\"><span class=\"input-group-text\">https://facebook.com/</span></div><input name=\"Facebook\" type=\"text\" class=\"form-control\" id=\"Facebook\" placeholder=\"Facebook\"></div></div><div class=\"form-group\"><div class=\"logo-link-form\"><a class=\"social-link-form rounded-circle-form text-white\" href=\"\"><img src=\"img/media/Github.svg\"></a></div><label for=\"Github\"> Github </label><div class=\"input-group\"><div class=\"input-group-prepend\"><span class=\"input-group-text\">https://github.com/</span></div><input name=\"Github\" type=\"text\" class=\"form-control\" id=\"Github\" placeholder=\"Github\"></div></div><div class=\"form-group\"><div class=\"logo-link-form\"><a class=\"social-link-form rounded-circle-form text-white\" href=\"\"><img src=\"img/media/Other.svg\"></a></div><label for=\"Other\"> Любой свой другой аккаунт </label><div class=\"input-group\"><div class=\"input-group-prepend\"><span class=\"input-group-text\">http://</span></div><input name=\"otherSocial\" type=\"text\" class=\"form-control\" id=\"Other\" placeholder=\"...\"></div></div><div class=\"form_group\"><label for=\"role\">Роль в команде</label>");

                include_tag({
                    _target: role_select_template,
                    _arg: input
                  }, out, __component, "56");

                out.w("</div><div class=\"form-area form-group mt-4\"><label for=\"message\">О себе</label><textarea name=\"about\" class=\"form-control\" id=\"message\" rows=\"5\" placeholder=\"Не стесняйтесь рассказать о ваших профессиональных и личных качествах. Именно эту информацию увидят остальные участники мероприятия и будут решать, пригласить ли вас в команду или присоединиться к вашему проекту.\"></textarea></div><div class=\"form-group\"><label for=\"password\">Пароль</label><input name=\"password\" required type=\"password\" class=\"form-control\" id=\"password\" minlength=\"8\" placeholder=\"Не менее 8 символов\"></div><div class=\"form-group\"><label for=\"repeat_password\">Подтвердите пароль</label><input name=\"password2\" required type=\"password\" minlength=\"8\" class=\"form-control\" id=\"repeat_password\"></div><button type=\"submit\" class=\"mb-5 btn btn-primary\">Сохранить</button></form></div>");
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
    id: "/backend$1.0.0/view/login/registration.marko",
    tags: [
      "../layout/page.marko",
      "../pages/role_select.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
