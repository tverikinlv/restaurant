import mobileNav from './modules/mobile-nav.js';
mobileNav();


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});


jQuery(document).ready(function ($) {

    $('.header__button').on('click', () => {
        $('.modal').addClass('modal-show');
    })

    $('.modal-close').on('click', () => {
        $('.modal').removeClass('modal-show')
    })


    $(() => {
        $('.reservation-form').submit((e) => {
            e.preventDefault()
            const form = $('.reservation-form');
            $.ajax({
                type: form.attr('method'),
                url: form.attr('action'),
                data: form.serialize(),
            }).done(() => {
                console.log('sucsess');
            }).fail(() => {
                console.log(`Необходимо указать валидный URL в action и по нему направятся данные формы: ${form.serialize()}`);
            });

            alert('Thanks for reservation! We will call you back soon!')

                ;

            form[0].reset();
        });
    });
});