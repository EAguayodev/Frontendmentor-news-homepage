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

  
// const toggleButton = document.getElementById('hamburger-menu');
// const menuToggle = document.getElementById('menu-list');
// const menuClose = document.getElementById('hamburger-close');

// toggleButton.addEventListener('click', function(){
//     if (menuToggle) {
//         document.getElementById('menu-list').style.display = 'block';
//     } else {
//         document.getElementById('menu-list').style.display = 'none';
        
//     }
// })

// menuClose.addEventListener('click', function(){
//     if (menuToggle) {
//         document.getElementById('menu-list').style.display = 'none';
//     } else {
//         document.getElementById('menu-list').style.display = 'block';
        
//     }
// })
