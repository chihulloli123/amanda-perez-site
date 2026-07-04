// Current year
const year = document.getElementById("yr");
if (year) {
    year.textContent = new Date().getFullYear();
}

// Reveal animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
});

// Mobile Menu
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.getElementById("mob");

if (hamburger && mobileNav) {

    hamburger.addEventListener("click", () => {
        mobileNav.classList.toggle("open");
    });

    mobileNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileNav.classList.remove("open");
        });
    });

}