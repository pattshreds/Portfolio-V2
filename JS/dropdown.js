const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownMenu = document.querySelector('.dropdown-toggle-container');

dropdownBtn.addEventListener('click', e => {
    dropdownMenu.style.display = 'flex';
    dropdownMenu.style.flexDirection = 'column';
    dropdownMenu.style.justifyContent = 'center';
    dropdownMenu.style.alignItems = 'center';  
});
