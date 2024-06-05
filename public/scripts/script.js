// Scripts
const items = document.querySelectorAll('.carousel-item');
const carouselPrev = document.querySelectorAll('.carousel-btn.next')
const carouselNext = document.querySelectorAll('.carousel-btn.next')
let currentItem = 0;

function showItem(index) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

carouselPrev.addEventListener('click', () => {
    currentItem = (currentItem > 0) ? currentItem - 1 : items.length - 1;
    showItem(currentItem);
});

carouselNext.addEventListener('click', () => {
    currentItem = (currentItem + 1) % items.length;
    showItem(currentItem);
});

showItem(currentItem);