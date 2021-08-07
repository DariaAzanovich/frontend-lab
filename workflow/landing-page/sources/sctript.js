document.addEventListener("DOMContentLoaded", function ready() {
    document.body.classList.remove('preload');
});

const searchBtn = document.querySelector('.search-btn');
const searchWindow = document.querySelector('.search-window');
const closeBtn = document.querySelector('.close-btn');

searchBtn.addEventListener('click', function () {
    searchWindow.style.visibility = 'visible';
})

closeBtn.addEventListener('click', function () {
    searchWindow.style.visibility = 'hidden';
})