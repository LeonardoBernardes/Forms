//Evento 

function print() {
    console.log('print')
}

const input = document.querySelector('input')

input.onkeydown = function() {
    console.log('down')
}
input.onkeypress = function() {
    console.log('press')

}
input.onkeyup = function() {
    console.log('up')
}

const h1 = document.querySelector('h1')
// h1.addEventListener('click',print)

h1.onclick = print

h1.onclick = function() {
    console.log('outro momento')
} //sobrescreve as funções anteriores

h1.addEventListener('click',print) //Empilha funções iguais

input.onkeypress = function(event) {
    console.log(event.key)
    console.log(event.currentTarget.value)
}
