$(".btnStyle").on("click", function () {
    event.preventDefault();
    $(".textbody").hide();
    var search = $("#search-input").val();
    console.log(search);
    $(".content").text(search);
    var queryURL = "https://www.anapioficeandfire.com/api/characters/?name=" + search;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (data) {
        console.log(data);
        $(".content").text("CHARACTER = " + data[0].born + " " + data[0].culture + " " + data[0].gender + " " + data[0].aliases + " " + data[0].aliases);
    });
  
  