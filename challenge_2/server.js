var express = require('express')
var app = express();

//load static html page and app.js from client folder
app.use(express.static('client'));
 
//shows index page 
app.get('/', function (req, res) {
  res.send();
})

// app.get('/convert', function (req, res) {
//   console.log(req);

//   res.send();
// })

//handles post request to enopoint /convert
app.post('/convert', function (req, res) {

  console.log("post request to /convert was received");

  //convert data recevied back to JSON
  let body = [];
  req.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    var parsedBody = JSON.parse(body);

    //call the function to convert the JSON to csv
    convertMyJson(parsedBody, (data) => {
      res.send(data);

    });
  });
})


var convertMyJson = function (obj, callback) {

  //capture columnHeaders
  var columnNames = [];
    for (var key in obj) {
      if (key !== "children") {
        columnNames.push(key);
      } 
    }
  var columnNamesJoinedbyComma = columnNames.join(",");

  //convert each nodes key values except for children key to csv and store in an array
  var childrenArray = [];

  //helperfunction to loop through children and store the values except for children key
  var childrenLookUp = function(obj){
    var childArray = [];
      for (var key in obj) {
        if (key != "children") {
          childArray.push(obj[key]);          
        }
      }
      childrenArray.push(childArray.join(","))

    if (obj.children) {
      obj.children.forEach((child) => (childrenLookUp(child)))
    } else {
      return;
    }
  }

  //call to recurse through the object using the helper function
  childrenLookUp(obj);


  var csvArray = [];

  csvArray.push(columnNamesJoinedbyComma);
  var combinedCsvArray = csvArray.concat(childrenArray);

  var csvFormat = combinedCsvArray.join("<br>");

  callback(csvFormat);
}

app.listen(3000)



