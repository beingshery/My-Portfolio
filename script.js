const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 0);
});

// let menu = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menu.click = () => {
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};
