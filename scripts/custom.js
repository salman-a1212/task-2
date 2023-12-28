document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('navbar-fixed');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('navbar-fixed');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    const opener = document.getElementById('offcanvas-opener')
    // window.addEventListener('resize', () => {
    //     document.getElementById("mySidenav").style.width = "100%";
    //     if (window.innerWidth < 768) {
    //     } else {
    //         document.getElementById("mySidenav").style.width = "50%";
    //     }
    // });
    function getWindowSize() {
        var inner_width = window.innerWidth;
        window.onresize = getWindowSize;
        if (inner_width < 768) {
            document.getElementById("mySidenav").style.width = "100%";
        } else {
            document.getElementById("mySidenav").style.width = "50%";
        }
        if (inner_width > 768) {
            document.getElementById("mySidenav").style.width = "0%";
        }

    }
    opener.addEventListener('resize', getWindowSize())

}


/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


// function show() {
//     var x = document.getElementById("menu-wrapper");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

$(document).ready(function () {
    var x = document.getElementById("menu-wrapper");
    var y = document.getElementById("menu-wrapper1");
    var z = document.getElementById("menu-wrapper2");
    $(x).hide();
    $(y).hide();
    $(z).hide();
    $('.parent-navlink').click(function () {
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    });
    $('.parent-navlink1').click(function () {
        if (y.style.display === "none") {
            y.style.display = "block";
        } else {
            y.style.display = "none";
        }
    });
    $('.parent-navlink2').click(function () {
        if (z.style.display === "none") {
            z.style.display = "block";
        } else {
            z.style.display = "none";
        }
    });
})

// slick slider
$('.slider-row').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 1,
                dots: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 1,
                dots: false
            }
        },
        {
            breakpoint: 320,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 1,
                dots: false
            }
        }
    ]
});

$('.case-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 3,
                dots: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 1,
                dots: false
            }
        },
        {
            breakpoint: 320,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 1,
                dots: false
            }
        }
    ]
});