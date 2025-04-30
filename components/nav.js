class Nav extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <nav id="navbar">
            <p id="logo"><a href="./index.html"> &lt;pmworks /&gt; </a></p>
            <button class="nav-button resume">
                <a href="images/patrick_mcguigan_resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </button>
            <button class="nav-button github">
                <a href="https://github.com/pattshreds" target="_blank" rel="noopener noreferrer">GitHub</a>
            </button>
            <button class="nav-button home">
                <a href="./index.html"> Home </a>
            </button>
            <button class="nav-button about">
                <a href="./about.html"> About </a>
            </button>
            <button class="nav-button projects">
                <a href="./projects.html"> Projects </a>
            </button>
            <button class="nav-button contact">
                <a href="./contact.html"> Contact </a>
            </button>
        </nav>
        `;
    }
}

customElements.define('nav-component', Nav);
