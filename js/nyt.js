function nytArticles() {

    var searchArticle = $(this).attr("inputSearch");
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election" + searchArticle + "&api-key=DuMgpI8pyWMJaID1Yo6p1Xjn0UCUGfQy";

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    })

}