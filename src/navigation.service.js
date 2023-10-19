import { clearPage } from './clear.service';
import { loadHome } from './home.service';
import { loadAboutPage } from './about.service';

export const loadNavigationBar = () => {
    const content = document.getElementById('content')
    
    const navBar = document.createElement('div');
    navBar.setAttribute('class', 'navigation');
    
    const homeButton = document.createElement('button');
    homeButton.innerHTML = 'Home';

    const aboutUsButton = document.createElement('button');
    aboutUsButton.innerHTML = 'About Us & Contact'

    
    homeButton.addEventListener('click', function(event) {
        clearPage();
        loadHome();
    })

    aboutUsButton.addEventListener('click', function() {
        clearPage();
        loadAboutPage();
    })

    navBar.appendChild(homeButton);
    navBar.appendChild(aboutUsButton);

    document.body.insertBefore(navBar, content);

    return content
}
