var express = require("express");
var http = require("http");
var app = express();

var server = http.createServer(app);
var socket = io.listen(server);

socket.on('connection', function(socket) {
  console.log('socket.io connected');
});

socket.on('data', function(data) {
  console.log(data);
});