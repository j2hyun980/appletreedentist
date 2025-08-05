$(function () {

  //depth2
  $(".depth2_bg").hide();
  $(".depth2").hide();
  $(".gnb > li").mouseenter(function () {
    $("#header").addClass("active");
    $("#header h1 img").attr("src", "img/logo.png");
    $("#header .util").addClass("active");
    $("#header .util img").attr("src", "img/icon_location_g.svg");

    $(this).find(".depth1").addClass("active");
    $(this).find(".underline").addClass("active");
    $(".depth2").stop().fadeIn();
    $(".depth2_bg").stop().fadeIn();
  });

  $(".gnb > li").mouseleave(function () {
    $("#header").removeClass("active");
    $("#header h1 img").attr("src", "img/logo_w.png");
    $("#header .util").removeClass("active");
    $("#header .util img").attr("src", "img/icon_location_w.svg");

    $(this).find(".depth1").removeClass("active");
    $(this).find(".underline").removeClass("active");
    $(".depth2").stop().fadeOut();
    $(".depth2_bg").stop().fadeOut();
  });

  //mgnb
  $(".mgnb_wrap").hide();
  $(".btn_ham").click(function () {
    $(".mgnb_wrap").fadeIn();
  });
  $(".btn_close").click(function () {
    $(".mgnb_wrap").fadeOut();
    $(".mdepth2").stop().slideUp();
    $(".mgnb .mdepth1").removeClass("active");
  });
  $(".mgnb .mdepth1").click(function () {
    $(this).find(".mdepth2").stop().slideToggle();
    $(this).toggleClass("active");
  });

  // banner
  const mb = new Swiper('.slide_banner', {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false, },
    speed: 600,
    pagination: { el: ".swiper-pagination", type: "bullets", clickable: true, },
  });

  //gotop-btn
  $(".gotop").hide();
  $(".gotop").click(function () {
    $(window).scrollTop(0);
  });
  $(window).scroll(function () {
    let mbtnScroll = $(this).scrollTop();
    if (mbtnScroll > 400) {

      $(".gotop").addClass("active").fadeIn();
    } else {
      $(".gotop").removeClass("active");
    }
  });

  // #notice, tap-menu
  $("#notice .notice_list > li").not(":first").hide();
  $("#notice .btn_list > li").click(function () {
    let btn = $(this).index();
    $("#notice .btn_list > li").eq(btn).addClass("active").siblings().removeClass("active");
    let num = $(this).index();
    $("#notice .notice_list > li").eq(num).show().siblings().hide();
  });

  //service
  $(".service ul li").mouseenter(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active").addClass("others");
  });
  $(".service ul li").mouseleave(function () {
    $(this).removeClass("active");
    $(this).siblings().removeClass("others");
  });

});