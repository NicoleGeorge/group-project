$("#searchform").on("click", function (event) {
  event.preventDefault();
  var registration = $("#hideRegis").show();
  $(".results").append(registration);
});

