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
    // var amount = fs.readFileSync('./db', 'utf8');
    // html = html.replace('&&&amount&&&', amount);
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    response.write(html);
    response.end();
  } else if (path === '/style.css') {
    var css = fs.readFileSync('./style.css', 'utf8');
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/css; charset=utf-8');
    response.write(css);
    response.end();
  } else if (path === '/main.js') {
    var js = fs.readFileSync('./main.js', 'utf8');
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/javascript; charset=utf-8');
    response.write(js);
    response.end();
  } else if (path === '/1.css') {
    // var css2 = fs.readFileSync('./1.css', 'utf8');
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/css; charset=utf-8');
    response.write('文件不存在');
    response.end();
  } else if (path === '/pay') {
    var a = Math.random();
    if (a > 0.5) {
      response.statusCode = 200;
      console.log(a);
      console.log("3");
      response.write("")
      response.end();
    } else {
      response.statusCode = 400;
      console.log(a);
      console.log("4");
      response.write("")
      response.end();
    }
  } else {
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
