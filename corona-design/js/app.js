$(document).ready(() => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  $(".navbar").css("border-color", "#" + randomColor);
  $("#navbar-burger").click(() => {
    let navbarBurger = $("#navbar-burger");
    let navMenu = $("#navMenu");
    navbarBurger.hasClass("is-active")
      ? navbarBurger.removeClass("is-active")
      : navbarBurger.addClass("is-active");
    navMenu.hasClass("is-active")
      ? navMenu.removeClass("is-active")
      : navMenu.addClass("is-active");
  });
  $.get("https://corona.lmao.ninja/v3/covid-19/all", () => {})
    .done((response) => {
      $("#world-cases").text(covertEToB(response.cases));
      $("#world-treatment").text(
        covertEToB(response.cases - (response.recovered + response.deaths))
      );
      $("#world-recovered").text(covertEToB(response.recovered));
      $("#world-deaths").text(covertEToB(response.deaths));
    })
    .fail(() => {
      toastr.danger("something went wrong!");
    });
  $.get("https://corona.lmao.ninja/v3/covid-19/countries/bangladesh", () => {})
    .done((response) => {
      $("#bd-cases").text(covertEToB(response.cases));
      $("#bd-treatment").text(
        covertEToB(response.cases - (response.recovered + response.deaths))
      );
      $("#bd-recovered").text(covertEToB(response.recovered));
      $("#bd-deaths").text(covertEToB(response.deaths));
      $("#progress-recovered").width(
        percent(response.cases, response.recovered) + "%"
      );
      $("#progress-death").width(
        percent(response.cases, response.deaths) + "%"
      );
      $("#progress-treatment").width(
        percent(
          response.cases,
          response.cases - (response.recovered + response.deaths)
        ) + "%"
      );
    })
    .fail(() => {
      toastr.danger("something went wrong!");
    });
});
function covertEToB(num) {
  num = num.toString();
  num = num.replace(/0/gi, "০");
  num = num.replace(/1/gi, "১");
  num = num.replace(/2/gi, "২");
  num = num.replace(/3/gi, "৩");
  num = num.replace(/4/gi, "৪");
  num = num.replace(/5/gi, "৫");
  num = num.replace(/6/gi, "৬");
  num = num.replace(/7/gi, "৭");
  num = num.replace(/8/gi, "৮");
  num = num.replace(/9/gi, "৯");
  // return new Number(num).toLocaleString("bn-BD");
  return num;
}
function percent(total, num) {
  return (num / total) * 100;
}
