document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    const totalItems = slider.children.length;
    const visibleItems = 3; // Number of items visible at a time
    const itemWidth = 100 / visibleItems;

    function updateSliderPosition() {
        const offset = -(currentIndex * itemWidth);
        slider.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalItems - visibleItems) {
            currentIndex++;
            updateSliderPosition();
        }
    });

    updateSliderPosition(); // Initial call to set position
});
