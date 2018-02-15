var express = require('express');
var app = express();

app.use(express.static('./client'))

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);

