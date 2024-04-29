class Nav extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <nav id="navbar">
            <p id="logo"> Logo </p>
            <button class="nav-button resume">
                <a href="images/PM_SE_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
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

setTimeout(() => {
    const pathname = window.location.pathname;
    const homeButton = document.querySelector('.home');
    const aboutButton = document.querySelector('.about');
    const projectsButton = document.querySelector('.projects');
    const contactButton = document.querySelector('.contact');
    const viewportWidth = window.innerWidth;
    const logo = document.getElementById('logo');
    if (viewportWidth < 500) {
        logo.style.display = 'none';
    }
    if (pathname === '/index.html') {
        homeButton.style.display = 'none';
    } else if (pathname === '/about.html') {
        aboutButton.style.display = 'none';
    } else if (pathname === '/projects.html') {
        projectsButton.style.display = 'none';
    } else if (pathname === '/contact.html') {
        contactButton.style.display = 'none';
    }
});

// May use this again, may not
{
    /* <button id='email' onclick='copyText()'>
                    <p id='email-text'>patrick.mcguigan5@gmail.com</p> 
                </button>  */
}
