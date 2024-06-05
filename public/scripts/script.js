document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const prevBtns = document.querySelectorAll('.carousel-btn.prev');
    const nextBtns = document.querySelectorAll('.carousel-btn.next');

    // Function to handle click on previous button
    function prevSlide() {
        const currentSlide = carousel.querySelector('.carousel-item.active');
        const prevSlide = currentSlide.previousElementSibling || carousel.lastElementChild;
        currentSlide.classList.remove('active');
        prevSlide.classList.add('active');
    }

    // Function to handle click on next button
    function nextSlide() {
        const currentSlide = carousel.querySelector('.carousel-item.active');
        const nextSlide = currentSlide.nextElementSibling || carousel.firstElementChild;
        currentSlide.classList.remove('active');
        nextSlide.classList.add('active');
    }

    // Attach click event listeners to previous buttons
    prevBtns.forEach(function (btn) {
        btn.addEventListener('click', prevSlide);
    });

    // Attach click event listeners to next buttons
    nextBtns.forEach(function (btn) {
        btn.addEventListener('click', nextSlide);
    });
});
