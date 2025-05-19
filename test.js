document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio Website Loaded!");
});
// JavaScript to animate elements as you scroll
document.addEventListener("scroll", function() {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add("visible");
        }
    });
});
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
