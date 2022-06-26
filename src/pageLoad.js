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
}