// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/layout/page.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    alert_template = marko_loadTemplate(require.resolve("./alert.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"ru\"><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1 maximal-scale=1.0\"><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\"><script src=\"/js/markdown.min.js\" type=\"application/javascript\"></script><link rel=\"icon\" href=\"/favicon.ico\" type=\"image/x-icon\"><link rel=\"shortcut icon\" href=\"/favicon.ico\" type=\"image/x-icon\"><script type=\"application/javascript\" src=\"js/cookie.js\"></script><script type=\"application/javascript\" src=\"js/fix.js\"></script><link rel=\"stylesheet\" href=\"/css/fonts.css\"><link rel=\"stylesheet\" href=\"/css/mainstyle.css\"><link rel=\"stylesheet\" href=\"/css/pagestyle.css\"><link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\" integrity=\"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU\" crossorigin=\"anonymous\"><title>" +
    marko_escapeXml(input.title) +
    "</title><script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script></head><body>");

  component_globals_tag({}, out);

  include_tag({
      _target: alert_template,
      _arg: input
    }, out, __component, "19");

  out.w("<div class=\"screen-sing\"></div><h2 class=\"header-row\">" +
    marko_escapeXml(input.title) +
    " <span style=\"margin:0 10px 0 10px\"><a style=\"color: #afafaf\" href=\"/\">Вернуться на главную</a></span> </h2>");

  include_tag({
      _target: input.body
    }, out, __component, "24");

  out.w("<div class=\"container\"><hr><div class=\"row mb-3\"><a href=\"/\">Вернуться на главную страницу</a></div></div><footer><div class=\"container\"><div class=\"row justify-content-between\"><div class=\"col\"><p><a class=\"copyright\" href=\"https://vk.com/itlab58?w=wall-94462582_744\"> Сделано в IT-Лаборатории`2018</a></p><p><a class=\"copyright\" href=\"mailto:secothon@secon.ru\">secothon@secon.ru</a></p><p class=\"copyright\">Все права защищены.</p></div><div class=\"logo-link-footer\"><ul class=\"list-inline-footer mb-3\"><li class=\"list-inline-item-footer\"><a class=\"social-link-footer rounded-circle-footer text-white\" href=\"https://vk.com/secothon_2018\"><img src=\"img/media/Vk.svg\"></a></li><li class=\"list-inline-item-footer\"><a class=\"social-link-footer rounded-circle-footer text-white\" href=\"https://www.facebook.com/events/1787014618072626/\"><img src=\"img/media/Facebook.svg\"></a></li><li class=\"list-inline-item-footer\"><a class=\"social-link-footer rounded-circle-footer text-white\" href=\"https://t.me/secothon\"><img src=\"img/media/Telegram.svg\"></a></li><li class=\"list-inline-item-footer\"><a class=\"social-link-footer rounded-circle-footer text-white\" href=\"https://twitter.com/secon_ru\"><img src=\"img/media/Twitter.svg\"></a></li><li class=\"list-inline-item-footer\"><a class=\"social-link-footer rounded-circle-footer text-white\" href=\"https://www.instagram.com/secon_ru/\"><img src=\"img/media/Instagram.svg\"></a></li></ul></div></div></div></footer><script>\n    let mdDirList = document.getElementsByClassName(\"markdown\");\n    console.log(\"MD:\", mdDirList);\n    for (let i = 0; i < mdDirList.length; i++) {\n        let d = mdDirList[i];\n        console.log(d);\n        d.innerHTML = markdown.toHTML( d.innerText )\n    }\n</script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "56");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/backend$1.0.0/view/layout/page.marko",
    tags: [
      "./alert.marko",
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/taglibs/core/include-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
