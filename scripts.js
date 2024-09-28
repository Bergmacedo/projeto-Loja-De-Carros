let prevbutton = document.getElementById('prev')
let nextbutton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicatiors = document.querySelector('.indicatiors')
let dots = indicatiors.querySelectorAll('ul li')
let list = container.querySelector('.list')

let active = 0
let firstposition = 0
let lastposition = items.length - 1

nextbutton.onclick = () => {
    list.style.setProperty('--calculation', 1) 
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active + 1 > lastposition ? 0 : active + 1 
    items[active].classList.add('active')

    let dotsOld = indicatiors.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicatiors.querySelector('.numbers').innerHTML = '0' + (active + 1)


}

prevbutton.onclick = () => {

    list.style.setProperty('--calculation', -1)

    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active - 1 < firstposition ? lastposition : active - 1
    items[active].classList.add('active')

    let dotsOld = indicatiors.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicatiors.querySelector('.numbers').innerHTML = '0' + (active + 1)


}