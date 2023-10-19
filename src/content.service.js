import Restaurant from './empanada.png';

export const loadContent = () => {

    const content = document.getElementById('content');

    const headline = document.createElement('h1');
    headline.innerHTML = `Hyattsville's Umpteenth Empanada Shop`;

    const restaurantPic = new Image();
    restaurantPic.src = Restaurant;

    const copy = document.createElement('p');
    copy.innerHTML = 'While Hyattsville has a number of empanada shops, none are like this one...fictitious';

    content.appendChild(headline);
    content.appendChild(restaurantPic);
    content.appendChild(copy)

    return content
}
