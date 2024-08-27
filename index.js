const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.slider-btn2');
const prevBtn = document.querySelector('.slider-btn1');

let currentIndex = 0;

function getSlidesToShow() {
    return window.innerWidth >= 990 ? 4 : 1; // 4 slides for screens >= 768px, 1 slide otherwise
}

function updateSliderPosition() {
    const slidesToShow = getSlidesToShow();
    const slideWidthPercentage = 100 / slidesToShow;
    const offset = -currentIndex * slideWidthPercentage; // Calculate offset based on slide width percentage
    slider.style.transform = `translateX(${offset}%)`;
}

nextBtn.addEventListener('click', () => {
    const slidesToShow = getSlidesToShow();
    currentIndex = Math.min(currentIndex + 1, slides.length - slidesToShow);
    updateSliderPosition();
});

prevBtn.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateSliderPosition();
});

// Adjust slider position when window is resized
window.addEventListener('resize', updateSliderPosition);

// Trigger the initial positioning
updateSliderPosition();
