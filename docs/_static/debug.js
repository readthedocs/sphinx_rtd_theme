// Add debug actions to flyout menu

$(function () {
  $("[data-toggle='rst-debug-badge']").on("click", function () {
    $("[data-toggle='rst-versions']").toggleClass("rst-badge");
  });
})
