import src from '../../assets/images/coffee/coffee-4.jpg';

import { cards } from '../dataCards';
import sizeListener from '../sizeListener';
const MENU = document.getElementById('menu');



const _toHTML = card => `
    <div class="gallery-card" data-card="card" data-id="${card.id}">
        <div class="gallery-image"> 
            <img class="gallery-img" data-card="card" data-id="${card.id}" src="${src}" alt="${card.name}">
        </div>
        <div class="gallery-info" data-card="card">
            <h4 class="gallery-title" data-card="card" data-id="${card.id}">${card.name}</h4>
            <p class="gallery-text" data-card="card" data-id="${card.id}">${card.description}</p>
            <p class="gallery-price" data-card="card" data-id="${card.id}">$${card.price}</p>
        </div>
    </div>            
`; 
        
const createMenuPage  = (active) => {
    
    const filterCardsByCategory = cards.filter(item => item.category === active);
    
    // const cardsArray = arr.filter((item, index) => index < counter);
    function renderCards() {
        const html = filterCardsByCategory.map(_toHTML).join('');
        if (MENU) {
            MENU.innerHTML = '';
            MENU.innerHTML = html;
        }
    }
    renderCards();
}

export default createMenuPage;