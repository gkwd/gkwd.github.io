var backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", (e) => {
    if (window.scrollY > 300) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none"
    }
});

backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo(0, 0)
})