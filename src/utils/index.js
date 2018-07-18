export const Browser = {
    Ie: !!window.ActiveXObject || "ActiveXObject" in window, // 包括ie11，之所以不用document.all,是因为ie11假装不支持document.all，返回的是false
    Ie6: !!document.all && !window.XMLHttpRequest,
    Ie7: !!document.all && /msie 7.0/gi.test(window.navigator.appVersion),
    Ie8: !!document.all && /msie 8.0/gi.test(window.navigator.appVersion),
    Ie9: !!document.all && /msie 9.0/gi.test(window.navigator.appVersion),
    Ie10: !!document.all && /msie 10.0/gi.test(window.navigator.appVersion),
    Ie11: !document.all && /Trident\/7/gi.test(window.navigator.userAgent),
    Edge: /Edge/gi.test(window.navigator.userAgent),
    FF: /firefox/gi.test(window.navigator.userAgent),
    Opera: /opera/gi.test(window.navigator.userAgent),
    Chrome: /Chrome/gi.test(window.navigator.userAgent),
    Maxthon: /Maxthon/gi.test(window.navigator.userAgent),
    Ipad: /ipad/gi.test(window.navigator.userAgent)
}

/**
 * @static 替换换行符
 * @param {String/Object} msg
 * @returns {Object} 替换后的Object
 */
export function replaceLinkBreak(msg) {
    if (typeof msg == "object") {
        msg = JSON.stringify(msg);
    }
    msg = msg.replace(/\\r\\n/g, '');
    return JSON.parse(msg);
}