$(function () {
    var header = $("#header");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("sticky");
            $(".scroll_to_top").removeClass("top");
        } else {
            header.removeClass("sticky");
            $(".scroll_to_top").addClass("top");
        }
    });
});

// owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:true,
    navText: ["<i class='icon-arrow-cricle'></i>","<i class='icon-arrow-cricle'></i>"],
    responsive:{
        0:{
            items:1,
            margin:0
        },
        600:{
            items:1,
            margin:0
        },
        1000:{
            items:2
        }
    }
})


