class Carousel extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
            .carousel {
                position: relative;
                height: 300px;
                width: 80%;
                max-width: 30em;
                margin: 0 auto;
            }
            
            .images-list {
                position: relative;
                height: 100%;
                padding: 0;
                margin: 0;
            }
            
            .slide, .current-slide {
                height: 100%;
                list-style: none;
            }
            
            .slide {
                display: none;
            }
            
            .current-slide {
                display: block;
            }
            
            .image {
                position: relative;
                height: 100%;
                width: 100%;
                object-fit: scale-down;
            }
            
            /* Carousel Arrow buttons */
            
            .carousel-btn {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                border: none;
                margin: 0;
                background: transparent;
                width: 3em;
                cursor: pointer;
                opacity: 75%;
            }
            
            .btn-prev {
                left: 2.2em;
            }
            
            .btn-next {
                right: 2.2em;
            }
            
            /* Carousel Nav Buttons */
            
            .carousel-nav {
                display: flex;
                justify-content: center;
                padding: 5px;
            }
            
            .position-indicator {
                border: 0;
                border-radius: 50%;
                width: 1em;
                height: 1em;
                background: rgba(0, 0, 0, .3);
                margin: 1em 5px;
                cursor: pointer;
            }
            
            .current-dot {
                background: rgba(0, 0, 0, .75)
            }
            </style>
            <div class="carousel">

            <ul class="images-list">
                <li class="slide current-slide">

                </li>
                <li class="slide">

                </li>
                <li class="slide">

                </li>
            </ul>

            <button class="carousel-btn btn-prev">
                <img src="../images/arrow-left.svg" alt="Previous">
            </button>
            <button class="carousel-btn btn-next">
                <img src="
                ../images/arrow-right.svg" alt="Next">
            </button>

            <div class="carousel-nav">
                <button class="position-indicator current-dot"></button>
                <button class="position-indicator"></button>
                <button class="position-indicator"></button>
            </div>

        </div>
        `;
    }
}

// Below is the logic I've used to append each image to the carousel. Right now it only works one time in the HTML doc, using it a second time results in the slides being empty, no images are being appended. I intend to figure that out eventually so I can reuse this component multiple times in one page and cycle through each project images folder. 

let imagesArr = [
    '1.png', '2.png', '3.png' 
];
let slideCollection = document.getElementsByClassName('slide');
let slideIterator = 0;

window.addEventListener('load', function() {
    while (imagesArr.length > 0 && slideIterator < 3) {
        const newImage = document.createElement('img');
        newImage.src = 'images/' + 'pokesearch' + '/' + imagesArr[0];
        newImage.className = 'image';
        newImage.setAttribute('alt', 'pokesearch');
        slideCollection[slideIterator].appendChild(newImage);
        slideIterator++;
        imagesArr.shift();
        slideIterator === 3 ? slideIterator = 0 : null ;
    };
});


customElements.define('carousel-component', Carousel);