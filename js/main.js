function popUp() {
    let buyBtnHeader = document.querySelector('.offer__btn');
    let buyBtnCharacteristic = document.querySelector('.equipment__btn');
    let span = document.querySelectorAll('.closed-pop-up');
    let popUpForm = document.querySelector('.pop-up-form');
    let popUpFormation = document.querySelector('.pop-up-formation');
    let formation = document.getElementById('formation');

    function openPopUp1(e) {
        e.preventDefault();
        popUpFormation.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    function openPopUp2(e) {
        e.preventDefault();
        popUpForm.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    Array.prototype.map.call(span, (b) => {
        b.addEventListener("click", function() {
            popUpFormation.style.display = 'none';
            popUpForm.style.display = 'none';
            document.body.style.overflow = 'visible';
        })
    });

    formation.addEventListener("click", openPopUp1);
    buyBtnHeader.addEventListener('click', openPopUp2);
    buyBtnCharacteristic.addEventListener('click', openPopUp2);
}
function mobileMenu() {
    let burger = document.querySelector('.header-burger');
    let mobileMenu = document.querySelector('.menu__mobile');
    let closeMenu = document.querySelector('.closed-menu');

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
}
popUp();
mobileMenu();

// slickSlider
// якорное меню// якорное меню// якорное меню// якорное меню// якорное меню
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $(".footer__about_list").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
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

    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            // alert("Thank you!");
            location.href = '../thanks.php';
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
});
