// run `node index.js` in the terminal

var http = require('http');
var fs = require('fs');
var url = require('url');
var port = process.argv[2];

if (!port) {
  // console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？');
  process.exit(1);
}

var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true);
  var pathWithQuery = request.url;
  var queryString = '';
  if (pathWithQuery.indexOf('?') >= 0) {
    queryString = pathWithQuery.substring(pathWithQuery.indexOf('?'));
  }
  var path = parsedUrl.pathname;
  var query = parsedUrl.query;
  var method = request.method;

  /******** 从这里开始看，上面不要看 ************/

  // console.log('方方说：含查询字符串的路径\n' + pathWithQuery);

  if (path === '/') {
    var html = fs.readFileSync('./index.html', 'utf8');
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    response.write(html);
    response.end();
  } else if (path === "/main.js") {
    var js = fs.readFileSync('./main.js', 'utf8');
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/javascript;charset=utf-8');
    response.write(js);
    response.end();
  } else if (path === "/xxx") {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/xml;charset=utf-8');
    response.write(`<?xml version="1.0" encoding="UTF-8"?>
    <note>
      <to>Tove</to>
      <from>Jani</from>
      <heading>Reminder</heading>
      <body>Don't forget me this weekend!</body>
    </note>`);
    response.end();
  }
  else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    response.write('呜呜呜');
    response.end();
  }

  /******** 代码结束，下面不要看 ************/
});

server.listen(port);
console.log(
  '监听 ' +
  port +
  ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' +
  port
);
