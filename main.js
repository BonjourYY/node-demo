button.addEventListener("click", () => {
    var request = new XMLHttpRequest();
    request.open("GET", "http://jack.com:8802/xxx"); // 配置请求
    request.send();
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log("说明请求和响应都完成了");
            if(request.status >= 200 && request.status < 300){
                console.log("说明请求成功了")
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
