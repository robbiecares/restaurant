import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/brands'
import './style.css'

import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";
import { pageLoad } from "./pageLoad";

window.home = home
window.menu = menu
window.contact = contact

pageLoad()


function loadContent(element) {
    // Load the content for the user selected tab.
    const tab = document.getElementById('active-tab')
    tab.innerHTML = ''
    tab.appendChild(window[element.textContent]())
}


export {
    loadContent
}

