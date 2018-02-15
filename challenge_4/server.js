var express = require('express')
var app = express()

app.use(express.static('./client'))

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  console.log('now serving get request to /')
  res.send()
})

app.listen(3000);