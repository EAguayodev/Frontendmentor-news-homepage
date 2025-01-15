const toggleButton = document.getElementById("hamburger-menu"),
  menuToggle = document.getElementById("menu-list"),
  menuClose = document.getElementById("hamburger-close");
toggleButton.addEventListener("click", function () {
  document.getElementById("menu-list").style.display = menuToggle
    ? "block"
    : "none";
}),
  menuClose.addEventListener("click", function () {
    document.getElementById("menu-list").style.display = menuToggle
      ? "none"
      : "block";
  });