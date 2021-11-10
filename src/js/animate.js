"use strict";

//* 3.1 Скрипты и время их выполнения. setTimeout и setInterval

// let timerId = setTimeout(seyHello, 3000); //* запуск таймера через, 1 раз
// clearTimeout(timerId); //* остановка таймера

// function seyHello() {
//     alert('Hello world!');
// }


// let timerId = setInterval(seyHello, 3000); //* запуск таймера через, каждый раз
// clearInterval(timerId); //* остановка таймера

// function seyHello() {
//     console.log('Hello world!');
// }

// let timerId = setTimeout(function log() { //* рекурсивный таймер
//     console.log('Hello');
//     setTimeout(log, 2000);
// }); 

let btn = document.querySelector('.animate__btn'),
    box = document.querySelector('.animate__box');

function myAnimation() {
    let pos = 0;

    let id = setInterval(frame, 10);
    function frame() {
        if (pos == 198) {
            clearInterval(id);
        } else {
            pos++;
            box.style.top = pos + 'px';
            box.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.animate__wrapp'),
    btns = document.querySelectorAll('.animate__item'),
    three = document.querySelector('.animate__three');

btnBlock.addEventListener('click', function(event) {
    //if (event.target && event.target.className == 'animate__item') 
    //* matches() лучше
    if (event.target && event.target.matches('div.animate__three')) {
        three.style.backgroundColor = 'green';
    } 
});