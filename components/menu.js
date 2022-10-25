class Menu extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = `
        <div class="dropdown-toggle-container">
            <p class='close-menu-btn'>x</p>
            <a class='dropdown-item' href="portfolio.html">Home</a>
            <a class='dropdown-item' href="about.html">About</a>
            <a class='dropdown-item' href="projects.html">Projects</a>
            <a class='dropdown-item' href="contact.html">Contact</a>
        </div>
        `;
        
    }
}

customElements.define('menu-component', Menu);

