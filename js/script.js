$(".btnStyle").on("click", function () {
    event.preventDefault();
    $(".textbody").hide();
    var search = $("#search-input").val();
    console.log(search);
    // Character Info API
    var queryURL = "https://www.anapioficeandfire.com/api/characters/?name=" + search;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (data) {
        console.log(data);
        
         var faveCharacter = $("<p class='results-title'>").text("Meet your favourite GoT character, ");
         $(".content1").append(faveCharacter);
         var name = $("<p>").text(data[0].name + "!");
        $(".content1").append(name);
        var gender = $("<p>").text("Gender: " + data[0].gender);
        $(".content1").append(gender);
        var born = $("<p>").text("Born " + data[0].born + ",");
        $(".content1").append(born);
        var culture = $("<p>").text("into the " + data[0].culture + " culture");
        $(".content1").append(culture);
        var titles = $("<p>").text("Their official title is, " + data[0].titles + ".");
        $(".content1").append(titles);
        var aliases = $("<p>").text("But they are also known as, " + data[0].aliases);
        $(".content1").append(aliases);

    });
    // Books API
    var queryURLbooks = "https://www.anapioficeandfire.com/api/books/5";
    $.ajax({
        url: queryURLbooks,
        method: "GET"
    }).then(function (data) {
        console.log(data);
        //$(".content2").text("BOOK = " + data.name + " " + data.authors[0] + " " + data.publisher + " " + data.country + " " + data.mediaType + " " + data.numberOfPages + " " + data.released);
        var bookSection= $("<p class='results-title'>").text("Book info");
        $(".content2").append(bookSection);
        var book = $("<p>").text("Book: " + data.name);
        $(".content2").append(book);
        var authors = $("<p>").text("Author: " + "'" + data.authors[0] + "'");
        $(".content2").append(authors);
        var released = $("<p>").text("Released: " + data.released);
        $(".content2").append(released);
    });
   
    // Giphy API
    var queryGiphy = "https://api.giphy.com/v1/gifs/search?api_key=w5F8XRxKHMrbEYBn1oSBE3J3gmsYZ9v2&limit=1&q=";
    var str = document.getElementById("search-input").value.trim();
    queryGiphy = queryGiphy.concat(str);
    console.log(queryGiphy);
    fetch(queryGiphy)
        .then(response => response.json())
        .then(content => {
            console.log(content);

            console.log(content.data);
            console.log("META", content.meta);
            var fig = document.createElement("figure");
            var img = document.createElement("img");
            var fc = document.createElement("figcaption");
            img.src = content.data[0].images.downsized_large.url;
            img.alt = content.data[0].title;
            fc.textContent = content.data[0].title;
            fig.appendChild(img);
            fig.appendChild(fc);
            var content3 = document.querySelector(".content3");
            content3.prepend(fig);
            var music = document.createElement("mp4");
        })
        .catch(err => {
            console.log(err);
        });
    document.querySelector("#search-input").value = "";
});
// Movie rating API
$("#imdb").on("click", function () {
    event.preventDefault();
    $(".textbody").hide();
    var search = $("#search-input").val();
    console.log(search);
    var queryURL = "http://www.omdbapi.com/?i=tt0944947&apikey=ce894930";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (data) {
        console.log(data);

        var tvHeading = $("<p class='results-title'>").text("Television Series ");
        $(".content4").append(tvHeading);

        var title = $("<p>").text("Title: " + data.Title);
        $(".content4").append(title);

        var release = $("<p>").text("Released: " + data.Released);
        $(".content4").append(release);

        var year = $("<p>").text("Year: " + data.Year);
        $(".content4").append(year);

        var genre = $("<p>").text("Genre: " + data.Genre);
        $(".content4").append(genre);

        var actors = $("<p>").text("Actors: " + data.Actors);
        $(".content4").append(actors);


        var plot = $("<p>").text("Plot: " + data.Plot);
        $(".content4").append(plot);

        var awards = $("<p>").text("Awards: " + data.Awards);
        $(".content4").append(awards);

        var writer = $("<p>").text("Writer: " + data.Writer);
        $(".content4").append(writer);

        var imdbVotes = $("<p>").text("ImdbVotes: " + data.imdbVotes);
        $(".content4").append(imdbVotes);

        var image = $("<img>");
        image.attr("src", data.Poster);
        $(".content4").append(image);


    });
});


