$(".btnStyle").on("click", function () {
    event.preventDefault();
    $(".textbody").hide();
    var search = $("#search-input").val();
    console.log(search);
    var queryURL = "https://www.anapioficeandfire.com/api/characters/?name=" + search;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (data) {
        console.log(data);
        $(".content").text("CHARACTER = " + data[0].name + " " + data[0].born + " " + data[0].culture + " " + data[0].gender + " " + data[0].titles + " " + data[0].aliases);
    });


var queryURLbooks = "https://www.anapioficeandfire.com/api/books/5";
$.ajax({
    url: queryURLbooks,
    method: "GET"
}).then(function (data) {
    console.log(data);
    $(".content2").text("BOOK = " + data.name + " " + data.authors[0] + " " + data.publisher + " " + data.country + " " + data.mediaType + " " + data.numberOfPages + " " + data.released);
});
var queryURLHouses = "https://www.anapioficeandfire.com/api/houses";
$.ajax({
    url: queryURLHouses,
    method: "GET"
}).then(function (data) {
    console.log(data);
    $(".content3").text("HOUSE = " + data[0].name + " " + data[0].region + " " + data[0].coatOfArms + " " + data[0].aliases);
});








});