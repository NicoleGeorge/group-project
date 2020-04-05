

// $(document).ready(function () {
//     $("#search").on("click", function () {
//         $(".textbody").hide();
//         var input = $("#search-input").val();
//         console.log(input);
//         $(".content").text(input);

//         // Call character api with a name search
//         var queryURL = "https://www.anapioficeandfire.com/api/characters?name=" + input;
//         $.ajax({
//             url: queryURL,
//             method: "GET"
//         }).then(function (data) {
//             // Populate html content
//             console.log(data);
//             $(".content").text(data[0].name + " " + data[0].culture);

//             // // Call the house API
//             // $.ajax(data[0].allegiances[0])
//             // .then(function(data) {
//             //     console.log(data);
//             //     $(".content2").text(data[0].houses);
//             // })

//             // Call the book API
//             $.ajax(data[0].books[0])
//             .then(function(data) {
//                 console.log(data);
//                 $(".content2").text(data[0].books);
//             })


//         })

//     });
// });

//////

$(document).ready(function () {

    $(".btnStyle").on("click", function () {
        $(".textbody").hide();
        var search = $("#search-input").val();
        console.log(search);
        $(".content").text(search);
        var queryURL = "https://www.anapioficeandfire.com/api/characters?name=" + search;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (data) {
            console.log(data);
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

        var searchGphi = $("#search-input").val();

        console.log(searchGphi);
        $.ajax({
            url: `https://api.giphy.com/v1/gifs/search?api_key=w5F8XRxKHMrbEYBn1oSBE3J3gmsYZ9v2&limit=1&q=${searchGphi}`,
            method: "GET"
        }).then(function (response) {
            console.log(response, "line 81");
            $("#ghipy").attr('src'+ response.data[0].images.downsized_large.url);
        });
    });

});



