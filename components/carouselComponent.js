class Carousel extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="carousel carousel-1">
                <ul class="images-list">
                    <li class="slide current-slide">
                    </li>
                    <li class="slide">
                    </li>
                    <li class="slide">
                    </li>
                </ul>
                <div class="button-container">
                    <button class="carousel-btn btn-prev">
                        <img src="./images/carousel-arrow.png" alt="Previous">
                    </button>
                    <button class="carousel-btn btn-next">
                        <img src="./images/carousel-arrow.png" alt="Next" style="transform:rotate(180deg)">
                    </button>
                </div>
                <div class="carousel-nav pokesearch">
                    <button class="position-indicator current-dot"></button>
                    <button class="position-indicator"></button>
                    <button class="position-indicator"></button>
                </div>
            </div>   
        `;
    }
}

// Below is the logic I've used to append each image to the carousel. Right now it only works one time in the HTML doc, using it a second time results in the slides being empty, no images are being appended. I intend to figure that out eventually so I can reuse this component multiple times in one page and cycle through each project images folder.

let imagesArr = ['1.png', '2.png', '3.png'];
let slideCollection = document.getElementsByClassName('slide');
let slideIterator = 0;

window.addEventListener('load', function () {
    while (imagesArr.length > 0 && slideIterator < 3) {
        const newImage = document.createElement('img');
        newImage.src = 'images/' + 'pokesearch' + '/' + imagesArr[0];
        newImage.className = 'image';
        newImage.setAttribute('alt', 'pokesearch');
        slideCollection[slideIterator].appendChild(newImage);
        slideIterator++;
        imagesArr.shift();
        slideIterator === 3 ? (slideIterator = 0) : null;
    }
});

// Working on some things

// const nextBtn = document.querySelectorAll('.btn-next');
// const prevBtn = document.querySelectorAll('.btn-prev');
// const carouselBody = document.querySelector('.carousel');
// const rect = carouselBody.getBoundingClientRect();

// console.log(rect);
// console.log('rect width = ' + rect.width);
// console.log('rect.width times .25 = ' + rect.width * 0.25);

customElements.define('carousel-component', Carousel);
