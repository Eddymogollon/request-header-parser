var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function(req, res) {
   //get ip
   var ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
   //get language
   var browserLanguage = req.acceptsLanguages()[0];
   //get OS
   var regex = /\([\w; ]+\)/;
   var myOS = req.headers['user-agent'];
   myOS = myOS.match(regex)[0].split("");
   myOS.shift();
   myOS.pop();
   myOS = myOS.join("");

   res.json({
      ipaddress: ipAddress,
      language: browserLanguage,
      software: myOS
   });

});

var port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log("App is listening to the server");
});