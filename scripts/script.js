document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar_top").classList.add("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar_top").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });

  // slick slider
  $(".slider-row").slick({
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
          centerPadding: "40px",
          slidesToShow: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 1,
          dots: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  });

  $(".case-slider").slick({
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
          centerPadding: "40px",
          slidesToShow: 3,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 1,
          dots: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  });

  $(document).ready(function () {
    var x = document.getElementById("menu-wrapper");
    var y = document.getElementById("menu-wrapper1");
    var z = document.getElementById("menu-wrapper2");
    var u = document.getElementById("menu-wrapper3");
    var t = document.getElementById("menu-wrapper4");
    $(x).hide();
    $(y).hide();
    $(z).hide();
    $(u).hide();
    $(t).hide();
    $(".parent-navlink").click(function () {
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
    $(".parent-navlink1").click(function () {
      if (y.style.display === "none") {
        y.style.display = "block";
      } else {
        y.style.display = "none";
      }
    });
    $(".parent-navlink2").click(function () {
      if (z.style.display === "none") {
        z.style.display = "block";
      } else {
        z.style.display = "none";
      }
    });
    $(".parent-navlink3").click(function () {
      if (u.style.display === "none") {
        u.style.display = "block";
      } else {
        u.style.display = "none";
      }
    });
    $(".parent-navlink4").click(function () {
      if (t.style.display === "none") {
        t.style.display = "block";
      } else {
        t.style.display = "none";
      }
    });
  });
});
