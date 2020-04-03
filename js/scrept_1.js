function getbook() {

    // Querying the weather api for the selected city, the ?app_id parameter is required, but can equal anything
    var queryURL = "https://www.anapioficeandfire.com/api/books";
    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // Printing the entire object to console
        console.log(response);
        
    });
}

$("#book").click(function () {
    //prevents the form from trying to submit itself.
   // $("#showweather").show();
    //event.preventDefault();
  //  var inputCity = $("#city-input").val().trim();
 //   getWeather(inputCity, true);
  //  $(".new").show();
  //  fiveDaysWeather(inputCity);
});