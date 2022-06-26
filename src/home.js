import image from './images/Moes_Logo-4198742854.jpeg';
    

function home() {

    const content = document.createElement('div')

    const logo = new Image();
    content.appendChild(logo)
    logo.src = image
    logo.classList.add('logo')

    const copy = document.createElement('p')
    content.appendChild(copy)
    copy.textContent = "We have the best salsas ever! Don't eat at Chipotle!"

    return content
}


export {
    home
}