document.addEventListener("DOMContentLoaded", function () {
  var wrapper = document.querySelector(".wy-github-stars");
  var counter = wrapper.querySelector(".gh-count");

  fetch("https://api.github.com/repos/cilium/cilium")
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      counter.style.display = "block";
      counter.innerHTML = result.stargazers_count;
    })
    .catch(function (error) {
      console.error(error);
    });
});
