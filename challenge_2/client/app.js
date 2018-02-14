

var handleClick = function(event) {
  $( ".request" ).empty();
  $( ".response" ).empty();
  var data = event.path[1].children[0].value;
  $( ".request" ).append(`<div>${data}</div>`);
  $(".submitted").css('display', 'block');
  postData(data);
};

var postData = function(data) {
  // console.log(data);
  $.ajax({
    method: "POST",
    contentType: "application/json",
    url: "http://localhost:3000/convert",
    data: data
    })
    .done(function( msg ) {
      $( ".response" ).append(`<div>${msg}</div>`);
      $(".received").css('display', 'block');
      console.log( "Data received: " + msg );
  });
}


//on click of submit button
 //make an ajax get rquest with the data captured

