const toggleButton = document.getElementById('hamburger-menu');
const menuToggle = document.getElementById('menu-list');
const menuClose = document.getElementById('hamburger-close');

toggleButton.addEventListener('click', function(){
    if (menuToggle) {
        document.getElementById('menu-list').style.display = 'block';
    } else {
        document.getElementById('menu-list').style.display = 'none';
        
    }
})

menuClose.addEventListener('click', function(){
    if (menuToggle) {
        document.getElementById('menu-list').style.display = 'none';
    } else {
        document.getElementById('menu-list').style.display = 'block';
        
    }
})