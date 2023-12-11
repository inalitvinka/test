import { cards } from './dataCards';
import createMenuPage from "./plugins/menu";

const DESKTOP = window.matchMedia("(min-width: 1279.9px)");
const LAPTOP = window.matchMedia("(min-width: 767.9px) and (max-width: 1279.9px)");
const MOBILE_PHONE = window.matchMedia("(max-width: 767.9px)");
DESKTOP.addEventListener("change", sizeListener);
LAPTOP.addEventListener("change", sizeListener);
MOBILE_PHONE.addEventListener("change", sizeListener);
let CARD_NUMBER;
// const REFRESH = document.getElementById('refresh');
function sizeListener() {
    if (window.innerWidth >= 1440) {
        CARD_NUMBER = 8;
        // REFRESH.style.display = 'none';
    } 
    else if (window.innerWidth < 1440 && window.innerWidth > 768) {
        CARD_NUMBER = 8;
        // REFRESH.style.display = 'none';

    } else if (window.innerWidth <= 768) {
        CARD_NUMBER = 4;
        // document.querySelectorAll('.gallery-card').forEach(item => {
        //     item.style.display = 'none';
    
        // })
        // REFRESH.style.display = 'block';
    }
    return CARD_NUMBER;
}

export default sizeListener;