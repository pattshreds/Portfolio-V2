const carouselBtns = document.querySelector('.carousel-btn');
const nav = document.querySelectorAll('.position-indicator');
const nextBtns = document.querySelectorAll('.btn-next');
const prevBtns = document.querySelectorAll('.btn-prev');

// When I click previous, move slides to the previous slide.

for (const btn of prevBtns) {
    btn.addEventListener('click', (e) => {
        const imageList =
            e.target.parentElement.parentElement.querySelector('.images-list');
        const currentSlide = imageList.querySelector('.current-slide');
        const currentDot =
            e.target.parentElement.parentElement.querySelector('.current-dot');
        const prevSlide = currentSlide.previousElementSibling;
        const prevDot = currentDot.previousElementSibling;
        console.log(imageList);

        if (prevSlide) {
            currentSlide.classList.remove('current-slide');
            prevSlide.classList.add('current-slide');
            currentDot.classList.remove('current-dot');
            prevDot.classList.add('current-dot');
        } else {
            console.log('No previous slides');
        }
    });
}

// When I click next, move slides to the next slide.

for (const btn of nextBtns) {
    btn.addEventListener('click', (e) => {
        const imageList =
            e.target.parentElement.parentElement.querySelector('.images-list');
        const currentSlide = imageList.querySelector('.current-slide');
        const currentDot =
            e.target.parentElement.parentElement.querySelector('.current-dot');
        const nextSlide = currentSlide.nextElementSibling;
        const nextDot = currentDot.nextElementSibling;

        if (nextSlide) {
            currentSlide.classList.remove('current-slide');
            nextSlide.classList.add('current-slide');
            currentDot.classList.remove('current-dot');
            nextDot.classList.add('current-dot');
        } else {
            console.log("Can't find more slides");
        }
    });
}

// When I click position indicators, move to that slide.

for (const dot of nav) {
    dot.addEventListener('click', (e) => {
        const imageList =
            e.target.parentElement.parentElement.querySelector('.images-list');
        const navDots =
            e.target.parentElement.parentElement.querySelector('.carousel-nav');
        const slides = Array.from(imageList.children);
        const dotsArr = Array.from(navDots.children);
        const currentSlide = imageList.querySelector('.current-slide');
        const currentDot =
            e.target.parentElement.parentElement.querySelector('.current-dot');
        const target = e.target;
        const targetIndex = dotsArr.findIndex((dot) => dot === target);
        const targetSlide = slides[targetIndex];
        const targetDot = e.target;

        if (target) {
            currentSlide.classList.remove('current-slide');
            targetSlide.classList.add('current-slide');
            currentDot.classList.remove('current-dot');
            targetDot.classList.add('current-dot');
        } else {
            null;
        }
    });
}
