// Active Navbar Highlight

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});


// Back To Top Button

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.classList.add("top-btn");

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Dark Mode Toggle

const darkBtn = document.createElement("button");

darkBtn.innerHTML = "🌙";

darkBtn.classList.add("dark-btn");

document.body.appendChild(darkBtn);

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");
});


// Project Card Hover Glow

const projectCards = document.querySelectorAll(".card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow = "0 0 25px rgba(0,255,255,0.6)";
    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "none";
    });
});


// Loading Animation

window.addEventListener("load", () => {

    document.body.classList.add("loaded");
});


// Footer Year Auto Update

const footerYear = document.querySelector(".year");

if (footerYear) {

    footerYear.textContent = new Date().getFullYear();
}