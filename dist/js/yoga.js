window.addEventListener('DOMContentLoaded', function() {

    "use strict";

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide'); 
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show'); 
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //* Timer

    //* дата до которой установлен таймер обратного отсчета 
    let deadline = '2021-11-5'; 

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor(t / (1000 * 60 * 60));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else {
                    return num;
                }
            };

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadline);

    //* Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        descriptionBtn = document.querySelectorAll('.description-btn');

    for (let i = 0; i < descriptionBtn.length; i++) {
        descriptionBtn[i].addEventListener('click', function() {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    }

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
    
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    //* form

    let massage = {
        loading : 'Загрузка...',
        success : 'Спасибо! Скоро мы с Вами свяжемся!',
        failure : 'Что-то не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMassage = document.createElement('div');

        statusMassage.classList.add('status');

    //* отправка данных на сервер php

    // form.addEventListener('submit', function(event) {
    //     event.preventDefault(); //* отмена стандартного поведения браузера
    //     form.appendChild(statusMassage);

    //     let request = new XMLHttpRequest();
    //     request.open('POST', '../php/server.php');
    //     request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    //     let formData = new FormData(form);
    //     request.send(formData);

    //     request.addEventListener('readystatechange', function() {
    //         if (request.readyState < 4) {
    //             statusMassage.innerHTML = massage.loading;
    //         } else if (request.readyState === 4 && request.status == 200) {
    //             statusMassage.innerHTML = massage.success;
    //         } else {
    //             statusMassage.innerHTML = massage.failure;
    //         }
    //     });

    //     for (let i = 0; i < input.length; i++) {
    //         input[i].value = '';
    //     }
    // });

    //* Отправка данных на сервер php в формате json

    let formId = document.getElementById('form'),
        inputId = formId.getElementsByTagName('input'),
        statusMassageId = document.createElement('div');

    statusMassageId.classList.add('status');

    let status = statusMassageId;

    status.style.marginTop = '10px';
    status.style.color = 'white';

    formId.addEventListener('submit', function(event) {
        event.preventDefault(); //* отмена стандартного поведения браузера
        formId.appendChild(statusMassageId);

        let request = new XMLHttpRequest();
        request.open('POST', '../php/server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(formId);

        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMassageId.innerHTML = massage.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMassageId.innerHTML = massage.success;
            } else {
                statusMassageId.innerHTML = massage.failure;
            }
        });

        for (let i = 0; i < inputId.length; i++) {
            inputId[i].value = '';
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); //* отмена стандартного поведения браузера
        form.appendChild(statusMassage);

        let request = new XMLHttpRequest();
        request.open('POST', '../php/server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMassage.innerHTML = massage.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMassage.innerHTML = massage.success;
            } else {
                statusMassage.innerHTML = massage.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });

});