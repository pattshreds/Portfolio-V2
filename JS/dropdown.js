const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownMenu = document.querySelector('.dropdown-toggle-container');
const closeBtn = document.querySelector('.close-menu-btn');

dropdownBtn.addEventListener('click', e => {
    dropdownMenu.style.display = 'flex';
    dropdownMenu.style.flexDirection = 'column';
    dropdownMenu.style.justifyContent = 'center';
    dropdownMenu.style.alignItems = 'center';  
});

closeBtn.addEventListener('click', e => {
    dropdownMenu.style.display = 'none';
    dropdownMenu.style.animation = 'dropdown .5s';
});
