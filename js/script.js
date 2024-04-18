// function openWindows() {
//     document.getElementById('menu-list').style.display = 'block';
// }

// function closeWindows() {
//     document.getElementById('menu-list').style.display = 'none';
// }

const toggleButton = document.getElementById('hamburger-menu');
const menuToggle = document.getElementById('menu-list');

// TODO: start toggle tomorrow morning

toggleButton.addEventListener('click', function(){
    if (menuToggle) {
        menuToggle.classList.add('show');
    } else {
        menuToggle.classList.remove('show');
    }
})