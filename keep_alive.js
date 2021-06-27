var http = require('http');

http.createServer(function (req, res){
  res.write("Lwezy & Soulfly");
  res.end();
}).listen(8080);