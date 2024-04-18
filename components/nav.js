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
            <button id="dropdown-button">
                <p id="dropdown-button-text"> menu </p>
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
