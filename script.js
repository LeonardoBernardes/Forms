const div = document.createElement('div');
div.innerText = "Olá Devs!"

const body = document.querySelector('body')
// body.append(div) // Inserir no final do Body

const input = document.querySelector('input')
body.insertBefore(div,input) // Inserir div antes do input

