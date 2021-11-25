window.JQuery = function (nodeorSelector) {
    nodes.addClass = function () { };
    nodes.html = function () { };
    return nodes;
}

window.JQuery.ajax = function (options) {
    let url = options.url;
    let method = options.method;
    let body = options.body;
    let successFn = options.successFn;
    let failFn = options.failFn;
    let headers = options.headers;
    
    var request = new XMLHttpRequest();
    request.open(method, url);
    // 设置请求头需要在 open 方法后面
    for(let key in headers){
        let value = headers[key];
        request.setRequestHeader(key,value);
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
            url: "/xxx",
            method: "post",
            body: "",
            headers:{
                "content-type":"text/html",
                "fan":"18"
            },
            successFn: (x) => {
                f1.call(undefined, x);
                f2.call(undefined,x);
            },
            failFn: (x) => { console.log(x) }
        }
    )
})
