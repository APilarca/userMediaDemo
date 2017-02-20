var index = require('./index.html');
var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end(index);
});
server.listen(8080);