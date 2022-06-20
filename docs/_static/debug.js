// Add debug actions to flyout menu.
document.addEventListener("DOMContentLoaded", function () {
  let element = document.querySelector("[data-toggle='rst-debug-badge']");
  element.addEventListener("click", function () {
    $("[data-toggle='rst-versions']").toggleClass("rst-badge");
  });
});
