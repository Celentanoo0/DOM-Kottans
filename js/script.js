"use strict";

//code to make Burger menu work
const burgerBtn = document.querySelector('.menu__icon');
const burgerMenu = document.querySelector('.menu__body');
burgerBtn.addEventListener('click', function () {
    document.body.classList.toggle('_lock')
    burgerBtn.classList.toggle('_active');
    burgerMenu.classList.toggle('_active');
})

//getting information that has to be changed while button clicked
const pageTitle = document.querySelector('.content__title > h1')
const pageImage = document.querySelector('.content__imgage > img')
const pageDescr = document.querySelector('.content__description > p')

//array of objects with the information that has to be shown when the correct button will be clicked
const solarSystem = [
    {
        name: 'The Sun',
        image: 'img/theSun.jpg',
        description: "The sun is by far the largest object in our solar system, containing 99.8% of the solar system's mass. It sheds most of the heat and light that makes life possible on Earth and possibly elsewhere. Planets orbit the sun in oval-shaped paths called ellipses, with the sun slightly off-center of each ellipse. NASA has a fleet of spacecraft observing the sun, such as the Parker Solar Probe, to learn more about its composition, and to make better predictions about space weather and its effect on Earth.",
    },
    {
        name: 'Venus',
        image: 'img/MERCURY.jpg',
        description: "Venus is the second planet from the sun and is the hottest planet in the solar system. Its thick atmosphere is extremely toxic and composed of sulfuric acid clouds, the planet is an extreme example of the greenhouse effect.",
    },
    {
        name: 'Mercury',
        image: 'img/venus.jpg',
        description: "Mercury is the closest planet to the sun and the smallest planet in the solar system — it is only a little larger than Earth's moon. Mercury zips around the sun in only 88 days and because it is so close to our star (about two-fifths the distance between Earth and the sun).",
    },
    {
        name: 'Earth',
        image: 'img/earth.jpg',
        description: "Earth, our home planet, is the third planet from the sun. It is a water world with two-thirds of the planet covered by water. Earth's atmosphere is rich in nitrogen and oxygen and it is the only world known to harbor life.  ",
    }
];

//information that will be shown by default when the page will be open
pageTitle.innerHTML = solarSystem[0].name;
pageImage.src = solarSystem[0].image;
pageDescr.innerHTML = solarSystem[0].description;

//creating the array of buttons
const btnsArr = Array.from(document.querySelectorAll('#navMenu>ul>li'));

//adding event listener to every button
for(const elem of btnsArr){
    elem.addEventListener('click', changePage);
}

//function that change the page while the button was clicked
function changePage(item){
    for(const elem of solarSystem){
        if(item.target.textContent === elem.name){
            pageTitle.innerHTML = elem.name;
            pageImage.src = elem.image;
            pageDescr.innerHTML = elem.description;
        }
    }
}