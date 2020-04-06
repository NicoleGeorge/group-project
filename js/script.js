

$(document).ready(function () {

    $(".btnStyle").on("click", function () {
        $(".textbody").hide();

        var search = $(".searchInput").val();
        console.log(search);

        $(".content").text(search);

        var queryURL = "https://www.anapioficeandfire.com/api/characters?name=" + search;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (data) {
        
            $(".content").text("CHARACTER = " + data[0].culture + " " + data[0].gender + " " + data[0].aliases + " " + data[0].aliases);
        });

        var queryURLbooks = "https://www.anapioficeandfire.com/api/books/5";
        $.ajax({
            url: queryURLbooks,
            method: "GET"
        }).then(function (data) {
            console.log(data);
            $(".content2").text("BOOK = " + data.name + " " + data.authors[0] + " " + data.publisher + " " + data.country + " " + data.mediaType);
        });

        var queryURLHouses = "https://www.anapioficeandfire.com/api/houses"
        $.ajax({
            url: queryURLHouses,
            method: "GET"
        }).then(function (data) {
            console.log(data);
            $(".content3").text("HOUSE = " + data[0].name + " " + data[0].region + " " + data[0].coatOfArms + " " + data[0].aliases);
        });
      
    //     //API Tvshow information

    //     var searchTv = $("#search-input").val();
    //     console.log(searchTv,"43");

       
    //     $.ajax({
    //         url:  "https://www.episodate.com/api/search?q=" + seachTV + "&page=1" ,
    //         method: "GET"
    //     }).then(function (data) {
          
    //         $(".content4").text("Tv = " + data.tv_shows.country);
    //     });


    //    //API ghipy

    //     var searchGphi = $("#search-input").val();
    //     console.log(searchGphi);
    //     $.ajax({
    //         url: `https://api.giphy.com/v1/gifs/search?api_key=1b9vjVExJH3Q7oUfZjCv78VsNa9i3RS5&limit=1&q=${searchGphi}`,
    //         method: "GET"
    //     }).then(function (response) {
    //         console.log(response, "line 81");
    //         $("#ghipy").attr('src'+ response.data[0].images.downsized_large.url);
    //     });

        
    });

});

