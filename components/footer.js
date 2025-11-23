class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <footer id="footer-container">
            <div id="misc">
                <p> © 2025 Patrick Mcguigan </p>
            </div>
            <div id="icon-links">
                <a href="./contact.html">
                    <img src="./images/footer-icons/email.png" alt="Icon made by Freepik from www.flaticon.com" class="icon" />
                </a>
                <a href="https://www.github.com/pattshreds">
                    <img src="./images/footer-icons/github.png" alt="Icon made by Freepik from www.flaticon.com" class="icon" />
                </a>
                <a href="https://www.linkedin.com/in/patrickmcguigan">
                    <img src="./images/footer-icons/linkedin.png" alt="Icon made by Freepik from www.flaticon.com" class="icon" />
                </a>
                <a href="https://www.instagram.com/pattshreds">
                    <img src="./images/footer-icons/instagram.png" alt="Icon made by Freepik from www.flaticon.com" class="icon" />
                </a>
            </div>
        </footer>
        `;
    }
}

customElements.define('footer-component', Footer);
