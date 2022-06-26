function contact() {

    const content = document.createElement('div')

    let detail = document.createElement('p')
    detail.textContent = '555-555-5555'
    content.appendChild(detail)

    detail = document.createElement('p')
    detail.textContent = 'address@domain.com'
    content.appendChild(detail)

    let x = document.getElementById('content')
    x.appendChild(content)
    
    return content
}


export {
    contact
}