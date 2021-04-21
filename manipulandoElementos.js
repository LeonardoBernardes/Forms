const element = document.querySelector('h1')
console.log(element.textContent)
element.innerHTML = "Olá mundo"

const inputContato = document.querySelector('#contato')
inputContato.value = "Leonardo"
console.log(inputContato.value)

const header = document.querySelector('header')
header.setAttribute('id','header')

console.log(header)
const headerID = document.querySelector('#header')
console.log(header.getAttribute('id'))
// header.removeAttribute('id')
//console.log(header)

const h1 = document.querySelector('h1')
h1.style.backgroundColor = "#ff0000"
h1.style.color = "#ffffff"


const h2 = document.querySelector('h2')
h2.classList.add('active')
console.log(h2)

const body =  document.querySelector('body')
body.classList.add('green')
body.classList.toggle('green') // if class on then off else on