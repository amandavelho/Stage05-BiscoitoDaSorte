const btnOpen = document.querySelector('#btnOpen')
const btnReset = document.querySelector('#btnReset')

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

//Eventos
btnReset.addEventListener('click', tryAgain)
btnOpen.addEventListener('click', tryAgain)

//Functions

function tryAgain() {
    
    screen2.classList.toggle('hide')
    screen1.classList.toggle('hide')
}

