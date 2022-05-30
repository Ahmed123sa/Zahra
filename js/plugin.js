$(".menu ul li").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");

  if ($(this).attr("data-filter") == "all") {
    $(".menu .box").show("5000");
  } else {
    $(".menu .box")
      .not("." + $(this).attr("data-filter"))
      .hide("5000");
    $(".menu .box")
      .filter("." + $(this).attr("data-filter"))
      .show("5000");
  }
});

//////////////////////////

$(".menu .imgs-container img").on("click", function () {
  if ($(".menu ul li.active").attr("data-filter") === "all") {
    $(".overlay  .box").show("5000");
  } else {
    $(".overlay  .box")
      .not("." + $(".menu ul li.active").attr("data-filter"))
      .hide("5000");

    $(".overlay .box")
      .filter("." + $(".menu ul li.active").attr("data-filter"))
      .show("5000");
  }

  // $(".overlay .main img").hide().attr("src", $(this).attr("src")).fadeIn(500);
  if ($(".menu ul li.active").attr("data-filter") === "all") {
    $(".overlay  img.main").attr(
      "src",
      $(".menu .imgs-container img").attr("src")
    );
    $(".overlay  img.main").show();
  } else {
    $(".overlay  img.main").hide();
  }
  if ($(".menu ul li.active").attr("data-filter") === "dessert") {
    $(".des").css("display", "block");
  } else {
    $(".des").css("display", "none");
  }
  if ($(".menu ul li.active").attr("data-filter") === "food") {
    $(".fo").css("display", "block");
  } else {
    $(".fo").css("display", "none");
  }
  if ($(".menu ul li.active").attr("data-filter") === "drinks") {
    $(".dri").css("display", "block");
  } else {
    $(".dri").css("display", "none");
  }

  $(".overlay").css("display", "flex");
  $(".overlay .fa-xmark").on("click", function () {
    $(".overlay").css("display", "none");
  });
});

////////////////////////////////////////
window.onscroll = function () {
  if (this.pageYOffset > 350) {
    $(".whatsapp a").css("left", "10px");
    $(".phone a").css("right", "10px");
  } else {
    $(".whatsapp a").css("left", "-60px");
    $(".phone a").css("right", "-60px");
  }
};
////////////////////////////////////////
if (platform.name === "Safari") {
  $(".landing").css("background-attachment", "inherit");
}
////////////////////////////////
$(".loading .loader").fadeOut(3000, function () {
  $(this).parent().fadeOut(2000);
});
