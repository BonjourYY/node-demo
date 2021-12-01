window.JQuery = function (nodeorSelector) {
    nodes.addClass = function () { };
    nodes.html = function () { };
    return nodes;
}

window.JQuery.ajax = function (options) {
    let url;

    // 添加用户可以任意设置参数个数的功能
    // arguments 实参
    if (arguments.length === 1) {
        url = options.url;
    } else if (arguments.length === 2) {
        url = arguments[0];
        options = arguments[1];
    }

    let method = options.method;
    let body = options.body;
    let successFn = options.successFn;
    let failFn = options.failFn;
    let headers = options.headers;

    // ES6 解构赋值
    let { method, body, successFn, failFn, headers } = options;

    var request = new XMLHttpRequest();
    request.open(method, url);
    // 设置请求头需要在 open 方法后面
    for (let key in headers) {
        let value = headers[key];
        request.setRequestHeader(key, value);
    }
    request.send(body);
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                successFn.call(undefined, request.responseText)
            } else if (request.status >= 400) {
                failFn.call(undefined, request)
            }
        }
    }
}

window.$ = window.JQuery;

let f1 = function (responseText) { console.log(responseText) }
let f2 = function (responseText) { console.log(responseText) }

button.addEventListener("click", () => {
    window.JQuery.ajax(
        {
            // 请求的第一部分
            url: "/xxx",
            method: "post",
            // 请求的第四部分
            body: "123",
            // 请求的第三部分
            headers: {
                "content-type": "text/html",
                "fan": "18",
            },
            successFn: (x) => {
                // 请求成功时，我想执行俩个函数
                f1.call(undefined, x);
                f2.call(undefined, x);
            },
            failFn: (x) => { console.log(x) }
        }
    )
})
