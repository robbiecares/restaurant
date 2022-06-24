import './style.css'
import { home } from "./home";
import { pageLoad } from "./pageLoad";


const body = document.getElementsByTagName('body')[0]

const content = document.createElement('div')
content.id = 'content'
body.appendChild(content)

pageLoad()


