$(document).ready(function () {
  var currentDir = $("a").css("direction");

  AOS.init();

  if ($(".bg-sidenavOpen").length) {
    $(".bg-sidenavOpen").on("click", function () {
      $("#mySidenav").css("right", "-400px");
      $(this).css("display", "none");
      document.body.classList.remove("openMenuActive");
    });
  }

  if ($(".header_slider_wrapper").length) {
    $(".header_slider_wrapper").slick({
      rtl: currentDir == "rtl" ? true : false,
      arrow: true,
    });
  }

  $("#nav-icon1").click(function () {
    $(this).toggleClass("open");
    $(".side_nav").toggleClass("side_nav_open");
    $("html").toggleClass("side_active");
    // $(".my_navbar").toggleClass("removeBackground");
    // $("#mySidenav").toggleClass("openBurgerMenu");
    // $(".bg-sidenavOpen").toggleClass("burgerMenubodybg");
    // $(this).closest(".customnavbar").find(".logo").fadeToggle();
  });

  if ($(".bg_side_open").length) {
    $(".bg_side_open").on("click", function () {
      $("#nav-icon1").removeClass("open");
      $(".side_nav").removeClass("side_nav_open");
      $("html").removeClass("side_active");
    });
  }

  if ($(".custom_select").length) {
    $(".custom_select").niceSelect();
  }

  if ($(".header_news_scroll").length) {
    $(".header_news_scroll").mCustomScrollbar({
      theme: "dark",
      alwaysShowScrollbar: 1,
      scrollEasing: "easeOut",
      mouseWheel: { preventDefault: true },
    });
  }

  if ($(".watch_video_scrollable".length)) {
    $(".watch_video_scrollable").mCustomScrollbar({
      theme: "dark",
      alwaysShowScrollbar: 1,
      scrollEasing: "easeOut",
      mouseWheel: { preventDefault: true },
    });
  }
});

$(window).on("load", function () {
  $(".splashscreen").addClass("splashscreen_none");
});
