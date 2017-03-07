var express = require('express');
var app = express();

app.get("/", function(req, res) {
  res.send("Hi there");
});

app.get("/r/:subredditName", function(req, res){
  console.log(req.params);
  res.send("WELCOME SO SUBREDDIT");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
  console.log(req.params);
  res.send("WELCOME SO SUBREDDIT");
});

app.get("*", function(req, res) { // route order matters
  res.send("GENERIC PAGE");
});

app.listen(8080, function(){
  console.log("Server is running");
});
