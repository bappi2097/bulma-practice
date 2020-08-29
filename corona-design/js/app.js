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
});
