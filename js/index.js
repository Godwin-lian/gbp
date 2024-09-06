const slider = document.getElementById("slider");
const indicators = document.querySelectorAll(".indicator");
let currentSlide = 0;

function updateSlider() {
  slider.scrollTo({
    left: slider.offsetWidth * currentSlide,
    behavior: "smooth",
  });

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentSlide);
  });
}

document.getElementById("prev").addEventListener("click", () => {
  currentSlide = currentSlide > 0 ? currentSlide - 1 : indicators.length - 1;
  updateSlider();
});

document.getElementById("next").addEventListener("click", () => {
  currentSlide = currentSlide < indicators.length - 1 ? currentSlide + 1 : 0;
  updateSlider();
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentSlide = index;
    updateSlider();
  });
});

updateSlider();
