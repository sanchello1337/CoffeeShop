let menu = document.querySelector('.header__nav');
let burger = document.querySelector('.header__burger');
burger.onclick = function(e) {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    if (document.body.style.overflow === '') {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}