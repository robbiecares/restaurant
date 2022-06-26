<<<<<<< HEAD
// import { sources } from 'webpack'
import { loadContent } from './index'


function pageLoad() {

    const body = document.getElementsByTagName('body')[0]
    const anchor = document.createElement('div')
    body.appendChild(anchor)
    anchor.id = 'content'

    const header = document.createElement('h1')
    anchor.appendChild(header)
    header.textContent = "Welcome to Moe's"
    
    const navBar = document.createElement('nav')
    anchor.appendChild(navBar)

    const tab = document.createElement('div')
    anchor.appendChild(tab)
    tab.id = ('active-tab')

    const footer = document.createElement('footer')
    anchor.appendChild(footer)
    
    // content = document.createElement('span')
    // footer.appendChild(content)
    // content.textContent = 'created by: robbiecares'

    // let source = document.createElement('a')
    // footer.appendChild(source)
    // source.href = 'https://github.com/robbiecares/restaurant'
    // source.target = '_blank'
    // source.classList.add('_')

    // content = document.createElement('i')
    // source.appendChild(content)
    // content.textContent = ''
    // content.classList.add('fa', 'fa-github')


    for (let name of ['home', 'menu', 'contact']) {
        let element = document.createElement('div')
        navBar.appendChild(element)
        element.textContent = name
        element.classList.add('tab')
        element.addEventListener('click', (e) => loadContent(e.target))
        if (name === 'home') {
            loadContent(element)
        }
    }
}


export {
    pageLoad
=======

function initializeStructure() {

    const content = document.getElementById('content')

    const header = document.createElement('h1')
    header.textContent = "Welcome to Moe's"

    const logo = document.createElement('img')
    logo.setAttribute['src', "../src/images/Moes_Logo-4198742854.jpeg"]
    logo.setAttribute['width', "50%"]

    const copy = document.createElement('p')
    copy.textContent = "We have the best salsas ever! Don't eat at Chipotle!"

    for (let elem of [header, logo, copy]) {
        header.appendChild(elem)
    }
}

export {
    initializeStructure
>>>>>>> e6dfa43 (directory setup complete, beginning pageLoad.js)
}