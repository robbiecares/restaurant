<<<<<<< HEAD
<<<<<<< HEAD
=======
import { initializeStructure } from "./pageLoad";

initializeStructure()
=======
>>>>>>> 5e4052d42c96bcbda3928d9e5e7ff98bf601104e
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

<<<<<<< HEAD
=======
import { initializeStructure } from "./pageLoad";

initializeStructure()
>>>>>>> e6dfa43 (directory setup complete, beginning pageLoad.js)
=======
>>>>>>> d305ffc6230790997bf46aa77e988959e085e5d8
>>>>>>> 5e4052d42c96bcbda3928d9e5e7ff98bf601104e
