
// const menu = document.querySelector(".menu");


// const mobilmenu = document.querySelector(".mobilmenu");
// const nav = document.querySelector(".header_menu");

// mobilmenu.addEventListener("click", mobilmenuClick);
// function mobilmenuClick() {
//   mobilmenu.classList.toggle("active");
//   nav.classList.toggle("active");
// }

// menu.addEventListener("click", header_menuClick);
// function header_menuClick() {
//     mobilmenu.classList.remove("active");
//     nav.classList.remove("active");
// }



// Hent burger-ikon og selve nav-containeren
const mobilmenu = document.querySelector(".mobilmenu");
const headerMenu = document.querySelector(".header_menu");

// Klik på burger -> toggler klassen "active"
mobilmenu.addEventListener("click", function () {
  mobilmenu.classList.toggle("active");
  headerMenu.classList.toggle("active");
});











// const burger = document.querySelector(".burger");
// const nav = document.querySelector("nav");
// const menu = document.querySelector(".menu");

// burger.addEventListener("click", burgerClick);
// function burgerClick() {
//   burger.classList.toggle("active");
//   nav.classList.toggle("active");
// }
// menu.addEventListener("click", menuClick);
// function menuClick() {
//   burger.classList.remove("active");
//   nav.classList.remove("active");
// }