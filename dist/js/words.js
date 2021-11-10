"use strict";

let box = document.getElementById('box'), 
    btn = document.getElementsByTagName('button'), 
    circle = document.getElementsByClassName('circle'), 
    heart = document.querySelectorAll('.heart'), 
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper'),
    lessonContainer = document.querySelector('.lesson__container');

box.style.backgroundColor = 'blue';
btn[2].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function(item, i, hears) {
//     item.style.backgroundColor = 'blue';
// });

let div = document.createElement('div'),
    text = document.createTextNode('Тут был я');

div.classList.add('black');

// div.innerHTML = '<h2>Hello world!</h2>';
div.textContent = 'Hello world';
    
// document.body.appendChild(div);
// wrapper.appendChild(div);
lessonContainer.insertBefore(div, circle[0]);
lessonContainer.removeChild(circle[1]);
wrapper.removeChild(heart[1]);

lessonContainer.replaceChild(btn[2], circle[1]);

console.log(div);