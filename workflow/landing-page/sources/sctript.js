document.addEventListener("DOMContentLoaded", function ready() {
    document.body.classList.remove('preload');
});

const searchBtn = document.querySelector('.search-btn');
const searchWindow = document.querySelector('.search-window');
const closeBtn = document.querySelector('.close-btn');

searchBtn.addEventListener('click', function () {
    searchWindow.classList.remove('closed-search-window');
})

closeBtn.addEventListener('click', function () {
    searchWindow.classList.add('closed-search-window');
})