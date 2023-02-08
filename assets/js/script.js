$(document).ready(function () {
  let caption = {
    padding: "15px",
    border: "1px solid black",
  };
  let text = {
    padding: "15px",
  };

  $(".title").css(caption);
  $(".info").css(text);
  $(".caption1").on("click", function () {
      $(".text2").slideUp();
      $(".text3").slideUp();
    $(".text1").slideToggle();
    $(".first").toggleClass("active");
    $(".second").removeClass("active");
    $(".third").removeClass("active");
  });

  $(".caption2").on("click", function () {

      $(".text1").slideUp();
      $(".text3").slideUp();
    $(".text2").slideToggle();
    $(".second").toggleClass("active");
    $(".third").removeClass("active");
    $(".first").removeClass("active");

  });
  $(".caption3").on("click", function () {

      $(".text2").slideUp();
      $(".text1").slideUp();
    $(".text3").slideToggle();
    $(".third").toggleClass("active");
    $(".second").removeClass("active");
    $(".first").removeClass("active");
    
  });
});
