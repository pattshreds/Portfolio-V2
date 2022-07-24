const imageList = document.querySelector('.images-list');
const slides = Array.from(imageList.children);
const nextBtn = document.querySelector('.btn-next');
const prevBtn = document.querySelector('.btn-prev');
const nav = document.querySelector('.carousel-nav');
const dots = Array.from(nav.children);


// When I click previous, move slides to the previous slide.

prevBtn.addEventListener('click', e => {
    const currentSlide = imageList.querySelector('.current-slide');
    const currentDot = nav.querySelector('.current-dot');
    const prevSlide = currentSlide.previousElementSibling;
    const nextDot = currentDot.previousElementSibling;

    if (prevSlide) {
        currentSlide.classList.remove('current-slide');
        prevSlide.classList.add('current-slide');
        currentDot.classList.remove('current-dot');
        nextDot.classList.add('current-dot');
    } else {
        null
    }
});

// When I click next, move slides to the next slide.

nextBtn.addEventListener('click', e => {
    const currentSlide = imageList.querySelector('.current-slide');
    const currentDot = nav.querySelector('.current-dot');
    const nextSlide = currentSlide.nextElementSibling;
    const nextDot = currentDot.nextElementSibling;

    if (nextSlide) {
        currentSlide.classList.remove('current-slide');
        nextSlide.classList.add('current-slide');
        currentDot.classList.remove('current-dot');
        nextDot.classList.add('current-dot');
    } else {
        null
    }    
});



// When I click position indicators, move to that slide.

nav.addEventListener('click', e => {
    const currentSlide = imageList.querySelector('.current-slide');
    const currentDot = nav.querySelector('.current-dot');
    const target = e.target.closest('button');
    const targetIndex = dots.findIndex(dot => dot === target);
    const targetSlide = slides[targetIndex];
    const targetDot = dots[targetIndex];

    if (target) {
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
        currentDot.classList.remove('current-dot');
        targetDot.classList.add('current-dot');
    } else {
        null
    }    
});
