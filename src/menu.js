function menu() {

    const content = document.createElement('div')

    let detail = document.createElement('p')
    content.appendChild(detail)
    detail.textContent = 'burritos'
    

    detail = document.createElement('p')
    content.appendChild(detail)
    detail.textContent = 'tacos'

    detail = document.createElement('p')
    content.appendChild(detail)
    detail.textContent = 'salsa'
    
    return content
}


export {
    menu
}