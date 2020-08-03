let formation = document.getElementById('formation');
let span = document.querySelector('.closed-pop-up');
let popUp = document.querySelector('.pop-up-formation');

function openPopUp(e) {
    e.preventDefault();
    popUp.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
function closedPopUp() {
    popUp.style.display = 'none';
    document.body.style.overflow = 'visible';
}
formation.addEventListener("click", openPopUp);
span.addEventListener("click", closedPopUp);

let burger = document.querySelector('.header-burger');
let mobileMenu = document.querySelector('.menu__mobile');
let closeMenu = document.querySelector('.closed-menu');
// console.log(closeMenu);

closeMenu.onclick = function(){
    mobileMenu.classList.remove('close-mobile-menu');
    burger.classList.remove('burger-active-after');
    burger.classList.remove('burger-active-before');
    burger.classList.remove('burger-active-span');
    mobileMenu.classList.remove('open-mobile-menu');
    document.body.classList.remove('body-overflow');
}
function showMobMenu(){
    burger.classList.toggle('burger-active-after');
    burger.classList.toggle('burger-active-before');
    burger.classList.toggle('burger-active-span');
    mobileMenu.classList.toggle('open-mobile-menu');
    document.body.classList.toggle('body-overflow');
}
burger.addEventListener('click',showMobMenu);

// slickSlider
// якорное меню// якорное меню// якорное меню// якорное меню// якорное меню
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('.slider').slick({
        arrows: true,
    });
    $('.gallery__slider').slick({
        arrows: true,
        responsive: [{
                breakpoint: 2561,
                settings: "unslick"
            },
            {
                breakpoint: 769,
                slideShow: 1,
                slidesToScroll: 2,
            }
        ]
    });
});


