// ------коментарі

let testimonials = JSON.parse(localStorage.getItem("testimonials")) || [
  {
    quote: "ModCraft has truly transformed our living space with their impeccable design furniture and expert services. The team was incredibly knowledgeable and attentive, guiding us through every step of the design process.",
    author: "- Elisa Wilson"
  },
  {
    quote: "Amazing service and high-quality designs! Highly recommend ModCraft for anyone looking to upgrade their home.",
    author: "- James Brown"
  },
  {
    quote: "Fantastic experience! The team was friendly, and the furniture fit perfectly with our aesthetic.",
    author: "- Sarah Lee"
  }
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
    testimonials.forEach((_, index) => { // (_)означає що нас не цікавить сам улемент , лише його індекс.
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

const commentForm = document.getElementById("commentForm");
const userQuote = document.getElementById("userQuote");
const userName = document.getElementById("userName");

commentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newQuote = userQuote.value.trim();
    const newAuthor = userName.value.trim();

    if (newQuote && newAuthor) {
        // Додаємо новий коментар у масив
        testimonials.push({
            quote: newQuote,
            author: `- ${newAuthor}`
        });
saveTestimonials();
        // Створюємо нову крапку
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.addEventListener("click", () => {
            currentIndex = testimonials.length - 1;
            updateTestimonial(currentIndex);
        });
        dotsContainer.appendChild(dot);


        // Показуємо новий коментар
        currentIndex = testimonials.length - 1;
        updateTestimonial(currentIndex);

        // Очищаємо форму
        userQuote.value = "";
        userName.value = "";
    }
});

function saveTestimonials() {
  localStorage.setItem("testimonials", JSON.stringify(testimonials));
}

// бургер меню

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector('.burger'); // кнопка меню
  const navList = document.querySelector('.nav__list'); // список навігації

  if (burger && navList) {
    burger.addEventListener('click', () => {
      navList.classList.toggle('active'); // відкриває/закриває меню
      burger.classList.toggle('active');
    });
  }
});




// ----------------------додав збереження емейлу в локалсторідж

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".subscribe__form");
  const emailInput = document.querySelector("#email");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const email = emailInput.value.trim();

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    saveEmailToLocalStorage(email);

    emailInput.value = "";

    alert("Thank you for subscribing!");
  });

  function validateEmail(email) {
    
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function saveEmailToLocalStorage(email) {

    let emails = JSON.parse(localStorage.getItem("subscribedEmails")) || [];

    if (!emails.includes(email)) {
      emails.push(email);
      localStorage.setItem("subscribedEmails", JSON.stringify(emails));
    }
  }
});



// ------cлайдер---


  const wrapper = document.querySelector('.swiper-wrapper');
  const slides = document.querySelectorAll('.swiper-slide');
  const btnNext = document.querySelector('.swiper__button-next');
  const btnPrev = document.querySelector('.swiper__button-prev');
  const container = document.querySelector('.swiper-container');

  const slideWidth = 180;
  let visibleSlides = 5;
  let slideIndex = 0;

    function calculateVisibleSlides() {
    const containerWidth = container.offsetWidth;
    visibleSlides = Math.floor(containerWidth / slideWidth);
  }

  function updateSlider() {
    calculateVisibleSlides()
    const maxIndex = slides.length - visibleSlides;
    
    
    if (slideIndex > maxIndex) slideIndex = 0;
    if (slideIndex < 0) slideIndex = maxIndex;
    const offset = -slideIndex * slideWidth;
    wrapper.style.transform = `translateX(${offset}px)`;
  }

  btnNext.addEventListener('click', () => {
    slideIndex++;
    updateSlider();
  });

  btnPrev.addEventListener('click', () => {
    slideIndex--;
    updateSlider();
  });

  updateSlider();

