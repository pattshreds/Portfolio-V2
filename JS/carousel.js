const carouselBtns = document.querySelector('.carousel-btn');
const nav = document.querySelectorAll('.position-indicator');
const nextBtns = document.querySelectorAll('.btn-next');
const prevBtns = document.querySelectorAll('.btn-prev');
const buttonContainers = document.querySelectorAll('.button-container');
let slideCollection = document.getElementsByClassName('slide');
let slideIterator = 0;
let projectNamesIterator = 0;
let imagesSourceIterator = 0;
let carouselClass = 1;
const projectNamesArray = ['Pokesearch', 'Moodset', 'PERN To-Do'];
const projectLinkButtons = Array.from(
    document.querySelectorAll('.project-link-button')
);
const carouselBodies = Array.from(document.querySelectorAll('.carousel'));
const imagesSourceArray = [
    'images/Pokesearch/',
    'images/Moodset/',
    'images/pernToDo/',
    'images/hangman/',
];
const projectExternalLinksArray = [
    [
        'https://github.com/pattshreds/pokedex_app',
        'https://main.darm3e1jlwi31.amplifyapp.com/',
    ],
    ['https://github.com/pattshreds/music-app', 'https://moodsetapp.com'],
    ['https://github.com/pattshreds/PERN-todo'],
    [
        'https://github.com/pattshreds/hangman-game',
        'https://hangman-project-2be2d.web.app/',
    ],
];

// ----------------------------------------------------------------- //

// Set positioning for the prev and next buttons.

(function positionNavButtons() {
    for (carousel in carouselBodies) {
        let carouselWidth = carouselBodies[carousel].offsetWidth;
        buttonContainers.forEach((buttonContainer) => {
            buttonContainer.style.gap = `${carouselWidth}px`;
        });
    }
    window.addEventListener('resize', positionNavButtons);
})();

// ----------------------------------------------------------------- //

// Populate the carousels with the project images.

for (carousel in carouselBodies) {
    let imagesArray = ['1.png', '2.png', '3.png'];
    carouselBodies[carousel].classList.add(`carousel-${carouselClass}`);
    while (imagesArray.length > 0) {
        let newImage = document.createElement('img');
        newImage.src = `${imagesSourceArray[imagesSourceIterator]}${imagesArray[0]}`;
        newImage.className = 'image';
        newImage.setAttribute(
            'alt',
            `${projectNamesArray[projectNamesIterator]}`
        );
        slideCollection[slideIterator].appendChild(newImage);
        imagesArray.shift();
        slideIterator++;
    }
    projectNamesIterator++;
    imagesSourceIterator++;
    carouselClass++;
}

// ----------------------------------------------------------------- //

// Populate project-links divs with the hrefs

let n = 0;
let x = 0;
let linkTextIndex = 0;
for (button in projectLinkButtons) {
    const linkTextArray = ['GitHub', 'View'];
    // The condition below will render a button if a link exists in the array
    if (projectExternalLinksArray[n][x]) {
        let newLink = document.createElement('a');
        newLink.href = `${projectExternalLinksArray[n][x]}`;
        newLink.innerHTML = `${linkTextArray[linkTextIndex]}`;
        projectLinkButtons[button].appendChild(newLink);
    } else {
        // if link [x][n] does not exist, remove the corresponding button
        projectLinkButtons[button].remove();
    }
    x++;
    linkTextIndex++;
    if (x > 1) {
        n++;
        x = 0;
        linkTextIndex = 0;
    }
}

// ----------------------------------------------------------------- //

// When I click prev, move slides to the previous slide.

for (const btn of prevBtns) {
    btn.addEventListener('click', (e) => {
        const imageList =
            e.target.parentElement.parentElement.parentElement.querySelector(
                '.images-list'
            );
        const currentSlide = imageList.querySelector('.current-slide');
        const currentDot =
            e.target.parentElement.parentElement.parentElement.querySelector(
                '.current-dot'
            );
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

// ----------------------------------------------------------------- //

// When I click next, move slides to the next slide.

for (const btn of nextBtns) {
    btn.addEventListener('click', (e) => {
        console.log(e.target.closest('.images-list'));
        const imageList =
            e.target.parentElement.parentElement.parentElement.querySelector(
                '.images-list'
            );
        // e.target.closest('.images-list');
        const currentSlide = imageList.querySelector('.current-slide');
        const currentDot =
            e.target.parentElement.parentElement.parentElement.querySelector(
                '.current-dot'
            );
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

// ----------------------------------------------------------------- //

// When I click position indicators, move to that slide.

for (const dot of nav) {
    dot.addEventListener('click', (e) => {
        const imageList =
            e.target.parentElement.parentElement.parentElement.querySelector(
                '.images-list'
            );
        const navDots =
            e.target.parentElement.parentElement.parentElement.querySelector(
                '.carousel-nav'
            );
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

// ----------------------------------------------------------------- //

// When I use the keyboard arrows, the most visible carousel will scroll

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        // Find the carousel that's most visible in the viewport
        let mostVisibleCarousel = null;
        let maxVisibility = 0;

        carouselBodies.forEach((carousel) => {
            const rect = carousel.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Calculate how much of the carousel is visible
            const visibleTop = Math.max(0, rect.top);
            const visibleBottom = Math.min(viewportHeight, rect.bottom);
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);
            const visibilityRatio = visibleHeight / rect.height;

            if (visibilityRatio > maxVisibility) {
                maxVisibility = visibilityRatio;
                mostVisibleCarousel = carousel;
            }
        });

        if (mostVisibleCarousel && maxVisibility > 0.3) {
            // At least 30% visible
            const imageList = mostVisibleCarousel.querySelector('.images-list');
            const currentSlide = imageList.querySelector('.current-slide');
            const carouselNav =
                mostVisibleCarousel.querySelector('.carousel-nav');
            const currentDot = carouselNav.querySelector('.current-dot');

            if (e.key === 'ArrowLeft') {
                // Previous slide
                const prevSlide = currentSlide.previousElementSibling;
                const prevDot = currentDot.previousElementSibling;

                if (prevSlide) {
                    currentSlide.classList.remove('current-slide');
                    prevSlide.classList.add('current-slide');
                    currentDot.classList.remove('current-dot');
                    prevDot.classList.add('current-dot');
                }
            } else if (e.key === 'ArrowRight') {
                // Next slide
                const nextSlide = currentSlide.nextElementSibling;
                const nextDot = currentDot.nextElementSibling;

                if (nextSlide) {
                    currentSlide.classList.remove('current-slide');
                    nextSlide.classList.add('current-slide');
                    currentDot.classList.remove('current-dot');
                    nextDot.classList.add('current-dot');
                }
            }
        }
    }
});

// ----------------------------------------------------------------- //

// Swipe navigation for mobile and touchscreen

carouselBodies.forEach((carousel) => {
    let touchStartX = 0;
    let touchEndX = 0;
    const swipeThreshold = 50; // Minimum distance in pixels for a swipe

    carousel.addEventListener(
        'touchstart',
        (e) => {
            touchStartX = e.changedTouches[0].screenX;
        },
        { passive: true }
    );

    carousel.addEventListener(
        'touchend',
        (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe(carousel);
        },
        { passive: true }
    );

    function handleSwipe(carouselElement) {
        const imageList = carouselElement.querySelector('.images-list');
        const currentSlide = imageList.querySelector('.current-slide');
        const carouselNav = carouselElement.querySelector('.carousel-nav');
        const currentDot = carouselNav.querySelector('.current-dot');

        // Swiped left (next slide)
        if (touchEndX < touchStartX - swipeThreshold) {
            const nextSlide = currentSlide.nextElementSibling;
            const nextDot = currentDot.nextElementSibling;

            if (nextSlide) {
                currentSlide.classList.remove('current-slide');
                nextSlide.classList.add('current-slide');
                currentDot.classList.remove('current-dot');
                nextDot.classList.add('current-dot');
            }
        }

        // Swiped right (previous slide)
        if (touchEndX > touchStartX + swipeThreshold) {
            const prevSlide = currentSlide.previousElementSibling;
            const prevDot = currentDot.previousElementSibling;

            if (prevSlide) {
                currentSlide.classList.remove('current-slide');
                prevSlide.classList.add('current-slide');
                currentDot.classList.remove('current-dot');
                prevDot.classList.add('current-dot');
            }
        }
    }
});
