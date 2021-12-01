button.addEventListener("click", () => {
    $.ajax(
        {
            url: "/xxxsadf",
            method: "POST",
        }
    ).then(
        (sss) => { console.log(sss); return "第一次成功的返回值"; },
        (qqq) => { console.log(qqq); return "第一次失败的返回值" })
        // 第一次 then 成功时，默认的传过去的实参是 response
        // 第一次 then 失败时，默认的传过去的实参是 request
     .then(
        (sdfa) => { console.log(sdfa) },
        (sadfsadf) => { console.log(sadfsadf) })
        // 后面 then 成功时，默认的传过去的实参是 第一次 then 成功时的返回值，如果没有返回值就手写 return，否则为 undefined
        // 后面 then 失败时，默认的传过去的实参是 第一次 then 失败时的返回值，如果没有返回值就手写 return，否则为 undefined
})
