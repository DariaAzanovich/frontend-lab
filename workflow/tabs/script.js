class Tabs {
    constructor(btnsWrap, tabsWrap, tabs) {
        this.btnsWrap = btnsWrap;
        this.tabsWrap = tabsWrap;
        this.tabs = tabs;

        this.setDefaultTab(0);

        this.btnsWrap.addEventListener('click', (event) => {
            const btn = event.target.closest('.tab-btn');
            const tabIndex = +btn.dataset.value;
            
            this.openTab(tabIndex, btn);
        });
    }

    openTab(tabIndex, currBtn) {
        this.btnsWrap.querySelector('.active').classList.remove('active');
        currBtn.classList.add('active');

        this.tabsWrap.querySelector('.active').classList.remove('active');
        this.tabsWrap.querySelector(`.tab-${tabIndex}`).classList.add('active');
    }

    setDefaultTab(index) {
        this.btnsWrap.children[index].classList.add('active');
        this.tabs[index].classList.add('active');
    }

    createTab() {
        const nextIndex = this.btnsWrap.children.length + 1;

        if(nextIndex > 8) {
            return new Error(`Can not be more than ${nextIndex - 1} tabs`);
        }

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

        this.btnsWrap.appendChild(btn);
        this.tabsWrap.appendChild(tab);
    }
};


const btnsWrap = document.querySelector('.btns-wrap');
const tabsWrap = document.querySelector('.content-wrap');
const tabs = document.querySelectorAll('.tab-content');


const tabList = new Tabs(btnsWrap, tabsWrap, tabs);

tabList.createTab();