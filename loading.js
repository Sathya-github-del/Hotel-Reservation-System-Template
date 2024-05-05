document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector(".loading-screen").style.display = "none";
        document.querySelector("main").style.display = "block";
    }, 2000);
});
