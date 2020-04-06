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
            var content4 = document.querySelector(".content4");
            content4.prepend(fig);
        })
        .catch(err => {
            console.log(err);
        });
    document.querySelector("#search-input").value = "";
});


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
        
       
    });
});


