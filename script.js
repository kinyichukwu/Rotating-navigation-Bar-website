var opening = document.querySelector('#open')
var closing = document.querySelector('#close')
var container = document.querySelector('.container')

opening.addEventListener('click', ()=>{container.classList.add('show-nav')})

closing.addEventListener('click', ()=>{container.classList.remove('show-nav')})

