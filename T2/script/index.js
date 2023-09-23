const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}

function updateSlider() {
  const translateXValue = -currentIndex * 100 + "%";
  slider.style.transform = `translateX(${translateXValue})`;
}

const slideInterval = 3000;

setInterval(nextSlide, slideInterval);






const slider2 = document.querySelector('.slider2');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slideWidth = document.querySelector('.slide22').offsetWidth;
let currentIndex2 = 0;

function goToSlide(index) {
    currentIndex2 = index;
    const translateX = -currentIndex2 * slideWidth;
    slider2.style.transform = `translateX(${translateX}px)`;
}

prevButton.addEventListener('click', () => {
    currentIndex2 = (currentIndex2 - 1 + 5) % 5; // 5 is the total number of slides
    goToSlide(currentIndex2);
});

nextButton.addEventListener('click', () => {
    currentIndex2 = (currentIndex2+ 1) % 5; // 5 is the total number of slides
    goToSlide(currentIndex2);
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        prevButton.click();
    } else if (event.key === 'ArrowRight') {
        nextButton.click();
    }
});

// Initialize the slider
goToSlide(currentIndex);
