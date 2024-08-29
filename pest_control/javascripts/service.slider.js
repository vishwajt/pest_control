document.addEventListener("DOMContentLoaded", function () {
    const servSlider = document.querySelector(".serv-slider");
    const servSlides = document.querySelectorAll(".serv-slide .card");
    const prevButton = document.querySelector(".serv-prev");
    const nextButton = document.querySelector(".serv-next");
    const cardsToShow = 3; // Number of cards to display at a time

    let currentIndex = 0;

    // Set the width of each card based on the number of cards to show
    servSlides.forEach((card) => {
        card.style.flex = `0 0 30%`;
    });

    function updateSliderPosition() {
        servSlider.style.transform = `translateX(-${currentIndex * 30}%)`;
    }

    nextButton.addEventListener("click", () => {
        if (currentIndex < servSlides.length - cardsToShow) {
            currentIndex++;
            updateSliderPosition();
        }
    });

    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });

    updateSliderPosition();
});
