document.addEventListener("DOMContentLoaded", function () {
    const servSlider = document.querySelector(".serv-slider");
    const servSlides = document.querySelectorAll(".serv-slide .card");
    const prevButton = document.querySelector(".serv-prev");
    const nextButton = document.querySelector(".serv-next");
    const cardsToShow = 3;
    const cardsToShowSmall = 2;
    let currentIndex = 0;
    const windowWidth = window.innerWidth;

    // Set the width of each card based on the number of cards to show
    servSlides.forEach((card) => {
        if(windowWidth > 768) {
            card.style.flex = `0 0 29.5%`;
        } else if(windowWidth <= 768 & windowWidth >= 590){
            card.style.flex = `0 0 23.5%`;
        } else {
            card.style.flex = `0 0 23.5%`;
        }
    });

    function updateSliderPosition() {
        if(windowWidth > 768) {
            servSlider.style.transform = `translateX(-${currentIndex * 33.33}%)`;
        } else if(windowWidth <= 768 & windowWidth >= 590){
            servSlider.style.transform = `translateX(-${currentIndex * 34}%)`;
        } else {
            servSlider.style.transform = `translateX(-${currentIndex * 49}%)`;
        }
    }

    nextButton.addEventListener("click", () => {
        if(windowWidth > 768) {
            if (currentIndex < servSlides.length - cardsToShow) {
                currentIndex++;
                updateSliderPosition();
            }
        } else if(windowWidth <= 768 & windowWidth >= 590){
            if (currentIndex < servSlides.length - cardsToShow) {
                currentIndex++;
                updateSliderPosition();
            }
        } else {
            if (currentIndex < servSlides.length - cardsToShowSmall) {
                currentIndex++;
                updateSliderPosition();
            }
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
