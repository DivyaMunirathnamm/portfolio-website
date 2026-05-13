// Portfolio Website JavaScript

// Navbar shadow on scroll
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
    } else {
        navbar.style.boxShadow = "none";
    }
});


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


// Typing effect for Hero section
const roles = [
    "Aspiring Software Developer",
    "Frontend Developer",
    "Java Programmer",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement = document.querySelector(".hero p");

function typeEffect() {

    if (charIndex < roles[roleIndex].length) {

        typingElement.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {

    if (charIndex > 0) {

        typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        setTimeout(typeEffect, 300);
    }
}

document.addEventListener("DOMContentLoaded", () => {

    typingElement.textContent = "";

    typeEffect();
});


// Scroll reveal animation
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", revealCards);

function revealCards() {

    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        } else {

            card.style.opacity = "0";
            card.style.transform = "translateY(50px)";
        }
    });
}

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.6s ease";
});

revealCards();


// Button click animation
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";
    });
});


// Console message
console.log("Portfolio Website Loaded Successfully 🚀");