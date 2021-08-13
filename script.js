$(document).ready(function () {
    var swiperA = new Swiper('.work .swiper-container', {
        slidesPerView: 1.3,
        spaceBetween: 0,
        grabCursor: true,
        breakpoints: {
            768: {
                slidesPerView: 4.05,
                spaceBetween: 30
            }
        },
    });
    var swiperB = new Swiper('.researchcards .swiper-container', {
        slidesPerView: 1.2,
        spaceBetween: 0,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: '.swiper-pagination',
        }
    });
    var swiperC = new Swiper('.aimcards .swiper-container', {
        slidesPerView: 1.2,
        spaceBetween: 0,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: '.swiper-pagination',
        }
    });
    var swiperD = new Swiper('.howaimcards .swiper-container', {
        slidesPerView: 1.2,
        spaceBetween: 0,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: '.swiper-pagination',
        }
    });
});