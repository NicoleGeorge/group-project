var btnCast = document.querySelector('#characters');
var btnQuotes = document.querySelector('#quotes');
var btnCosplay = document.querySelector('#cosplay');
var btnMerch = document.querySelector('#merch');
var btnQuiz = document.querySelector('#quiz');
var text = document.querySelector('.content');

btnCast.addEventListener('click', function () {
    var queryURL = "http://www.omdbapi.com/?t=game+of+thrones&apikey=ce894930";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      text.textContent = response.Actors;
     
    });
});

btnQuotes.addEventListener('click', function () {
    var queryURL = "http://www.omdbapi.com/?t=game+of+thrones&apikey=ce894930";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      text.textContent = response.Plot;
    
    });
});

btnCosplay.addEventListener('click', function () {
  var queryURL = "http://www.omdbapi.com/?t=game+of+thrones&apikey=ce894930";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);

   var image = document.createElement('img');
   image.setAttribute('src', response.Poster);
   text.appendChild(image);
  });
});

btnMerch.addEventListener('click', function () {
  var queryURL = "https://www.anapioficeandfire.com/api/characters/823";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);

    text.textContent = response.titles;
  });
});

btnQuiz.addEventListener('click', function () {
  var queryURL = "https://www.anapioficeandfire.com/api/characters/823";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);

    text.textContent = response.tvSeries;
  });
});





