const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownMenu = document.querySelector('.dropdown-toggle-container');
const closeBtn = document.querySelector('.close-menu-btn');

dropdownBtn.addEventListener('click', e => {
    dropdownMenu.style.display = 'flex';
    dropdownMenu.style.flexDirection = 'column';
    dropdownMenu.style.justifyContent = 'center';
    dropdownMenu.style.alignItems = 'center';
    dropdownMenu.style.animation = 'dropdown .5s';  
});

closeBtn.addEventListener('click', e => {
    dropdownMenu.style.animation = 'dropdown-up .5s';
    setTimeout(() => { dropdownMenu.style.display = 'none' }, 400);
});