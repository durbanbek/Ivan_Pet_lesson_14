"use strict";

let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    title = document.querySelector('#title'),
    adv = document.querySelector('.adv'),
    promptForApple = document.querySelector('#prompts'),
    menuItemLi = document.createElement('li');

menu.insertBefore(menuItem[3], menuItem[2]);

menuItemLi.classList.add('menu-item');
menuItemLi.textContent = 'Пятый пункт';
menu.appendChild(menuItemLi);

document.body.style.backgroundImage = "url('../images/img/apple_true.jpg')";

title.textContent = 'Мы продаем только подлинную технику Apple';

adv.remove();

let yourOptinion = prompt('Ваше отношение к технике Apple?');

promptForApple.textContent = yourOptinion;


