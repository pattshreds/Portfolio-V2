class Nav extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar">
            <div class='buttons-box'>
                <button class="resume-btn">
                    <a href="images/Resume_PM.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                </button>
                <p id='email-instr'> click email to copy </p>
                <button id='email' onclick='copyText()'>
                    <p id='email-text'>patrick.mcguigan5@gmail.com</p> 
                </button> 
            </div>
            <div class="dropdown">
                <button class="dropdown-btn">
                    <img src="images/arrow-thin-bottom-icon.svg" alt="dropdown" class="menu-img">
                </button>
            </div>
        </nav>
        `;
    }
}

customElements.define('nav-component', Nav);