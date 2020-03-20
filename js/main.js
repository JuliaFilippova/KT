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