document.addEventListener("DOMContentLoaded", function () {
  const htmlFiles = [
    "StormRunner.html",
    "Fahrenheit.html",
    "Skyrush.html",
    "Comet.html",
    "Candymonium.html",
    "Trailblazer.html",
  ];

   const randomPageButton = document.getElementById("b1");

  if (randomPageButton) {
    randomPageButton.addEventListener("click", function () {
      const randomIndex = Math.floor(Math.random() * htmlFiles.length);
      const randomFile = htmlFiles[randomIndex];
      window.location.href = randomFile;
    });
  }
  const searchButton = document.getElementById("b2");

  if (searchButton) {
    searchButton.addEventListener("click", function () {
      window.location.href="Search.html"
    })
  }
});
