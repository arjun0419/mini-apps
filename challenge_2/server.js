var express = require('express')
var app = express();

app.use(express.static('client'));
 
app.get('/', function (req, res) {
  res.send();
})

app.get('/convert', function (req, res) {
  console.log("request to /convert was received");
  res.send();
})

app.listen(3000)


