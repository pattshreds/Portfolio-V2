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
    if (pathname === '/') {
        homeButton.style.display = 'none';
    } else if (pathname === '/index.html') {
        homeButton.style.display = 'none';
    } else if (pathname === '/about.html') {
        aboutButton.style.display = 'none';
    } else if (pathname === '/projects.html') {
        projectsButton.style.display = 'none';
    } else if (pathname === '/contact.html') {
        contactButton.style.display = 'none';
    }
});
