$(function () {
  $(document).scroll(function () {
    var $nav = $("nav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$(function () {
  $(document).scroll(function () {
    var $navBack = $(".csNavBar");
    $navBack.removeClass('csNavBar', $(this).scrollTop() > $navBack.height());
    $navBack.addClass('navBar', $(this).scrollTop() > $navBack.height());
  });
});

$(function () {
  $(document).scroll(function () {
    var $navReturn = $(".navBar");
    if ($(this).scrollTop() < 55) {
      $navReturn.removeClass('navBar').addClass('csNavBar');
    }
  });
});

$(function () {
  $(document).scroll(function () {
  var $navBackItems = $(".csNavBarItems");
  var $navBackCSItems = $(".navBarItems");
  $navBackItems.removeClass('csNavBarItems', $(this).scrollTop() > $navBackItems.height());
  $navBackItems.addClass('navBarItems', $(this).scrollTop() > $navBackItems.height());
  $navBackCSItems.addClass('csScrolledTxt', $(this).scrollTop() > $navBackItems.height());
  if ($(this).scrollTop() < 55) {
  $navBackCSItems.toggleClass('csNavBarItems');
  $navBackItems.removeClass('csScrolledTxt');
  $navBackCSItems.removeClass('csScrolledTxt');
  }
  });
});

$(function () {
  $(document).scroll(function () {
  var $logo = $(".logo");
  $logo.toggleClass('scrolledLogo', $(this).scrollTop() > $logo.height());
  });
});

$(function () {
  $(document).scroll(function () {
  var $subHead = $(".subHeadOff");
  var $navBar = $("nav");
  $subHead.toggleClass('subHeadOn', $(this).scrollTop() > $navBar.height());
  });
});

$(function () {
  $(document).scroll(function () {
  var $cpColor = $(".csCurrentPage");
  $cpColor.toggleClass('currentPage', $(this).scrollTop() > $cpColor.height());
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
    $(this).removeClass("hoverDown").addClass("hoverUp");
  });

  $(".navBarItems li").on("mouseleave", function(){
    $(this).removeClass("hoverUp").removeClass("csHoverUp").addClass("hoverDown");
  });

  $(".csNavBarItems li").on("mouseenter", function(){
    $(this).removeClass("csHoverDown").addClass("csHoverUp");
  });

  $(".csNavBarItems li").on("mouseleave", function(){
    $(this).removeClass("csHoverUp").addClass("csHoverDown");
  });