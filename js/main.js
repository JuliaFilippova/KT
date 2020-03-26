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
    $('.price-list__list:nth-child(1)').addClass('fa_down_two');
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
    if (document.getElementById('tabDescr')) {
        document.getElementById('tabDescr').style.display = 'block'
    }
}

$(document).ready(function () {
    if ($('.slider-news').length != 0 || $('.slider-portfolio').length != 0) {
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
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

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
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
});

let certif = document.querySelectorAll('.wrap-img-overlay').forEach(item => item.onclick = cert);

function cert() {
    let image = this.children[0].src;
    overlay(image, 35);
}

let sliderImg = document.querySelectorAll('.slider__slide').forEach(item => item.onclick = sliderImage);

function sliderImage() {
    let image = this.children[0].src;
    overlay(image, 60);
}

function overlay(src, width) {
    let overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.prepend(overlay);
    document.body.style.overflow = 'hidden';
    overlay.innerHTML = `<img src='${src}' style='width: ${width}%' class='overlay-img'>`
    overlay.onclick = () => {
        overlay.remove();
        document.body.style.overflow = 'auto';
    }
}
document.querySelector('.nav-menu__btn').addEventListener('click', () => {
    let overlay = document.createElement('div');
    let modalForm = document.querySelector('.modal-form');
    modalForm.style.display = 'block';
    document.body.style.overflow = 'hidden';
    overlay.classList.add('overlay');
    document.body.prepend(overlay);
    overlay.onclick = () => {
        overlay.remove();
        modalForm.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});



// hamburger menu
function burgerMenu(selector) {
    let menu = $(selector);
    let buttonMenu = menu.find('.burger-menu__btn');
    let links = menu.find('.burger-menu__link');
    // let overlay = menu.find('.overlay');

    buttonMenu.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-menu__active');

        if (menu.hasClass('burger-menu__active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    }
}
burgerMenu('.burger-menu');