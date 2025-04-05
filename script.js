const testimonials = [
    { quote: "ModCraft has truly transformed our living space with their impeccable design furniture and expert services. The team was incredibly knowledgeable and attentive, guiding us through every step of the design process.", author: "- Elisa Wilson" },
    { quote: "Amazing service and high-quality designs! Highly recommend ModCraft for anyone looking to upgrade their home.", author: "- James Brown" },
    { quote: "Fantastic experience! The team was friendly, and the furniture fit perfectly with our aesthetic.", author: "- Sarah Lee" }
];

let currentIndex = 0;
const quoteElem = document.getElementById("quote");
const authorElem = document.getElementById("author");
const dotsContainer = document.getElementById("dots");

function updateTestimonial(index) {
    quoteElem.textContent = testimonials[index].quote;
    authorElem.textContent = testimonials[index].author;
    document.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

function createDots() {
    testimonials.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateTestimonial(currentIndex);
        });
        dotsContainer.appendChild(dot);
    });
}

document.querySelector(".prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentIndex);
});

document.querySelector(".next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
});

createDots();
updateTestimonial(currentIndex);




const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav__list');

burger.addEventListener('click', () => {
  navList.classList.toggle('active');
});