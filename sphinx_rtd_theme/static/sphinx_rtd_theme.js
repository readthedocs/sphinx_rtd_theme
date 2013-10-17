$( document ).ready(function() {
  $(".icon-reorder").click(function () {
    $(".wy-nav-content-wrap").toggleClass("shift");
    $(".wy-nav-side").toggleClass("shift");
  });
});
