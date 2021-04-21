const element = document.querySelector('header')
//Pegando elemento pai
console.log(element.parentNode) // Sem espaços 
console.log(element.parentElement) // com espaços 

//Pegando elemento filho
console.log(element.children) // Sem espaços 
console.log(element.childNodes) // com espaços 

console.log(element.firstElementChild) // sem espaços 
console.log(element.firstChild) // com espaços 

console.log(element.lastElementChild) // sem espaços 
console.log(element.lastChild) // com espaços 

//Pegando elemento irmão

const element2 = document.querySelector('header')

console.log(element2.nextElementSibling) //sem espaços
console.log(element2.nextSibling) //com espaços

console.log(element2.previousElementSibling) //sem espaços
console.log(element2.previousSibling) //com espaços

