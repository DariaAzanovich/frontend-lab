window.addEventListener("load", function ready() {
    document.body.classList.remove('preload');
});

const searchBtn = document.querySelector('.search-btn');
const searchWindow = document.querySelector('.search-window');
const closeBtn = document.querySelector('.close-btn');
const burgerBtn = document.querySelector('.nav__burger-menu');
const dropdownMenu = document.querySelector('.dropdown-menu')

searchBtn.addEventListener('click', function () {
    searchWindow.classList.remove('closed-search-window');
})

closeBtn.addEventListener('click', function () {
    searchWindow.classList.add('closed-search-window');
})

burgerBtn.addEventListener('click', function() {
    dropdownMenu.classList.toggle('closed-dropdown-menu');
})


/*============================================================*/
const apiKey = 'HWXlq6vqGYVF4HOKSQZmzS5Fjdn7dWwx';

