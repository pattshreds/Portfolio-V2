const carouselBtns = document.querySelector('.carousel-btn');
const nav = document.querySelectorAll('.position-indicator');
const nextBtns = document.querySelectorAll('.btn-next');
const prevBtns = document.querySelectorAll('.btn-prev');
const buttonContainers = document.querySelectorAll('.button-container');
const projectLinkButtons = Array.from(
    document.querySelectorAll('.project-link-button')
);
const carouselBodies = Array.from(document.querySelectorAll('.carousel'));
const imagesSourceArray = [
    'images/Pokesearch/',
    'images/Moodset/',
    'images/IF/',
];
const projectExternalLinksArray = [
    [
        'https://github.com/pattshreds/pokedex_app',
        'https://main.darm3e1jlwi31.amplifyapp.com/',
    ],
    [
        'https://github.com/pattshreds/music-app',
        'https://moodset.up.railway.app/landing/landing',
    ],
    [
        'https://github.com/ryanklintworth/infinite-savannah',
        'https://infinite-savannah-23628.herokuapp.com/',
    ],
];
const projectNamesArray = ['Pokesearch', 'Moodset', 'Infinite Savannah'];
let slideCollection = document.getElementsByClassName('slide');
let slideIterator = 0;
let projectNamesIterator = 0;
let imagesSourceIterator = 0;
let carouselClass = 1;

// ----------------------------------------------------------------- //

// Set positioning for the prev and next buttons.

(function positionNavButtons() {
    for (carousel in carouselBodies) {
        let carouselWidth = carouselBodies[carousel].offsetWidth;
        buttonContainers.forEach((button) => {
            button.style.gap = `${carouselWidth}px`;
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

window.addEventListener('load', function () {
    for (let i = 0; i < projectLinkButtons.length; i++) {
        const newLink = this.document.createElement('a');
        const linkHTML = ['GitHub', 'View'];
        let n = 0;
        let x = 0;
        while (i <= 1) {
            newLink.href = projectExternalLinksArray[n][x];
            newLink.innerHTML = linkHTML[x];
            projectLinkButtons[i].appendChild(newLink);
            // console.log(projectLinkButtons[i]);
            x++;
            i++;
        }
        // n++;
        // console.log(`n: ${n} \n\ x: ${x} \n\ i: ${i}`);
        // while (i > 1 && i <= 3) {
        //     const newLink = this.document.createElement('a');
        //     newLink.href = projectExternalLinksArray[n][x];
        //     newLink.innerHTML = linkHTML[x];
        //     projectLinkButtons[i].appendChild(newLink);
        //     x++;
        //     i++;
        // }
    }
});

// for (const button in projectLinkButtons) {
//     let i = 1;
//     console.log(projectLinkButtons[button] + i);
//     i++;
// }

// for (const button of projectLinkButtons) {
//     const linkHTML = ['GitHub', 'View'];
//     let newLink = document.createElement('a');
//     let i = 0;
//     let n = 0;
//     let x = 0;
//     newLink.href = projectExternalLinksArray[i][n];
//     newLink.innerHTML = linkHTML[x];
//     button.appendChild(newLink);
//     i++;
//     n++;
//     x++;
// }

// ----------------------------------------------------------------- //

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

window.onresize = positionNavButtons;
