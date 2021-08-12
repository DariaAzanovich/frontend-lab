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


/*=========================== GIPHY API =================================*/
const MAX_OFFSET = 4999;
const API_KEY = 'HWXlq6vqGYVF4HOKSQZmzS5Fjdn7dWwx';

const cardsImg = document.getElementsByClassName('card-img');
const cardsDate = document.getElementsByClassName('card-date');
const cardContent = document.getElementsByClassName('card-content');
const imgLink = document.getElementsByName('gif-link');

const leftBtn = document.querySelector('.pag-left');
const rightBtn = document.querySelector('.pag-right');

const cardsAmount = document.querySelectorAll('.card').length;

let offset = 0,
    currentOffset = cardsAmount,
    regExpOffcet = new RegExp(/offset=\d+/);
    url = new URL(`https://api.giphy.com/v1/gifs/search?q=cute+cat&api_key=${API_KEY}&limit=${cardsAmount}&offset=${offset}`);

uploadGifs(offset);

async function uploadGifs(currOffset) {
    url.search = url.search.replace(regExpOffcet, `offset=${currOffset}`);

    await fetch(url)
        .then(response =>  response.json())
        .then(json => {
            let counter = 0;

            json.data
            .forEach(gif => {
            cardsImg[counter].firstElementChild.src = gif.images.fixed_height.url;
    
            cardsDate[counter].textContent = (new Date()).toLocaleString(); 
            cardContent[counter].firstElementChild.textContent = gif.title;

            imgLink[counter].href = gif.url;
    
            counter++;
            })
        })
        .catch(error => {
            document.body.appendChild = error;
            console.log(error);
        });
}



leftBtn.addEventListener('click', function(event) {
    if(currentOffset > 0) {
        currentOffset -= cardsAmount;

        uploadGifs(currentOffset);
    } else {
        currentOffset = 0;
    }
})

rightBtn.addEventListener('click', function(event) {
    currentOffset += cardsAmount;

    if(currentOffset < MAX_OFFSET) {
        uploadGifs(currentOffset);
    } else {
        currentOffset = MAX_OFFSET;
    }
})
