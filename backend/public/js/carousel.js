$(document).ready(function(){
    $('.carousel').slick({
        dots: true,
        mobileFirst: true,
        adaptiveHeight: true,
        infinite: false,

        responsive: [
            {
                breakpoint: 260,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                }
            },

            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                }
            },
        ]
    });
});
// при ширине от 320 до 767
//     slidesToShow: 1,
//     slidesToScroll: 1,
// при ширине от 768 до 1023
//     slidesToShow: 3,
//     slidesToScroll: 3,
// при ширине от 1024 до 1439
//     slidesToShow: 4,
//     slidesToScroll: 4
// при ширине больше
//     slidesToShow: 5,
//     slidesToScroll: 5