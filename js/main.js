// section menu widget dropdown DROPDOWN
$(document).ready(function () {
    $('.widget__link').click(function () {
        $('.widget__link').not(this).children('.fa-down').removeClass('activ');
        $(this).children('.fa-down').toggleClass("activ");

        if ($(this).parent().is('.fa_down')) {
            $(this).closest('.widget__list').find('.widget__drop').slideUp();
            $(this).closest('.widget__list').removeClass('fa_down');
        } else {
            $('.widget__drop').slideUp();
            $('.widget__list').removeClass('fa_down');
            $(this).closest('.widget__list').find('.widget__drop').slideDown();
            $(this).closest('.widget__list').addClass('fa_down');
        }
    });
});

// section price-list widget dropdown DROPDOWN
$(document).ready(function () {
    $('.price-list__name').click(function () {
        $('.price-list__name').not(this).children('.fa-down_two').removeClass('activ');
        $(this).children('.fa-down_two').toggleClass("activ");

        if ($(this).parent().is('.fa_down_two')) {
            $(this).closest('.price-list__list').find('.price-list__drop').slideUp();
            $(this).closest('.price-list__list').removeClass('fa_down_two');
        } else {
            $('.price-list__drop').slideUp();
            $('.price-list__list').removeClass('fa_down_two');
            $(this).closest('.price-list__list').find('.price-list__drop').slideDown();
            $(this).closest('.price-list__list').addClass('fa_down_two');
        }
    });
});

// gallery product 
$(".gallery-content > div").on('click', 'img', function () {
    let src = $(this).attr("src");
    $(".gallery-main > img").attr("src", src);
});

let img1 = $(".gallery-img1").attr("src");
let img2 = $(".gallery-img2").attr("src");
let img3 = $(".gallery-img3").attr("src");
let arr = [img1, img2, img3];



// tabs product 
function openCity(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openCountry(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

window.onload = () => {
    document.getElementById('tabDescr').style.display = 'block'
}


$(document).ready(function () {
    $('.slider-news').slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [{
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
$(document).ready(function () {
    $('.slider-portfolio').slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [{
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});