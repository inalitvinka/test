import sizeListener from "./sizeListener";
import createMenuPage from "./plugins/menu";

const TABS = document.querySelectorAll('div.menu-tab');
const changeMenu = () => {
    let cardsNumber = sizeListener();
    TABS.forEach(item => item.addEventListener('click', event => {
        TABS.forEach(item => {
            item.classList.remove('menu-tab__active');
        })
        item.classList.add('menu-tab__active');
        // const cardsNumber = sizeListener();
        const tabType = event.target.dataset.tab;
        console.log(tabType)
        createMenuPage(tabType);
    }))
}
export default changeMenu;