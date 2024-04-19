class Nav extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <nav id="navbar">
            <p id="logo"> Placeholder </p>
            <button id="resume-button">
                <a href="images/PM_SE_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </button>
            <button class="nav-button home-button">
                <a href="./index.html"> Home </a>
            </button>
            <button class="nav-button about-button">
                <a href="./about.html"> About </a>
            </button>
            <button class="nav-button projects-button">
                <a href="./projects.html"> Projects </a>
            </button>
            <button class="nav-button contact-button">
                <a href="./contact.html"> Contact </a>
            </button>
        </nav>
        `;
    }
}

customElements.define('nav-component', Nav);

{
    /* <button id='email' onclick='copyText()'>
                    <p id='email-text'>patrick.mcguigan5@gmail.com</p> 
                </button>  */
}
