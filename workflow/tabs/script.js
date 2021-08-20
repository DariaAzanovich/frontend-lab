const btnsWrap = document.querySelector('.btns-wrap');
const tabsWrap = document.querySelector('.content-wrap');
const tabs = document.querySelectorAll('.tab-content');

// btnsWrap[0].style.active = "true";
tabs[0].classList.add('active');

console.log(tabs);


btnsWrap.addEventListener('click', function(event) {
    const btn = event.target.closest('.tab-btn');
    const tabIndex = +btn.dataset.value;
    
    tabsWrap.querySelector('.active').classList.remove('active');
    tabsWrap.querySelector(`.tab-${tabIndex}`).classList.add('active');
})


function createTab(btnsWrap, tabsWrap) {
    const nextIndex = btnsWrap.children.length + 1;

    const btn = document.createElement('button');
    const tab = document.createElement('article');
    const tabHeader = document.createElement('h3');
    const tabContent = document.createElement('p');

    btn.classList.add('tab-btn');
    btn.dataset.value = nextIndex;
    tab.classList.add('tab-content');
    tab.classList.add(`tab-${nextIndex}`);

    btn.innerHTML = `Tab btn ${nextIndex}`
    tabHeader.innerHTML = `TAB ${nextIndex}`;
    tabContent.innerHTML = `${nextIndex}. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum provident consequuntur deleniti dignissimos architecto amet totam necessitatibus veritatis odit hic ad corporis modi placeat nesciunt reprehenderit, asperiores maiores iste quia.`;

    tab.appendChild(tabHeader);
    tab.appendChild(tabContent);

    btnsWrap.appendChild(btn);
    tabsWrap.appendChild(tab);
}

/*------------------------------------------------*/
// class TabList {
//     constructor(buttonsContainer, tabs) {
//       this.buttonsContainer = buttonsContainer;
//       this.tabs = tabs;
      
//       this.buttonsContainer.addEventListener('click', event => {
//         const index = event.target.closest('.button').dataset.value;
        
//         this.openTab(index);
//       });
//     }
    
//     openTab(index) {
//       this.tabs.querySelector('.active').classList.remove('active');
//       this.tabs.querySelector(`.tab--${index}`).classList.add('active');
//     }
//   }
  
//   document.addEventListener('DOMContentLoaded', ()=>{
//     const buttonsContainer = document.querySelector('.buttons');
//     const tabs             = document.querySelector('.tabs');
    
//     const tabList = new TabList(buttonsContainer, tabs);
//   })