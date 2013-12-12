var express = require("express");
var http = require("http");
var app = express();


 
app.get("/hello/:who", function(req, res) {
		res.redirect("http://www.google.com");
	res.writeHead(200, { "Content-Type": "text/plain" });
  	res.end("Hello, " + req.params.who + ".");
  // Fun fact: this has security issues
});

http.createServer(app).listen(1337);