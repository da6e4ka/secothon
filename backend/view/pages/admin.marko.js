// Compiled using marko@4.12.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/backend$1.0.0/view/pages/admin.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    alert_template = marko_loadTemplate(require.resolve("../layout/alert.marko")),
    control_panel_template = marko_loadTemplate(require.resolve("../admin/control-panel.marko")),
    users_template = marko_loadTemplate(require.resolve("../admin/users.marko")),
    mentor_template = marko_loadTemplate(require.resolve("../admin/mentor.marko")),
    project_template = marko_loadTemplate(require.resolve("../admin/project.marko")),
    nomination_template = marko_loadTemplate(require.resolve("../admin/nomination.marko")),
    meta_template = marko_loadTemplate(require.resolve("../admin/meta.marko")),
    partner_template = marko_loadTemplate(require.resolve("../admin/partner.marko")),
    support_template = marko_loadTemplate(require.resolve("../admin/support.marko")),
    timer_template = marko_loadTemplate(require.resolve("../admin/timer.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"ru\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"/css/adminpage.css\"><title>Админ | " +
    marko_escapeXml(input.admin.email) +
    "</title><style>\n        .fa-bars {\n            cursor: move;\n            cursor: -webkit-grabbing;\n        }\n    </style><link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\" integrity=\"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU\" crossorigin=\"anonymous\"><script src=\"//rubaxa.github.io/Sortable/Sortable.js\"></script><link rel=\"icon\" href=\"/favicon.ico\" type=\"image/x-icon\"><link rel=\"shortcut icon\" href=\"/favicon.ico\" type=\"image/x-icon\"><script src=\"https://code.jquery.com/jquery-3.3.1.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\" crossorigin=\"anonymous\"></script><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script><link rel=\"stylesheet\" href=\"/tablesorter/style.css\"><script src=\"/tablesorter/jquery.tablesorter.min.js\"></script><script src=\"/tablesorter/jquery.metadata.js\"></script><script>\n        $(document).ready(function()\n            {\n                $(\".tablesorter\").tablesorter({\n                    cssHeader: \"table-header\"\n                });\n            }\n        );\n\n        function sortInit(name) {\n            Sortable.create(document.getElementById(name + '-move'), {\n                handle: '.move-bars',\n                draggable: '.drag-elem',\n                animation: 100\n            });\n        }\n\n        function saveOrder(btn, name) {\n            btn.innerText = \"Сохраняется...\";\n            btn.style.backgroundColor = \"var(--warning)\";\n            let elems = document.getElementsByClassName(name + '-order');\n            let res = [];\n            for(let i = 0; i < elems.length; i++) {\n                res.push(elems[i].id)\n            }\n\n            $.ajax({\n                url: '/admin/' + name + '/order',\n                method: \"PUT\",\n                data: res.toString(),\n                dataType: \"json\",\n                error: function (err) {\n                    btn.innerText = \"ОШИБКА!\";\n                    btn.style.backgroundColor = \"var(--danger)\";\n                    console.log(\"AJAX ERROR:\", err);\n                },\n                success: function () {\n                    btn.innerText = \"Порядок сохранён!\";\n                    btn.style.backgroundColor = \"var(--success)\";\n                },\n                complete: function (jqXHR, status) {\n                    setTimeout(() => {btn.innerText = \"Сохранить порядок\";\n                    btn.style.backgroundColor = \"var(--head_row_color)\";}, 6 * 1000);\n                }\n            })\n        }\n    </script></head><body>");

  component_globals_tag({}, out);

  include_tag({
      _target: alert_template,
      _arg: input
    }, out, __component, "19");

  out.w("<div style=\"background-color: #eee\"><ul class=\"nav nav-tabs\" id=\"tablist\" role=\"tablist\"><li class=\"nav-item\"><a class=\"nav-link\" href=\"#control-panel\" id=\"#control-panel\" role=\"tab\" data-toggle=\"tab\">Панель управления</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"#program\" id=\"#program\" role=\"tab\" data-toggle=\"tab\">Программа</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"#users\" id=\"#users\" role=\"tab\" data-toggle=\"tab\">Участники</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"#mentors\" id=\"#mentors\" role=\"tab\" data-toggle=\"tab\">Менторы</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"#project\" id=\"#project\" role=\"tab\" data-toggle=\"tab\">Проекты</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"#nomination\" id=\"#nomination\" role=\"tab\" data-toggle=\"tab\">Номинации</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"#meta\" id=\"#meta\" role=\"tab\" data-toggle=\"tab\">Метатеги</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"#partners\" id=\"#partners\" role=\"tab\" data-toggle=\"tab\">Партнеры</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"#support\" id=\"#support\" role=\"tab\" data-toggle=\"tab\">Инф. поддержка</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"#timer\" id=\"#timer\" role=\"tab\" data-toggle=\"tab\">Таймер</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"#contacts\" id=\"#contacts\" role=\"tab\" data-toggle=\"tab\">Социальные сети</a></li></ul><a class=\"nav-link\" id=\"exit\" href=\"/api/exit\">Выход</a></div><div class=\"tab-content\"><div role=\"tabpanel\" class=\"tab-pane fade\" id=\"control-panel\"><div class=\"row header\"><div class=\"container\"><h2>Панель управления</h2></div></div><div class=\"content\">");

  include_tag({
      _target: control_panel_template,
      _arg: input
    }, out, __component, "51");

  out.w("</div></div><div role=\"tabpanel\" class=\"tab-pane fade\" id=\"program\"><div class=\"row header\"><div class=\"container\"><h2>Программа</h2></div></div><div class=\"content\"><p class=\"container\">Тут как-то пустовато...</p></div></div><div role=\"tabpanel\" class=\"tab-pane fade\" id=\"users\"><div class=\"row header\"><div class=\"container\"><h2>Участники</h2></div></div><div class=\"content\">");

  include_tag({
      _target: users_template,
      _arg: input
    }, out, __component, "63");

  out.w("</div></div><div role=\"tabpanel\" class=\"tab-pane fade\" id=\"mentors\"><div class=\"row header\"><div class=\"container\"><h2>Менторы</h2></div></div><div class=\"content\">");

  include_tag({
      _target: mentor_template,
      _arg: input
    }, out, __component, "69");

  out.w("</div></div><div role=\"tabpanel\" class=\"tab-pane fade\" id=\"project\"><div class=\"row header\"><div class=\"container\"><h2>Проекты</h2></div></div><div class=\"content\">");

  include_tag({
      _target: project_template,
      _arg: input
    }, out, __component, "75");

  out.w("</div></div><div role=\"tabpanel\" class=\"tab-pane fade\" id=\"nomination\"><div class=\"row header\"><div class=\"container\"><h2>Номинации</h2></div></div><div class=\"content\">");

  include_tag({
      _target: nomination_template,
      _arg: input
    }, out, __component, "81");

  out.w("</div></div><div role=\"tabpanel\" class=\"tab-pane fade\" id=\"meta\"><div class=\"row header\"><div class=\"container\"><h2>Метатеги</h2></div></div><div class=\"content\">");

  include_tag({
      _target: meta_template,
      _arg: input
    }, out, __component, "87");

  out.w("</div></div><div role=\"tabpanel\" class=\"tab-pane fade\" id=\"partners\"><div class=\"row header\"><div class=\"container\"><h2>Партнеры</h2></div></div><div class=\"content\">");

  include_tag({
      _target: partner_template,
      _arg: input
    }, out, __component, "93");

  out.w("</div></div><div role=\"tabpanel\" class=\"tab-pane fade\" id=\"support\"><div class=\"row header\"><div class=\"container\"><h2>Информационная поддержка</h2></div></div><div class=\"content\">");

  include_tag({
      _target: support_template,
      _arg: input
    }, out, __component, "99");

  out.w("</div></div><div role=\"tabpanel\" class=\"tab-pane fade\" id=\"timer\"><div class=\"row header\"><div class=\"container\"><h2>Настройка таймера</h2></div></div><div class=\"content\">");

  include_tag({
      _target: timer_template,
      _arg: input
    }, out, __component, "105");

  out.w("</div></div><div role=\"tabpanel\" class=\"tab-pane fade\" id=\"contacts\"><div class=\"row header\"><div class=\"container\"><h2>Социальные сети</h2></div></div><div class=\"content\"><p class=\"container\">Тут как-то пустовато...</p></div></div></div><script>\n    let hash = window.location.hash.slice(1) || \"control-panel\";\n    let tab = document.getElementById(hash);\n    if (!tab) tab = document.getElementById(hash = \"control-panel\");\n\n    document.getElementById(\"#\" + hash).classList.add(\"active\");\n    tab.classList.remove(\"fade\");\n    tab.classList.add(\"active\")\n</script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "113");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/backend$1.0.0/view/pages/admin.marko",
    tags: [
      "../layout/alert.marko",
      "../admin/control-panel.marko",
      "../admin/users.marko",
      "../admin/mentor.marko",
      "../admin/project.marko",
      "../admin/nomination.marko",
      "../admin/meta.marko",
      "../admin/partner.marko",
      "../admin/support.marko",
      "../admin/timer.marko",
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/taglibs/core/include-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
