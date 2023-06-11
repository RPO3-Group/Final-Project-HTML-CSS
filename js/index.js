const slider = document.querySelector(".swiper-container");

const swiper = new Swiper(slider, {
    slidesPerView: 2,
    spaceBetween: 22,
    preloadImages: true,
    loop: true,
    initialSlide: 1,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});
document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems);
});
