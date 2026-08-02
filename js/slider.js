// js/slider.js
document.addEventListener("DOMContentLoaded", () => {
    // Featured Apps Slider (optional if grid, but good to have)
    // We are using grid for featured apps in prompt, but we'll init one just in case.
    
    // Screenshots Slider (Phone Mockup Carousel)
    const screenshotsSwiper = new Swiper('.screenshots-slider', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination-screenshots',
            clickable: true,
        },
    });

    // Testimonials Slider
    const testimonialsSwiper = new Swiper('.testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: true,
        },
        pagination: {
            el: '.swiper-pagination-testimonials',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });
});
