document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".btn").addEventListener("mouseover", function () {
        this.style.background = "#0056b3";
    });

    document.querySelector(".btn").addEventListener("mouseleave", function () {
        this.style.background = "#0080ff";
    });
});
