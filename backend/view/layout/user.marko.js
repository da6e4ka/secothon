// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/layout/user.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  let user = input.user;

  let isReal = (key) => (user[key] && user[key].toString() && !(user[key].toString() in ['""', "''", "{}", "[]", ""]));

  let anySocial = isReal("Facebook") || isReal("Github") || isReal("VKUid") || isReal("otherSocial");

  let avatarLink = isReal("avatar") ? user.avatar : "https://www.gravatar.com/avatar/" + user.emailMd5 + "?s=70&d=monsterid";

  out.w("<div class=\"" +
    marko_escapeXmlAttr(input.class ? input.class : "container") +
    "\" id=\"user._id || user.id || ''\"><div class=\"user-column col-12\"><div class=\"users-pic\"><img class=\"users_pic\" src=\"" +
    marko_escapeXmlAttr(avatarLink) +
    "\" style=\"float: left; margin-right: 20px; border-radius: 50%; width: 80px; height: 80px\" alt=\"\"></div><p class=\"part_users project-autor\">" +
    marko_escapeXml(user.name) +
    " " +
    marko_escapeXml(user.lastname) +
    "<br>");

  if (input.showUserRole) {
    out.w("<span class=\"work\">" +
      marko_escapeXml(input.roles ? input.roles[user.role.toString()] : user.role) +
      "</span>");
  }

  out.w("</p>");

  if (input.showAbout && (isReal("about") || anySocial)) {
    out.w("<div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\"><div class=\"panel panel-default\"><div class=\"panel-heading\" role=\"tab\" id=\"headingOne\"><h4 class=\"panel-title panel-users-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse" +
      marko_escapeXmlAttr(user._id) +
      "UserInfo\" aria-expanded=\"true\" aria-controls=\"collapseOne\">Подробнее</a></h4></div><div id=\"collapse" +
      marko_escapeXmlAttr(user._id) +
      "UserInfo\" class=\"panel-collapse panel-users-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\">");

    if (isReal("about")) {
      out.w("<p class=\"faq-header-list\">О себе:<br><span class=\"users_work\">" +
        marko_escapeXml(user.about) +
        "</span><br></p>");
    }

    if (anySocial) {
      out.w("<p class=\"faq-header-list users-list\">Ссылки на соц. сети:<br><ul class=\"faq-list\">");

      if (isReal("Facebook")) {
        out.w("<li><a href=\"http://facebook.com/" +
          marko_escapeXmlAttr(user.Facebook) +
          "\">Facebook</a></li>");
      }

      if (isReal("Github")) {
        out.w("<li><a href=\"http://github.com/" +
          marko_escapeXmlAttr(user.Github) +
          "\">GitHub</a></li>");
      }

      if (isReal("VKUid")) {
        out.w("<li><a href=\"http://vk.com/id" +
          marko_escapeXmlAttr(user.VKUid) +
          "\">VK</a></li>");
      }

      if (isReal("otherSocial")) {
        out.w("<li><a href=\"http://" +
          marko_escapeXmlAttr(user.otherSocial) +
          "\">" +
          marko_escapeXml(user.otherSocial) +
          "</a></li>");
      }

      out.w("</ul></p>");
    }

    out.w("</div></div></div>");
  }

  out.w("</div></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/backend$1.0.0/view/layout/user.marko"
  };
