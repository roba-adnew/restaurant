import { clearPage } from './clear.service';
import { loadHome } from './home.service';
import { loadAboutPage } from './about.service';
import { loadMenu } from './menu.service';

export const loadNavigationBar = () => {
    const content = document.getElementById('content')
    
    const navBar = document.createElement('div');
    navBar.setAttribute('class', 'navigation');
    
    const homeButton = document.createElement('button');
    homeButton.innerHTML = 'Home';

    const aboutUsButton = document.createElement('button');
    aboutUsButton.innerHTML = 'About Us & Contact';

    const menuButton = document.createElement('button');
    menuButton.innerHTML = 'Menu';

    homeButton.addEventListener('click', function(event) {
        clearPage();
        loadHome();
    })

    aboutUsButton.addEventListener('click', function() {
        clearPage();
        loadAboutPage();
    })

    menuButton.addEventListener('click', function() {
        clearPage();
        loadMenu();
    })

    navBar.appendChild(homeButton);
    navBar.appendChild(aboutUsButton);
    navBar.appendChild(menuButton);

    document.body.insertBefore(navBar, content);

    return content
}
