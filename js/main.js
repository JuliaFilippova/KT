// section menu widget dropdown DROPDOWN
$(document).ready(function () {
    // preloder 
    let preloader = document.querySelector('.preloader');
    let images = document.images;
    let imgTotalCount = images.length;
    let imgLoadCount = 0;
    document.body.style.overflow = 'hidden';
    for (let i = 0; i < imgTotalCount; i++) {
        let imgClone = new Image();
        imgClone.onload = imageLoaded;
        imgClone.onerror = imageLoaded;
        imgClone.src = images[i].src;
    }

    function imageLoaded() {
        imgLoadCount++;
        (((100 / imgTotalCount) * imgLoadCount) << 0) + '%';
        setTimeout(function () {
            if (imgLoadCount >= imgTotalCount) {
                if (!preloader.classList.contains('done')) {
                    preloader.classList.add('done');
                    document.body.style.overflow = 'auto';
                }
            }
        }, 1000)
    }


    $('.widget__list:nth-child(1)').addClass('fa_down'); //active one
    $('.widget__list:nth-child(1) .fa-down').addClass('activ'); //active one
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

    // section price-list widget dropdown DROPDOWN
    $('.price-list__list:nth-child(1)').addClass('fa_down_two'); //active one
    $('.price-list__list:nth-child(1) .fa-down_two').addClass('activ'); //active one
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

    // gallery product 
    $(".gallery-content > div").on('click', 'img', function () {
        let src = $(this).attr("src");
        $(".gallery-main > img").attr("src", src);
    });

    let img1 = $(".gallery-img1").attr("src");
    let img2 = $(".gallery-img2").attr("src");
    let img3 = $(".gallery-img3").attr("src");
    let arr = [img1, img2, img3];

    let certif = document.querySelectorAll('.wrap-img-overlay').forEach(item => item.onclick = cert);

    function cert() {
        let image = this.children[0].src;
        overlay(image, 35);
    }

    let sliderImg = document.querySelectorAll('.slider__slide').forEach(item => item.onclick = sliderImage);

    function sliderImage() {
        let image = this.children[0].src;
        overlay(image, 50);
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

    // modal form btn
    document.querySelectorAll('.modal-btn').forEach(item => item.onclick = btnForm)

    function btnForm() {
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
    }

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
});
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