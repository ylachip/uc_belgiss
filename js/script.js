$(document).ready(function () {
  $("i.fa-bars").click(function (event) {
    event.preventDefault();
    $("#overlay").css("display", "block");
    $("section.menu").css("display", "flex");
  });

  $(" #overlay").click(function () {
    $("section.menu").css("display", "none");
    $("#overlay").css("display", "none");
  });
});
$(window).resize(function () {
  if (window.innerWidth > 768) {
    $("section.menu").css("display", "flex");
  } else {
    $("section.menu").css("display", "none");
  }
});
