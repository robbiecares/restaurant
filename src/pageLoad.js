import image from './images/Moes_Logo-4198742854.jpeg';

function pageLoad() {

    const content = document.getElementById('content')

    const header = document.createElement('h1')
    header.textContent = "Welcome to Moe's"
    content.appendChild(header)
    
    const navBar = document.createElement('nav')
    content.appendChild(navBar)

    for (let name of ['home', 'menu', 'contact']) {
        let element = document.createElement('div')
        navBar.appendChild(element)
        element.textContent = name
        element.classList.add('tab')
        element.addEventListener('click', (e) => loadContent(e))
    }

    const tab = document.createElement('div')
    content.appendChild(tab)
    tab.classList.add('tab')

    const logo = new Image();
    tab.appendChild(logo)
    logo.src = image
    logo.setAttribute('width', "50%")

}

function loadContent(e) {
    // Load the content for the user selected tab.
    console.log(e.target.textContent)
    // tab.innerHTML = ''
    console.log(tab)
}


export {
    pageLoad
}