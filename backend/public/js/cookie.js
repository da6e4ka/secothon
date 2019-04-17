function setCookie(name, value, options={}) {
    let expires = options.expires;

    if (typeof expires === "number" && expires) {
        let d;
        if (expires < 0) {
            d = new Date(1);
        } else {
            d = new Date();
            d.setTime(d.getTime() + expires * 1000);
        }

        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    let updatedCookie = name + "=" + value;

    for (let propName in options) {
        updatedCookie += "; " + propName;
        let propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }
    console.log(updatedCookie);
    document.cookie = updatedCookie;
}

function getCookie(name, default_res=undefined) {
    const matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    console.log("getCookie:", matches);
    return matches ? decodeURIComponent(matches[1]) : default_res;
}

function deleteCookie(name, option = {}) {
    option = Object.assign(
        option, {
            expires: -1
        });
    setCookie(name, "", option);
}