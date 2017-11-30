#!/usr/bin/nodejs
var http = require('http');
http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Hello World to all of the IT dogs.\n');
}).listen(8080,'localhost');
console.log("Server running at http://localhost:8080/")
