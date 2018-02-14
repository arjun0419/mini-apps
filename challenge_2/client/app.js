
//hanldes click of a submit button
var handleClick = function(event) {
  $( ".request" ).empty();
  $( ".response" ).empty();
  var data = event.path[1].children[0].value;
  $( ".request" ).append(`<div>${data}</div>`);
  $(".submitted").css('display', 'block');
  postData(data);
};

//ajax POST call to send/reveive data
var postData = function(data) {
  $.ajax({
    method: "POST",
    contentType: "application/json",
    url: "http://localhost:3000/convert",
    data: data
    })
    .done(function( msg ) {
      $( ".response" ).append(`<div>${msg}</div>`);
      $(".received").css('display', 'block');
  });
}


//on click of submit button
 //make an ajax get rquest with the data captured

