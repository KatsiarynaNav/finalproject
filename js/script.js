var burger = document.querySelector('#burger');
var menulist = document.querySelector('.central-side');
var looking = document.querySelector('.looking');
var leftSide = document.querySelector('.left-side');
var btnClose = document.querySelector('#close')

function openBurger(){
    burger.style.display = 'none';
    menulist.classList.add('show');
    looking.classList.add('show__looking');
    leftSide.classList.add('show__left-side');
    btnClose.style.display = 'block';
}

function closeBurger(){
    burger.style.display = 'block';
    menulist.classList.remove('show');
    looking.classList.remove('show__looking');
    btnClose.style.display = 'none';
}


burger.onclick = openBurger;
btnClose.onclick = closeBurger;