$(document).ready(function(){
 console.log("ready!");

 $('#search').on('click', function() {
    var search = $('.searchTerm').val();
    console.log('ok');

   var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api_key=88f4863d43144bb197282b8405e7c983";
   


   $.ajax({
     url: queryURL, 
     method: 'GET'

   })

   .done(function(result) {
     console.log(result);

       

   })
   .fail(function(err) {
     throw err;
   });


 });



});