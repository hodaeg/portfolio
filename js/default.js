$(function () {
  $(document).scroll(function () {
    var $scrollIco = $(".scrollIcon img");
    if ($(this).scrollTop() > 200) {
      $scrollIco.css("display", "none");
    }
    else if ($(this).scrollTop() < 200){
      $scrollIco.css("display", "unset");
    }
  });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $("nav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$(function () {
  $(document).scroll(function () {
  var $navtxt = $(".navBar");
  $navtxt.toggleClass('scrolledTxt', $(this).scrollTop() > $navtxt.height());
  });
});

$(function () {
  $(document).scroll(function () {
  var $logo = $(".logo");
  $logo.toggleClass('scrolledLogo', $(this).scrollTop() > $logo.height());
  });
});

$('.competanciesSliderItems').on("click", function(){
    if ($(this).hasClass("definitionTab")) {
      $(".definitionTab").removeClass("unselected");
      $(".definitionTab").addClass("selected");
      $(".ideationTab").removeClass("selected");
      $(".prototypingTab").removeClass("selected");
      $(".frontEndTab").removeClass("selected");
      $(".ideationTab").addClass("unselected");
      $(".prototypingTab").addClass("unselected");
      $(".frontEndTab").addClass("unselected");
      $(".definition").css("display", "flex");
      $(".ideation").css("display", "none");
      $(".prototyping").css("display", "none");
      $(".frontEnd").css("display", "none");
    }
    else if ($(this).hasClass("ideationTab")) {
        $(".ideationTab").removeClass("unselected")
        $(".ideationTab").addClass("selected");
        $(".definitionTab").removeClass("selected");
        $(".prototypingTab").removeClass("selected");
        $(".frontEndTab").removeClass("selected");
        $(".definitionTab").addClass("unselected");
        $(".prototypingTab").addClass("unselected");
        $(".frontEndTab").addClass("unselected");
        $(".ideation").css("display", "flex");
        $(".definition").css("display", "none");
        $(".prototyping").css("display", "none");
        $(".frontEnd").css("display", "none");
    }
    else if ($(this).hasClass("prototypingTab")) {
        $(".prototypingTab").removeClass("unselected");
        $(".prototypingTab").addClass("selected");
        $(".definitionTab").removeClass("selected");
        $(".ideationTab").removeClass("selected");
        $(".frontEndTab").removeClass("selected");
        $(".definitionTab").addClass("unselected");
        $(".ideationTab").addClass("unselected");
        $(".frontEndTab").addClass("unselected");
        $(".prototyping").css("display", "flex");
        $(".definition").css("display", "none");
        $(".ideation").css("display", "none");
        $(".frontEnd").css("display", "none");
    }
    else if ($(this).hasClass("frontEndTab")) {
        $(".frontEndTab").removeClass("unselected");
        $(".frontEndTab").addClass("selected");
        $(".definitionTab").removeClass("selected");
        $(".prototypingTab").removeClass("selected");
        $(".ideation").removeClass("selected");
        $(".definitionTab").addClass("unselected");
        $(".prototypingTab").addClass("unselected");
        $(".frontEnd").css("display", "flex");
        $(".definition").css("display", "none");
        $(".ideation").css("display", "none");
        $(".prototyping").css("display", "none");
    }
  });
  $(".icon").on("click", function(){
    $("#myLinks").slideToggle();
  });

  $(".navBarItems li").on("mouseenter", function(){
    $(this).addClass("hoverUp");
  });

  $(".navBarItems li").on("mouseleave", function(){
    $(this).removeClass("hoverUp").addClass("hoverDown")
  });