import './index.pug';
import './page.pug';
import './styles/index.scss';


import { cards } from './scripts/dataCards';
import sizeListener from './scripts/sizeListener';
import showMenu from './scripts/plugins/burger';
import showModal from './scripts/plugins/modal';
import createMenuPage from './scripts/plugins/menu';
import changeMenu from './scripts/changeMenu';

window.onload = () => {
    const MENU = document.getElementById('menu');
    console.log('lol')
    if (MENU) {
        const active = document.querySelector('div.menu-tabs > div.menu-tab.menu-tab__coffee.menu-tab__active');
        console.log(active.dataset.tab);
        let activeValue = active.dataset.tab;
        createMenuPage(activeValue);
    }
    
};
sizeListener();
showMenu();
showModal(cards);
changeMenu();

















// for menu page / to do
// function _filterToRender(tabType) {
//     const cardsToRender = cards.filter(item => item.category === tabType);
//     return cardsToRender;
// }
// function initialMenuPage(cardsNum) {
//     const active = document.querySelector('div.menu-tabs > div.menu-tab.menu-tab__coffee.menu-tab__active');
//     createMenuPage(_filterToRender(active.dataset.tab), cardsNum);
// }
// const REFRESH = document.getElementById('refresh');
// REFRESH.addEventListener('click', event => {
//     document.querySelectorAll('.gallery-card').forEach(item => {
//         item.style.display = 'block';

//     })
//     REFRESH.style.display = 'none';
// })