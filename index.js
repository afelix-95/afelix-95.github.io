const backtotop = document.querySelector(".back-to-top");
const observertarget = document.querySelector("header");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            backtotop.classList.add("shown");
        } else {
            backtotop.classList.remove("shown");
        }
    });
});

observer.observe(observertarget);