
$('.slider-inner').slick({
    dots: true,
    autoplay: 3000,
    nextArrow: '<button type="button" class="slick-btn slick-next">&#62;</button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev">&#60;</button>'
});
$('.clients-slider').slick({
    dots: true,
    arrow: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: 3000,
    nextArrow: '<button type="button" class="clients-slick-btn  clients-slick-next">&#62;</button>',
    prevArrow: '<button type="button" class="clients-slick-btn  clients-slick-prev">&#60;</button>',
    responsive:[
        {
            breakpoint:1024,
            settings:{
                slidesToShow:3,
                slidesToScroll:3
            }
        },
        {
            breakpoint:825,
            settings:{
                slidesToShow:2,
                slidesToScroll:2
            }
        },
        {
            breakpoint:535,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
                dots:false,
                arrow:false
            }
        }
    ]
});
$('.comments-slider').slick({
    dots: true,
    arrow: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: 3000,
    nextArrow: '<button type="button" class="comments-slick-btn  comments-slick-next">&#62;</button>',
    prevArrow: '<button type="button" class="comments-slick-btn  comments-slick-prev">&#60;</button>'
});
$('.header-btn').on('click', function () {
    $('.menu').addClass('active');
});
$('.close-btn').on('click', function () {
    $('.menu').removeClass('active');
})