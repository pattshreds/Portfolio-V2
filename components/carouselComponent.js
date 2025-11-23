class Carousel extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="carousel-home">
            <div class="carousel">
                <ul class="images-list">
                    <li class="slide current-slide">
                    </li>
                    <li class="slide">
                    </li>
                    <li class="slide">
                    </li>
                </ul>
                <div class="button-next-container">
                    <button class="carousel-btn btn-next">
                        <img src="./images/arrow-right.png" alt="Next" />
                    </button>
                </div>
                <div class="button-prev-container">
                    <button class="carousel-btn btn-prev">
                        <img src="./images/arrow-left.png" alt="Previous" />
                    </button>
                </div>
                <div class="carousel-nav pokesearch">
                    <button class="position-indicator current-dot"></button>
                    <button class="position-indicator"></button>
                    <button class="position-indicator"></button>
                </div> 
                <section class="project-links">
                    <button class="project-link-button">          
                    </button>
                    <button class="project-link-button">                    
                    </button>
                </section>
            </div>
        </div>    
        `;
    }
}

customElements.define('carousel-component', Carousel);
