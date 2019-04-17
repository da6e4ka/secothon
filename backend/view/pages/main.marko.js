// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/pages/main.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    alert_template = marko_loadTemplate(require.resolve("../layout/alert.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_escapeScript = marko_helpers.xs,
    marko_str = marko_helpers.s,
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    marko_attrs = marko_helpers.as,
    marko_forEach = marko_helpers.f,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"ru\" prefix=\"og: //ogp.me/ns#\"><head><title>" +
    marko_escapeXml(input.meta.title) +
    "</title><meta name=\"description\" content=\"" +
    marko_escapeXmlAttr(input.meta.description) +
    "\"><meta name=\"keywords\" content=\"" +
    marko_escapeXmlAttr(input.meta.keywords) +
    "\"><meta name=\"yandex-verification\" content=\"27cb558f9673b481\"><meta name=\"robots\" content=\"all\"><meta name=\"yandex\" content=\"all\"><meta name=\"google\" content=\"all\"><meta name=\"googlebot\" content=\"all\"><meta name=\"slurp\" content=\"all\"><meta name=\"bingbot\" content=\"all\"><link rel=\"icon\" href=\"/favicon.ico\" type=\"image/x-icon\"><link rel=\"shortcut icon\" href=\"/favicon.ico\" type=\"image/x-icon\"><meta property=\"og:title\" content=\"" +
    marko_escapeXmlAttr(input.meta.title) +
    "\"><meta property=\"og:type\" content=\"website\"><meta property=\"og:url\" content=\"http://secothon.secon.ru\"><meta property=\"og:image\" content=\"http://secothon.secon.ru/img/LOGO.png\"><meta property=\"vk:image\" content=\"http://secothon.secon.ru/favicon.png\"><meta property=\"og:locale\" content=\"ru_RU\"><link rel=\"yandex-tableau-widget\" href=\"table/manifest.json\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\" integrity=\"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU\" crossorigin=\"anonymous\">");

  let timer = input.timer

  out.w("<script>\n        // НАСТРОЙКИ ТАЙМЕРА\n        // ВРЕМЯ НАЧАЛА ХАКАТОНА\n        const startYear    = " +
    marko_escapeScript(+timer.startYear) +
    ",  // ГОД\n              startMonth   = " +
    marko_escapeScript(+timer.startMonth) +
    ",  // МЕСЯЦ\n              startDay     = " +
    marko_escapeScript(+timer.startDay) +
    ",  // ДЕНЬ\n              startHour    = " +
    marko_escapeScript(+timer.startHour) +
    ",  // ЧАС\n              startMinutes = " +
    marko_escapeScript(+timer.startMinutes) +
    ",  // МИНУТА\n              startSeconds = 0;   // СЕКУНДА\n\n        // ВРЕМЯ КОНЦА ХАКАТОНА\n        const endYear    = " +
    marko_escapeScript(+timer.endYear) +
    ",  // ГОД\n              endMonth   = " +
    marko_escapeScript(+timer.endMonth) +
    ",  // МЕСЯЦ\n              endDay     = " +
    marko_escapeScript(+timer.endDay) +
    ",  // ДЕНЬ\n              endHour    = " +
    marko_escapeScript(+timer.endHour) +
    ",  // ЧАС\n              endMinutes = " +
    marko_escapeScript(+timer.endMinutes) +
    ",  // МИНУТА\n              endSeconds = 0;   // СЕКУНДА\n\n\n        // СООБЩЕНИЯ\n        const notStartMessage = \"" +
    marko_escapeScript(timer.notStartMessage) +
    "\",\n              startMessage    = \"" +
    marko_escapeScript(timer.startMessage) +
    "\",\n              endMessage      = \"" +
    marko_escapeScript(timer.endMessage) +
    "\";\n    </script><script src=\"js/timer.js\" type=\"application/javascript\"></script><script type=\"text/javascript\" src=\"https://code.jquery.com/jquery-1.11.0.min.js\"></script><script type=\"text/javascript\" src=\"https://code.jquery.com/jquery-migrate-1.2.1.min.js\"></script><script type=\"application/javascript\" src=\"js/counter.js\"></script><script type=\"application/javascript\" src=\"js/cookie.js\"></script><script type=\"application/javascript\" src=\"js/fix.js\"></script><link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"/css/slick-theme.css\"><script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js\"></script><script type=\"application/javascript\" src=\"js/carousel.js\"></script><link rel=\"stylesheet\" href=\"/css/fonts.css\"><link rel=\"stylesheet\" href=\"/css/style.css\"><link rel=\"stylesheet\" href=\"/css/mainstyle.css\">" +
    marko_str(input.meta.yandex) +
    marko_str(input.meta.google) +
    "</head><body class=\"home_page\" onLoad=\"startTimer(); initCounters();\">");

  component_globals_tag({}, out);

  include_tag({
      _target: alert_template,
      _arg: input
    }, out, __component, "40");

  out.w("<div class=\"cover\"><div class=\"plex\"><div id=\"particles-js\"></div></div><div class=\"header\"><nav class=\"navbar navbar-dark navbar-expand-lg\"><div class=\"col-md\"><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main_nav\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button></div><div class=\"col-md-13 nav_link \"><div class=\"collapse navbar-collapse \" id=\"main_nav\"><ul class=\" navbar-nav \">");

  if (input.program.length) {
    out.w("<li class=\"nav-item\"><a class=\"nav-link\" href=\"#program\">ПРОГРАММА</a></li>");
  }

  out.w("<li class=\"nav-item\"><a class=\"nav-link\" href=\"/about\">О ХАКАТОНЕ</a></li>");

  if (input.nomination.length) {
    out.w("<li class=\"nav-item\"><a class=\"nav-link\" href=\"#nomination\">НОМИНАЦИИ</a></li>");
  }

  if (input.mentors.length) {
    out.w("<li class=\"nav-item\"><a class=\"nav-link\" href=\"#org\">МЕНТОРЫ</a></li>");
  }

  if (input.partner.length) {
    out.w("<li class=\"nav-item\"><a class=\"nav-link\" href=\"#org part\">ПАРТНЁРЫ</a></li>");
  }

  out.w("<li class=\"nav-item\"><a class=\"nav-link\" href=\"#faq\">FAQ</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"#contacts\">КОНТАКТЫ</a></li><li class=\"nav-item\">");

  if (input.currentUser) {
    out.w("<a class=\"nav-link sing-up\" href=\"/profile\">ПРОФИЛЬ</a>");
  } else {
    out.w("<a class=\"nav-link sing-up\" href=\"/login\">ВОЙТИ</a>");
  }

  out.w("</li></ul></div></div></nav></div><div class=\"container main_screen_text\"><div class=\"row\"><div class=\"col-md\"><img class=\"main_screen_logo\" src=\"/img/LOGO.png\" alt=\"\"><div class=\"timer\"><div class=\"timer-header\" id=\"timer-header\"></div><div class=\"timer-block\" id=\"timer-block\"><div class=\"time-block days\"><div class=\"numbers\" id=\"number-days\"></div><div class=\"sub\" id=\"string-days\"></div></div><div class=\"time-block hours\"><div class=\"numbers\" id=\"number-hours\"></div><div class=\"sub\" id=\"string-hours\"></div></div><div class=\"time-block minutes\"><div class=\"numbers\" id=\"number-minutes\"></div><div class=\"sub\" id=\"string-minutes\"></div></div><div class=\"time-block second\"><div class=\"numbers\" id=\"number-seconds\"></div><div class=\"sub\" id=\"string-seconds\"></div></div></div></div><h3 class=\"text-white\">19-21 октября 2018 года</h3><div class=\"logo-link\"><ul class=\"list-inline\"><li class=\"list-inline-item\"><a class=\"social-link rounded-circle text-white\" href=\"https://vk.com/event170681489\"><img src=\"img/media/Vk.svg\"></a></li><li class=\"list-inline-item\"><a class=\"social-link rounded-circle text-white\" href=\"https://www.facebook.com/events/1787014618072626/\"><img src=\"img/media/Facebook.svg\"></a></li><li class=\"list-inline-item\"><a class=\"social-link rounded-circle text-white\" href=\"https://t.me/joinchat/BKQgDw3CKTja-2CTwThW8g\"><img src=\"img/media/Telegram.svg\"></a></li><li class=\"list-inline-item\"><a class=\"social-link rounded-circle text-white\" href=\"https://twitter.com/secon_ru\"><img src=\"img/media/Twitter.svg\"></a></li><li class=\"list-inline-item\"><a class=\"social-link rounded-circle text-white\" href=\"https://www.instagram.com/secon_ru/\"><img src=\"img/media/Instagram.svg\"></a></li></ul></div></div></div></div></div><section class=\"grid portfolio-section\"><div class=\"portfolio-item grid\">");

  let paid = input.currentUser && input.currentUser.paid

  out.w("<div class=\"reg-button grid\"" +
    marko_attrs(paid ? "style=\"display: inline-block\"" : "") +
    "><div class=\"reg-button-item grid\">");

  if (input.currentUser) {
    out.w("<a href=\"/profile\"><button type=\"button\" class=\"btn pay-button btn-blue\">Профиль</button></a>");
  } else {
    out.w("<a href=\"/registration\"><button type=\"button\" class=\"btn pay-button btn-blue\">Регистрация</button></a>");
  }

  out.w("</div>");

  if (!paid) {
    out.w("<div class=\"reg-button-item grid\"><a href=\"#\"><button type=\"button\" class=\"btn pay-button btn-blue\" data-toggle=\"modal\" data-target=\".bd-example-modal-md\">Оплатить</button></a></div>");
  }

  out.w("</div></div><a class=\"portfolio-item grid\" id=\"about\" href=\"/about\"><div class=\"stat-btn-block stat-link\"><span>О ХАКАТОНЕ</span></div></a><a class=\"portfolio-item grid\" href=\"/projects\"><div class=\"stat-btn-block stat-link\"><span>Проекты</span></div><div id=\"project-counter\" class=\"stat-item m-5\" style=\"color: #fff\"></div></a><a class=\"portfolio-item grid\" href=\"/users\"><div class=\"stat-btn-block stat-link\"><span>Участники</span></div><div id=\"user-counter\" class=\"stat-item m-5\" style=\"color: #fff\"></div></a></section>");

  if (input.program.length) {
    out.w("<section class=\"program\" id=\"program\"><h2 class=\"section_header\">Программа</h2><div class=\"program-block \"><div class=\"program-item \"><h3 class=\"prog-data\">4 октября, четверг</h3><table><tbody><tr><td class=\"time-prog\">18:30 - 21:00</td><td style=\"font-weight: bold\">Предстартовая встреча в Пензе</td></tr><tr><td class=\"time-prog\"></td><td class=\"prog-description\" style=\"line-height: 40px;\">Предстартовая встреча SECOTHON’2018 – открытое бесплатное мероприятие, на котором встретятся все те, кто планирует принять участие в SECOTHON’2018 и те, у кого есть вопросы о хакатоне. К участию приглашаются программисты, дизайнеры, проектировщики, менеджеры, руководители проектов, маркетологи, учёные, преподаватели и студенты, а также все те, кто не боится трудностей и готов за 48 часов запустить свой ИТ-проект.</td></tr></tbody></table></div><div class=\"program-item \"><h3 class=\"prog-data\">19 октября, пятница </h3><table><tbody><tr><td class=\"time-prog\">18:30 - 19:00</td><td class=\"prog-description\">Регистрация участников</td></tr><tr><td class=\"time-prog\">19:00 - 19:15</td><td class=\"prog-description\">Официальное открытие и представление идей</td></tr><tr><td class=\"time-prog\">19:15 - 20:00</td><td class=\"prog-description\">Питчи идей (по 90 секунд на идею)</td></tr><tr><td class=\"time-prog\">20:00 - 21:00</td><td class=\"prog-description\">Формирование команд</td></tr><tr><td class=\"time-prog\">21:00 - 21:30</td><td class=\"prog-description\">Ужин</td></tr><tr><td class=\"time-prog\">22:00 - 22:20</td><td class=\"prog-description\">Чекпойнт</td></tr><tr><td class=\"time-prog\"></td><td class=\"list-text is-color\" style=\"color: rgba(56,45,146,0.98);\">Работать на площадке можно до самого утра</td></tr></tbody></table></div><div class=\"program-item \"><h3 class=\"prog-data\">20 октября, суббота </h3><table><tbody><tr><td class=\"time-prog\">09:00 - 10:00</td><td class=\"prog-description\">Завтрак</td></tr><tr><td class=\"time-prog\">11:30 - 13:00</td><td class=\"prog-description\">Образовательная программа</td></tr><tr><td class=\"time-prog\">13:00 - 14:00</td><td class=\"prog-description\">Обед</td></tr><tr><td class=\"time-prog\">16:30 - 19:00</td><td class=\"prog-description\">Консультация с менторами</td></tr><tr><td class=\"time-prog\">19:00 - 20:00</td><td class=\"prog-description\">Ужин</td></tr><tr><td class=\"time-prog\">20:00 - 20:20</td><td class=\"prog-description\">Чекпойнт</td></tr><tr><td class=\"time-prog\"></td><td class=\"list-text is-color\" style=\"color: rgba(56,45,146,0.98);\">Работать на площадке можно до самого утра</td></tr></tbody></table></div><div class=\"program-item \"><h3 class=\"prog-data\">21 октября, воскресенье</h3><table><tbody><tr><td class=\"time-prog\">09:00 - 10:00</td><td class=\"prog-description\">Завтрак</td></tr><tr><td class=\"time-prog\">10:00 - 10:20</td><td class=\"prog-description\">Чекпойнт</td></tr><tr><td class=\"time-prog\">10:30 - 12:00</td><td class=\"prog-description\">Консультация с менторами</td></tr><tr><td class=\"time-prog\">13:00 - 14:00</td><td class=\"prog-description\">Обед</td></tr><tr><td class=\"time-prog\">14:45 - 17:00</td><td class=\"prog-description in-sub\">Подготовка питчей для демофеста <br><span class=\"prog-sub\">(мероприятие только для руководителей проектов.)</span></td></tr><tr><td class=\"time-prog\">17:30 - 20:00</td><td style=\"margin: 15px 0;\" class=\"prog-description in-sub\">Демофест<br><span class=\"prog-sub\">Презентация прототипов продуктов/сервисов (мероприятие открытое для всех желающих)</span></td></tr></tbody></table></div></div></section>");
  }

  if (input.nomination.length) {
    out.w("<section class=\"nomination\" id=\"nomination\"><h2 class=\"section_header\">Номинации</h2><div id=\"carousel\" class=\"carousel\">");

    var for__220 = 0;

    marko_forEach(input.nomination, function(nomination) {
      var keyscope__221 = "[" + ((for__220++) + "]");

      out.w("<div class=\"nomination-item\"><a href=\"/nomination#" +
        marko_escapeXmlAttr(nomination.name) +
        "\" class=\"more-link\"><img src=\"" +
        marko_escapeXmlAttr(nomination.picture) +
        "\" alt=\"\"></a><p>" +
        marko_escapeXml(nomination.name) +
        "</p></div>");
    });

    out.w("</div><div class=\"link-block \"><a href=\"/nomination\" class=\"more-link\">Узнать подробнее</a></div></section>");
  }

  if (input.mentors.length) {
    out.w("<section id=\"org\"><a href=\"/mentors\"><h2 class=\"section_header\">Менторы</h2></a><div id=\"carousel\" class=\"carousel\">");

    var for__232 = 0;

    marko_forEach(input.mentors, function(mentor) {
      var keyscope__233 = "[" + ((for__232++) + "]");

      out.w("<div class=\"carousel-element\"><div class=\"nomination-item\"><a href=\"/mentors#" +
        marko_escapeXmlAttr(mentor._id) +
        "\" class=\"mentor-link\"><img src=\"" +
        marko_escapeXmlAttr(mentor.picture) +
        "\" class=\"users_pic\" alt=\"\"><p class=\"mentor-work\" style=\"  margin: 0;\"><p style=\"padding: 0; margin: 0; font-size: 1.5rem;\">" +
        marko_escapeXml(mentor.name) +
        "</p>");

      if (mentor.company) {
        out.w("<p style=\"padding: 0; margin: 0; font-size: 16px; color: #414aaf\">" +
          marko_escapeXml(mentor.company) +
          "</p>");
      }

      out.w("<p style=\"padding: 0; margin: 0; font-size: 16px; color: #494949\">" +
        marko_escapeXml(mentor.job) +
        "</p></p></a></div><div class=\"flex row justify-content-center\">");

      if (mentor.vk) {
        out.w("<a class=\"social-link-mentor rounded-circle-mentor\" href=\"https://vk.com/" +
          marko_escapeXmlAttr(mentor.vk) +
          "\"><img src=\"/img/media/Vk.svg\" alt=\"\"></a>");
      }

      if (mentor.fb) {
        out.w("<a class=\"social-link-mentor rounded-circle-mentor\" href=\"https://facebook.com/" +
          marko_escapeXmlAttr(mentor.fb) +
          "\"><img src=\"/img/media/Facebook.svg\" alt=\"\"></a>");
      }

      out.w("</div></div>");
    });

    out.w("</div><div class=\"link-block \"><a href=\"/mentors\" class=\"more-link\">Узнать подробнее</a></div></section>");
  }

  if (input.partner.length) {
    out.w("<section id=\"org part\"><a href=\"/partners\"><h2 class=\"section_header\">Спонсоры и партнёры</h2></a><div class=\"container wrapper-org\">");

    var for__253 = 0;

    marko_forEach(input.partner, function(data) {
      var keyscope__254 = "[" + ((for__253++) + "]");

      out.w("<a href=\"/partners#" +
        marko_escapeXmlAttr(data.type) +
        "\" class=\"row partner-header\">" +
        marko_escapeXml(data.type) +
        ":</a><div class=\"row partner-block-logo mb-3 justify-content-center\">");

      var for__257 = 0;

      marko_forEach(data.array, function(partner) {
        var keyscope__258 = "[" + (((for__257++) + keyscope__254) + "]");

        out.w("<div class=\"col-md-3 col-sm-12 org-img-block\"><a href=\"/partners#" +
          marko_escapeXmlAttr(partner.link) +
          "\"><img src=\"" +
          marko_escapeXmlAttr(partner.picture) +
          "\" alt=\"\" class=\"logo-org\" title=\"" +
          marko_escapeXmlAttr(partner.name) +
          "\"></a></div>");
      });

      out.w("</div>");
    });

    out.w("</div><div class=\"link-block \"><a href=\"/partners\" class=\"more-link\">Узнать подробнее</a></div></section>");
  }

  if (input.support.length) {
    out.w("<section id=\"media\"><h2 class=\"section_header\">При информационной поддержке</h2><div class=\"container info-support\"><div class=\"row justify-content-center info-row\">");

    var for__268 = 0;

    marko_forEach(input.support, function(support) {
      var keyscope__269 = "[" + ((for__268++) + "]");

      out.w("<div class=\"info-box col-md-3 col-sm-6 mb-2\"><a href=\"http://" +
        marko_escapeXmlAttr(support.link) +
        "\"><img class=\"info-img\" src=\"" +
        marko_escapeXmlAttr(support.picture) +
        "\" alt=\"\" title=\"" +
        marko_escapeXmlAttr(support.name) +
        "\"></a></div>");
    });

    out.w("</div></div></section>");
  }

  out.w("<section id=\"faq\"><h2 class=\"section_header\">FAQ</h2><div class=\"container faq-container\"><div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\"><div class=\"panel panel-default\"><div class=\"panel-heading\" role=\"tab\" id=\"heading_1\"><h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse_1\" aria-expanded=\"true\" aria-controls=\"collapse_1\">Что такое Хакатон?</a></h4></div><div id=\"collapse_1\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"heading_1\">Хакатон – мероприятиe, на котором участники из самых разных областей объединяются и разрабатывают свои проекты от идеи до прототипа за 48 часов. Вы можете прийти с уже готовой идеей, на реализацию которой у вас никак не находилось времени. Можно собрать команду непосредственно на SECOTHON’2018.</div></div><div class=\"panel panel-default\"><div class=\"panel-heading\" role=\"tab\" id=\"heading_2\"><h4 class=\"panel-title\"><a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse_2\" aria-expanded=\"false\" aria-controls=\"collapse_2\">Кто может принимать участие в Хакатоне?</a></h4></div><div id=\"collapse_2\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading_2\">Программисты (веб- и прикладники), мейкеры, инженеры, дизайнеры, проектировщики, менеджеры, руководители проектов, маркетологи, учёные, предприниматели, преподаватели и студенты, а также все те, кто не боится трудностей и готов за 48 часов сделать что-нибудь действительно стоящее и все те, кто горит желанием создать прототип своего проекта за 48 часов.</div></div><div class=\"panel panel-default\"><div class=\"panel-heading\" role=\"tab\" id=\"heading_3\"><h4 class=\"panel-title\"><a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse_3\" aria-expanded=\"false\" aria-controls=\"collapse_3\">Что необходимо принести с собой?</a></h4></div><div id=\"collapse_3\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading_3\"><span class=\"faq-header-list\">Инструменты, оборудование, материалы:</span><ul class=\"faq-list\"><li>Ноутбук и зарядное устройство к нему</li><li>Расходные материалы, которые могут понадобиться, если у вас не “чистый IT” проект</li><li>Инструменты, справочники</li></ul> Мероприятие предполагает, что каждый сам принесет все, что ему будет необходимо для работы, но вы можете скоординироваться с другими участниками <br> <br><span class=\"faq-header-list\">Личные нужды:</span><ul class=\"faq-list\"><li>Все участники будут обеспечены питанием (начиная с ужина в пятницу и заканчивая обедом в воскресенье)</li><li>Если вы планируете ночевать на площадке, возьмите с собой спальный мешок или надувной матрас, а также гигиенические принадлежности (например, зубную щетку)</li></ul></div></div><div class=\"panel panel-default\"><div class=\"panel-heading\" role=\"tab\" id=\"heading_4\"><h4 class=\"panel-title\"><a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse_4\" aria-expanded=\"false\" aria-controls=\"collapse_4\">Обязательно работать в командах?</a></h4></div><div id=\"collapse_4\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading_4\">Нет, но поверьте, команда всегда способна создать куда больше. Стоит задуматься, если к вашему проекту никто не присоединился, и погуглить. Вполне возможно, эту идею уже не раз реализовали до вас. В этом случае, вам стоит присмотреться к другим идеям и внести свой вклад в разработку или проработку «непрограммной части» проекта. Мы не ограничиваем количество людей в командах. Хоть 50 человек. Главное – чтобы все были на площадке и занимались непосредственно проектом. Команды можно формировать до начала SECOTHON’2018 после питчей идей.</div></div><div class=\"panel panel-default\"><div class=\"panel-heading\" role=\"tab\" id=\"heading_5\"><h4 class=\"panel-title\"><a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse_5\" aria-expanded=\"false\" aria-controls=\"collapse_5\">Обязательно быть программистом, чтобы участвовать в SECOTHON’2018?</a></h4></div><div id=\"collapse_5\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading_5\">Совсем нет. Каждому проекту требуются адекватные люди, которые смогут взглянуть на него глазами пользователей. А если вы ещё и представляете, чем конкретно можете помочь – добро пожаловать.</div></div><div class=\"panel panel-default\"><div class=\"panel-heading\" role=\"tab\" id=\"heading_6\"><h4 class=\"panel-title\"><a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse_6\" aria-expanded=\"false\" aria-controls=\"collapse_6\">Мероприятие идет 48 часов. Где я могу переночевать?</a></h4></div><div id=\"collapse_6\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading_6\">Да, действительно, SECOTHON’2018 – 48 часовой марафон. Вы можете ночевать на площадке или забронировать хостел рядом. Сообщите нам, если нужна помощь в поиске и бронировании хостела. К сожалению, мы будем вынуждены отказать в ночевке на площадке, если участнику меньше 18-ти лет.</div></div><div class=\"panel panel-default\"><div class=\"panel-heading\" role=\"tab\" id=\"heading_7\"><h4 class=\"panel-title\"><a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse_7\" aria-expanded=\"false\" aria-controls=\"collapse_7\">Как заявить идею на мероприятие?</a></h4></div><div id=\"collapse_7\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading_7\">Все просто: достаточно зарегистрироваться, оплатить участие, найти вкладку «проекты» и добавить описание. Ну и читайте подсказки. Они везде есть.</div></div><div class=\"panel panel-default\"><div class=\"panel-heading\" role=\"tab\" id=\"heading_8\"><h4 class=\"panel-title\"><a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse_8\" aria-expanded=\"false\" aria-controls=\"collapse_8\">А как мне присоединиться к понравившемуся проекту?</a></h4></div><div id=\"collapse_8\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading_8\">Для того, чтобы присоединиться к проекту, достаточно зарегистрироваться, оплатить участие или написать мотивационное письмо и нажать на кнопку «присоединиться к проекту» или «join», после этого вы сможете увидеть e-mail руководителя проекта и связаться с ним даже до мероприятия. Также вы можете присоединиться к проекту прямо после питчей идей в пятницу вечером. Для этого достаточно выслушать все питчи и выбрать проект, над которым вы действительно хотели бы работать. Именно командообразованию и будет посвящена пятница, а сама работа чаще начинается в субботу.</div></div><div class=\"panel panel-default\"><div class=\"panel-heading\" role=\"tab\" id=\"heading_9\"><h4 class=\"panel-title\"><a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse_9\" aria-expanded=\"false\" aria-controls=\"collapse_9\">Что будет с моим проектом после SECOTHON’2018?</a></h4></div><div id=\"collapse_9\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading_9\">Прототип проекта, созданный на SECOTHON’2018, является собственностью команды, разработавшей его. Во время мероприятия вы сможете получить фидбек и консультации от наших менторов, которые будут присутствовать на площадке. Дальнейшая судьба проекта находится целиком в ваших руках. Вы можете продолжить работу и быть уверенными в том, что мы со своей стороны окажем всяческую поддержку.</div></div><div class=\"panel panel-default\"><div class=\"panel-heading\" role=\"tab\" id=\"heading_10\"><h4 class=\"panel-title\"><a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse_10\" aria-expanded=\"false\" aria-controls=\"collapse_10\">Я не нашел ответа на свой вопрос. Что делать?</a></h4></div><div id=\"collapse_10\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading_10\">Выше нос! Напишите письмо на <a href=\"mailto:secothon@secon.ru\">secothon@secon.ru</a> и мы ответим.</div></div><div class=\"panel panel-default\"><div class=\"panel-heading\" role=\"tab\" id=\"heading_11\"><h4 class=\"panel-title\"><a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse_11\" aria-expanded=\"false\" aria-controls=\"collapse_11\">Какие инструменты можно использовать?</a></h4></div><div id=\"collapse_11\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading_11\">Мы не хотим заставлять вас использовать только определенные инструменты, фреймворки, библиотеки. Решение полностью за вами. Единственное правило – <span style=\"font-family: GeometriaBold, serif\">никакого кода до начала SECOTHON’2018!</span></div></div></div></div></section><section id=\"contacts\" class=\"contacts_container\"><div class=\"row justify-content-center\"><h3 class=\"text-white\">Контакты</h3></div><div class=\"container\"><div class=\"row justify-content-center \"><div class=\"rounded  col-md-4 col-lg-3 col-sm-12 contacts-block\"><div class=\"row \"><div class=\"col contact_img_block\"><img class=\"contact_img\" src=\"/img/icon/placeholder.svg\" alt=\"\"></div></div><div class=\"row\"><div class=\"col  contact_text_faq\">ГДЕ?</div></div><hr><div class=\"row\"><div class=\"col contact_text\"><a class=\"footer-link\" href=\"https://yandex.ru/maps/49/penza/?ll=44.993334%2C53.219090&amp;z=17&amp;mode=search&amp;ol=biz&amp;oid=10989129560\" target=\"_blank\">г. Пенза, Роллердром «Олимпийский», <br> улица Гагарина, 6к1</a></div></div></div><div class=\"rounded  col-md-4 col-lg-3 col-sm-12 contacts-block\"><div class=\"row \"><div class=\" col contact_img_block\"><img class=\"contact_img\" src=\"/img/icon/success.svg\" alt=\"\"></div></div><div class=\"row\"><div class=\"col  contact_text_faq\">КОГДА?</div></div><hr><div class=\"row\"><div class=\"col contact_text\">19-21 октября 2018 года</div></div></div><div class=\"rounded  col-md-4 col-lg-3 col-sm-12 contacts-block\"><div class=\"row \"><div class=\"col contact_img_block\"><img class=\"contact_img\" src=\"/img/icon/question.svg\" alt=\"\"></div></div><div class=\"row\"><div class=\"col  contact_text_faq\">ВОПРОСЫ?</div></div><hr><div class=\"row\"><div class=\"col contact_text\">Если у вас остались вопросы – пишите нам: <br><a class=\"secon-link\" href=\"mailto:secothon@secon.ru\">secothon@secon.ru</a></div></div></div></div></div>");

  if ((!input.currentUser) || (!input.currentUser.paid)) {
    out.w("<div class=\"row\"><div class=\"col-12 button-description\">Оплатите участие, чтобы добавить идею или присоединиться к команде</div><div class=\"col-12 mb-5 button-block\"><a href=\"#\"><button type=\"button\" class=\"btn pay-button btn-blue\" data-toggle=\"modal\" data-target=\".bd-example-modal-md\">Оплатить</button></a></div></div>");
  }

  out.w("</section><footer><div class=\"container\"><div class=\"row justify-content-between\"><div class=\"col\"><p><a class=\"copyright\" href=\"https://vk.com/itlab58?w=wall-94462582_744\"> Сделано в IT-Лаборатории`2018</a></p><p><a class=\"copyright\" href=\"mailto:secothon@secon.ru\">secothon@secon.ru</a></p><p class=\"copyright\">Все права защищены.</p></div><div class=\"logo-link-footer\"><ul class=\"list-inline-footer mb-3\"><li class=\"list-inline-item-footer\"><a class=\"social-link-footer rounded-circle-footer text-white\" href=\"https://vk.com/event170681489\"><img src=\"img/media/Vk.svg\"></a></li><li class=\"list-inline-item-footer\"><a class=\"social-link-footer rounded-circle-footer text-white\" href=\"https://www.facebook.com/events/1787014618072626/\"><img src=\"img/media/Facebook.svg\"></a></li><li class=\"list-inline-item-footer\"><a class=\"social-link-footer rounded-circle-footer text-white\" href=\"https://t.me/joinchat/BKQgDw3CKTja-2CTwThW8g\"><img src=\"img/media/Telegram.svg\"></a></li><li class=\"list-inline-item-footer\"><a class=\"social-link-footer rounded-circle-footer text-white\" href=\"https://twitter.com/secon_ru\"><img src=\"img/media/Twitter.svg\"></a></li><li class=\"list-inline-item-footer\"><a class=\"social-link-footer rounded-circle-footer text-white\" href=\"https://www.instagram.com/secon_ru/\"><img src=\"img/media/Instagram.svg\"></a></li></ul></div></div></div></footer><div class=\"modal fade bd-example-modal-md\" tabindex=\"1\" role=\"dialog\" aria-labelledby=\"pay-label\" aria-hidden=\"true\"><div class=\"modal-dialog modal-md\"><div class=\"modal-content\"><div class=\"modal-header\"><h5 class=\"modal-title\">Купить билет на <strong>SECOTHON’2018</strong></h5><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></div><button class=\"special_pay\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapse_pay\" aria-expanded=\"false\" aria-controls=\"collapse_pay\">Как купить школьный/студенческий билет?</button><div class=\"collapse\" id=\"collapse_pay\"><div class=\"card card-body\"><ol class=\"school-tickets-list\"><li class=\"school-tikets\">Написать на почту <a href=\"mailto:secothon@secon.ru\">secothon@secon.ru</a> письмо с темой \"Промо-код на SECOTHON\"</li><li class=\"school-tikets\"><em>“Здравствуйте. Хочу получить билет на SECOTHON’2018”.</em> В письме указать: <ul class=\"conditions-list\"><li class=\"conditions\">Фамилию и имя</li><li class=\"conditions\">Контактный email</li><li class=\"conditions\">Место учебы (ВУЗ, ССУЗ, школа)</li><li class=\"conditions\">Город проживания</li></ul> Приложить к письму фотографию (скан) студенческого билета или первой страницы зачетной книжки. <br>Школьникам достаточно прислать страницу паспорта с датой рождения.</li><li class=\"school-tikets\">Ждать ответа от модератора.</li><li class=\"school-tikets\">Если Вы действительно являетесь студентом или школьником, мы пришлем промо-код для регистрации в течение нескольких рабочих дней. Чтобы зарегистрироваться по промо-коду, введите его в специальное поле и нажмите «проверить». Система откроет дополнительное поле «билет для студентов и школьников»</li><li class=\"school-tikets\">Следуйте инструкциям и завершите регистрацию, указав персональные данные.</li></ol></div></div><a href=\"https://secon-events.timepad.ru/event/922813/\" data-twf-placeholder=\"yes\">Перейти к заказу билетов</a><script type=\"text/javascript\" async=\"async\" defer=\"defer\" charset=\"UTF-8\" src=\"https://timepad.ru/js/tpwf/loader/min/loader.js\" data-timepad-customized=\"7770\" data-twf2s-event--id=\"922813\" data-timepad-widget-v2=\"event_register\"></script></div></div></div><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script><script src=\"/js/particles.js\"></script><script src=\"/js/app.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "442");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/backend$1.0.0/view/pages/main.marko",
    tags: [
      "../layout/alert.marko",
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/taglibs/core/include-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
