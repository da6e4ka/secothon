// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/pages/profile.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    page_template = marko_loadTemplate(require.resolve("../layout/page.marko")),
    role_select_template = marko_loadTemplate(require.resolve("./role_select.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_merge = require("marko/src/runtime/helper-merge"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    marko_escapeXml = marko_helpers.x,
    hasRenderBodyKey = Symbol.for("hasRenderBody");

function render(input, out, __component, component, state) {
  var data = input;

  include_tag({
      _target: page_template,
      _arg: marko_merge({
          body: {
              renderBody: function renderBody(out) {
                if (!input.profile.VKUid) {
                  out.w("<div class=\"for-vk\"><div class=\"container\"><div class=\"mt-3 row justify-content-center vk-row\"><a href=\"" +
                    marko_escapeXmlAttr(input.link) +
                    "\"><img class=\"vk-logo img-fluid\" src=\"/img/auth-vk.png\" alt=\"\"></a></div></div></div>");
                }

                out.w("<form class=\"container\" method=\"post\" action=\"/profile\" enctype=\"multipart/form-data\"><div class=\"form-group\">");

                if (!input.profile.isVerify) {
                  out.w("<label style=\"color: var(--danger)\"> На Вашу почту отправлено письмо для поддтверждения аккаунта </label><br><a href=\"/resend-email\">Отправить повторно</a><br>");
                } else {
                  out.w("<label style=\"color: var(--success)\">Ваш аккаунт подтверждён</label><br>");
                }

                if (!input.profile.paid) {
                  out.w("<label style=\"color: var(--danger)\">Вы не оплатили участие. Сделайте это на <a href=\"/\">Главной странице</a></label>");
                }

                out.w("</div><div class=\"form-group\">");

                if (input.profile.administrator) {
                  out.w("<a href=\"/admin\">Админ-панель</a>");
                }

                if (!input.profile.project) {
                  out.w("<div><div class=\"row text-in-profile\" style=\"\">Желаете добавить свой проект?</div><div class=\"button-add-project mb-5\"><a href=\"http://secothon.secon.ru/project/create\"><button class=\"btn button-project btn-blue\" type=\"button\">Добавить проект</button></a></div></div>");
                } else if (input.project && (input.project.autor.toString() === input.profile._id.toString())) {
                  out.w("<div><div class=\"row text-in-profile\" style=\"\">Редактировать информацию о проекте</div><div class=\"button-update-project mb-5\"><a href=\"/project/update\"><button class=\"btn button-project btn-blue\" type=\"button\">Редактировать проект</button></a></div></div>");
                } else if (input.profile.project) {
                  out.w("<div class=\"row text-in-profile\" style=\"color: var(--success);\">Вы уже состоите в проекте!</div>");
                }

                out.w("</div><div class=\"form-group\"><div class=\"row text-in-profile mb-4\">Редактировать профиль</div><label for=\"name\"> <span> * </span> Имя</label><input name=\"name\" type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Иван\" value=\"" +
                  marko_escapeXmlAttr(input.profile.name) +
                  "\" required spellcheck=\"true\"></div><div class=\"form-group\"><label for=\"surname\"> <span> * </span> Фамилия</label><input name=\"lastname\" type=\"text\" class=\"form-control mb-5\" id=\"surname\" placeholder=\"Иванов\" value=\"" +
                  marko_escapeXmlAttr(input.profile.lastname) +
                  "\" required spellcheck=\"true\"><div class=\"form-group\"><label for=\"image\">Аватар (ограничение по размеру файла: 2Мб)</label><input accept=\"image/jpeg,image/jpg,image/png,image/gif,image/svg,image/x-icon\" type=\"file\" class=\"form-control-file\" id=\"image\" name=\"image\"><label for=\"image\"><i> > Совет: Используйте квадратную картинку. Желательно размером 100x100 px</i></label>");

                if (input.profile.VKUid) {
                  out.w("<br>");
                }

                if (input.profile.VKUid) {
                  out.w("<a href=\"api/set_vk_avatar\">Поставить аватар из ВКонтакте</a>");
                }

                out.w("</div>");

                if (input.profile.avatar) {
                  out.w("<div class=\"form-group\"><label for=\"avatar-now\">Аватар сейчас:</label><img src=\"" +
                    marko_escapeXmlAttr(input.profile.avatar) +
                    "\" id=\"avatar-now\" style=\"width: 100px; height: 100px; border-radius: 50%; margin-left: 10px\"></div>");
                }

                out.w("</div><div class=\"form-group\"><div class=\"logo-link-form\"><a class=\"social-link-form rounded-circle-form text-white\" href=\"https://facebook.com/devpenza/\"><img src=\"img/media/Facebook.svg\"></a></div><label for=\"Facebook\"> Facebook </label><div class=\"input-group\"><div class=\"input-group-prepend\"><span class=\"input-group-text\">https://facebook.com/</span></div><input name=\"Facebook\" type=\"text\" class=\"form-control\" id=\"Facebook\" placeholder=\"Facebook\" value=\"" +
                  marko_escapeXmlAttr(input.profile.Facebook) +
                  "\"></div></div><div class=\"form-group\"><div class=\"logo-link-form\"><a class=\"social-link-form rounded-circle-form text-white\" href=\"https://vk.com/club44400637\"><img src=\"img/media/Github.svg\"></a></div><label for=\"Github\"> Github </label><div class=\"input-group\"><div class=\"input-group-prepend\"><span class=\"input-group-text\">https://github.com/</span></div><input name=\"Github\" type=\"text\" class=\"form-control\" id=\"Github\" placeholder=\"Github\" value=\"" +
                  marko_escapeXmlAttr(input.profile.Github) +
                  "\"></div></div><div class=\"form-group\"><div class=\"logo-link-form\"><a class=\"social-link-form rounded-circle-form text-white\" href=\"https://vk.com/club44400637\"><img src=\"img/media/Other.svg\"></a></div><label for=\"Other\"> Любой свой другой аккаунт </label><div class=\"input-group\"><div class=\"input-group-prepend\"><span class=\"input-group-text\">http://</span></div><input name=\"otherSocial\" type=\"text\" class=\"form-control\" id=\"Other\" placeholder=\"...\"></div></div><div class=\"form_group\"><label for=\"role\"> <span> * </span> Роль в команде</label>");

                if (!input.profile.project) {
                  include_tag({
                      _target: role_select_template,
                      _arg: marko_merge({
                          user: input.profile
                        }, input)
                    }, out, __component, "79");
                } else {
                  out.w("Вы не можете менять роль, пока находитесь в проекте");
                }

                out.w("</div><div class=\"form-area form-group mt-4\"><label for=\"message\">О себе</label><textarea name=\"about\" class=\"form-control\" id=\"message\" rows=\"5\" placeholder=\"Не стесняйтесь рассказать о ваших профессиональных и личных качествах. Именно эту информацию увидят остальные участники мероприятия и будут решать, пригласить ли вас в команду или присоединиться к вашему проекту.\">" +
                  marko_escapeXml(input.profile.about) +
                  "</textarea></div><div class=\"form-group\"><a href=\"/profile/password\">Изменить пароль учётной записи</a></div><div class=\"row row-exit\"><button type=\"submit\" class=\"btn btn-success\">Обновить</button><button type=\"button\" class=\"btn btn-blue\" data-toggle=\"modal\" data-target=\"#exit-account\" style=\"margin-left: auto;\">Выйти из аккаунта</button><button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#delete-account\" style=\"margin-left: auto\">Удалить аккаунт</button></div></form><div class=\"modal\" tabindex=\"1\" role=\"dialog\" id=\"delete-account\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\"><h5 class=\"modal-title\">Удаление аккаунта</h5><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></div><div class=\"modal-body\" style=\"font-size: 20px\"><p>Вы действительно хотите удалить аккаунт? <br> Все ваши данные будут утеряны без возможности восстановления <br> <br> Вы ещё не передумали?</p></div><div class=\"modal-footer\"><a href=\"/api/delete\" class=\"btn btn-danger\">Да, удалить</a><button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\">Я передумал</button></div></div></div></div><div class=\"modal\" tabindex=\"1\" role=\"dialog\" id=\"exit-account\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\"><h5 class=\"modal-title\">Выйти из аккаунта</h5><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></div><div class=\"modal-body\" style=\"font-size: 20px\"><p>Уже уходите?</p></div><div class=\"modal-footer\"><a href=\"/api/exit\" class=\"btn btn-danger\">Выйти</a><button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\">Я передумал</button></div></div></div></div>");
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
    id: "/backend$1.0.0/view/pages/profile.marko",
    tags: [
      "../layout/page.marko",
      "./role_select.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
