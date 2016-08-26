/* MongoDB Zoo Site (18.2.4)
 * Front-End
 * ========================= */

  // 1. Make an AJAX function for loading the table in index.html
  // with the data from your animals collection in MongoDB.
  // Each row should have info for one animal.

   $(document).ready(function() {


    // $.ajax('/all').done(function(data) {
    //   console.log(data);

    // })

// 2. Make two AJAX functions that fire when users click
//   the two buttons on index.html.
//       a. When the user clicks the Weight button, the table should
//       display the animal data sorted by weight.
//       b. When the user clicks the Name button, the table should
//       display the animal data sorted by name. 

$.ajax('/all').done(function(data) {
 // for each entry of that json...
 for (var i = 0; i < data.length; i++){
   // append each animal of the named properties to the table
   $('#results').append(
        '<tr><td>'+ data[i].name + '</td>' + 
        '<td>'+ data[i].numlegs + '</td>' + 
        '<td>'+ data[i].class + '</td>' + 
        '<td>'+ data[i].weight + '</td>'+ 
        '<td>'+ data[i].whatWouldIReallyCallIt + '</td></tr>');
                                      
 }
});


$('#nameSort').on('click', function() {

  $('#results').append("<tr><th>Name</th></tr>")
   for (var i = 0; i < data.length; i++){
   // append each animal of the named properties to the table
   $('#results').append(
        '<tr><td>'+ data[i].name + '</td>' + 
        '<td>'+ data[i].numlegs + '</td>' + 
        '<td>'+ data[i].class + '</td>' + 
        '<td>'+ data[i].weight + '</td>'+ 
        '<td>'+ data[i].whatWouldIReallyCallIt + '</td></tr>');
                                      
 }

  $.ajax('/name').done(function(data) {

  });


});


$('#weightSort').on('click', function() {

   for (var i = 0; i < data.length; i++){
   // append each animal of the named properties to the table
   $('#results').append(
        '<tr><td>'+ data[i].name + '</td>' + 
        '<td>'+ data[i].numlegs + '</td>' + 
        '<td>'+ data[i].class + '</td>' + 
        '<td>'+ data[i].weight + '</td>'+ 
        '<td>'+ data[i].whatWouldIReallyCallIt + '</td></tr>');
                                      
 }

  $.ajax('/weight').done(function(data) {
  });

});


  // Good luck!

 });