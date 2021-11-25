button.addEventListener("click", () => {
    var request = new XMLHttpRequest();
    request.open("POST", "/xxx"); // 配置请求
    // 设置请求头，只能在 open() 和 send() 之间调用
    request.setRequestHeader("fan","18");
    // 设置请求体，GET 请求默认不显示请求体
    request.send("我就要设置请求的第四部分");
    request.onreadystatechange = () => {
        // 这里的 readyState 为什么不等于2 ，因为如果等于 2，下载大文件就会有问题。
        // https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/readyState
        if (request.readyState === 4) {
            console.log("说明请求和响应都完成了");
            if(request.status >= 200 && request.status < 300){
                console.log("说明请求成功了")
                // 获取响应的第一部分
                console.log(request.statusText);
                // 获取响应的第二部分
                console.log(request.getAllResponseHeaders());
                // 获取响应的第二部分的指定值
                console.log(request.getResponseHeader("Content-Type"))
                // 获取响应的第四部分，第三部分是个 回车
                console.log(request.responseText);
                var string = request.responseText;
                // 前端拿到后端返回的字符串进行解析
                // 把符合 JSON 语法的字符串转换成 JS 对应的值
                var object = window.JSON.parse(string);
                console.log(object);
                console.log("note.from");
                console.log(object.note.from);
            }else if(request.status >= 400){
                console.log("说明请求失败了")
            }
        }
    }

})
