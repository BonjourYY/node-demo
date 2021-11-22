button.addEventListener("click", () => {
    var request = new XMLHttpRequest();
    request.open("GET", "/xxx"); // 配置请求
    request.send();
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log("说明请求和响应都完成了");
            if(request.status >= 200 && request.status < 300){
                console.log("说明请求成功了")
                var a = request.responseXML;
                console.log(a);
                console.log(a.getElementsByTagName("to")[0].textContent)
            }else if(request.status >= 400){
                console.log("说明请求失败了")
            }
        }
    }

})
