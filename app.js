var express = require('express');
var app = express();

app.get("/", function(req, res) {
  console.log("home page hit...");
  res.send("Hi there");
});

app.listen(3000, function(){
  console.log("Server is running");
});
