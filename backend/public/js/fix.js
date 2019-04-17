String.prototype.replaceAll = function(search, replacement) {
    return this.split(search).join(replacement);
};

URL.prototype.addParameters = function (param) {
    let p = [];
    for (let key in param) {
        p.push(key + '=' + param[key])
    }
    return new URL(this.toString() + '?' + p.join("&"))
};

function encode_utf8(s) {
  return unescape(encodeURIComponent(s));
}

function decode_utf8(s) {
  return decodeURIComponent(escape(s));
}
function htmlDecode(html) {
    return $('<div/>').html(html).text()
}

function setList(elem) {
    return Array.from(new Set(elem))
}


function getParamFromUrl(param, defaultValue = undefined) {
    let re = new RegExp(".*[?&]" + param + "=([^&]+)(&|$)");
    let match = window.location.toString().match(re);
    return(match ? match[1] : defaultValue);
}

function inRange(number, min, max) {
    return number >= min && number <= max;
}