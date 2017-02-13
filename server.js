var express = require("express");
var app = express();
var db = require("/models");
app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});








app.listen(process.env.PORT || 3000, function () {
  console.log("Express server is up and running on http://localhost:3000");
});