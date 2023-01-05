window.onload = function() {
    const burgerBtn = document.querySelector('.burger');
    const menu = document.querySelector('.navbar_menu');
    const icons = document.querySelector('.navbar_icon');

    burgerBtn.addEventListener('click', function() {
        menu.classList.toggle('active');
        icons.classList.toggle('active');
    });
}