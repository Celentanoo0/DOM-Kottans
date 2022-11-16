"use strict";

const burgerBtn = document.querySelector('.menu__icon');
const burgerMenu = document.querySelector('.menu__body');
burgerBtn.addEventListener('click', function () {
    document.body.classList.toggle('_lock')
    burgerBtn.classList.toggle('_active');
    burgerMenu.classList.toggle('_active');
})