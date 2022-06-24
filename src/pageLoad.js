
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
}