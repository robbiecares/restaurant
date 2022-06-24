function contact() {

    const indexContent = document.getElementById('content')
    const contactContent = document.createElement('div')
    indexContent.appendChild(contactContent)

    const detail = document.createElement('p')
    detail.textContent = '555-555-5555'
    contactContent.appendChild(detail)

    detail = document.createElement('p')
    detail.textContent = 'address@domain.com'
    contactContent.appendChild(detail)
}

export {
    contact
}