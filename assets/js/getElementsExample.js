const elementById = document.getElementById('blog-title')
console.log(elementById)

const elementByClassName = document.getElementsByClassName('subtitle')
console.log(elementByClassName)

const elementByTagName = document.getElementsByTagName('meta')
console.log(elementByTagName)

const elementByQuerySelector = document.querySelector('h2') // 
console.log(elementByQuerySelector)

const elementByQuerySelectorAll = document.querySelectorAll('h2') // 
console.log(elementByQuerySelectorAll)
elementByQuerySelectorAll.forEach(el => console.log(el))