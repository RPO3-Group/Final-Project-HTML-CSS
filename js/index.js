const slider = document.querySelector(".swiper-container");

const swiper = new Swiper(slider, {
    slidesPerView: 2,
    spaceBetween: 22,
    loop: true,
    autoplay: {
        delay: 5000,
    },
});
