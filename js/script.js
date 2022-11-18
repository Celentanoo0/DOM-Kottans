"use strict";

//code to make Burger menu work
const burgerBtn = document.querySelector('.menu__icon');
const burgerMenu = document.querySelector('.menu__body');
burgerBtn.addEventListener('click', function () {
    burgerBtn.classList.toggle('_active');
    burgerMenu.classList.toggle('_active');
})

//getting information that has to be changed while button clicked
const pageTitle = document.querySelector('.content__title > h1')
const pageImage = document.querySelector('.content__imgage > img')
const pageDescr = document.querySelector('.content__description')

//array of objects with the information that has to be shown when the correct button will be clicked
const solarSystem = [
    {
        name: 'The Sun',
        image: 'img/theSun.jpg',
        description: [
            "The sun is by far the largest object in our solar system, containing 99.8% of the solar system's mass. It sheds most of the heat and light that makes life possible on Earth and possibly elsewhere. Planets orbit the sun in oval-shaped paths called ellipses, with the sun slightly off-center of each ellipse.",
            "NASA has a fleet of spacecraft observing the sun, such as the Parker Solar Probe, to learn more about its composition, and to make better predictions about space weather and its effect on Earth."
        ],
    },
    {
        name: 'Venus',
        image: 'img/MERCURY.jpg',
        description: [
            "Venus is the second planet from the sun and is the hottest planet in the solar system. Its thick atmosphere is extremely toxic and composed of sulfuric acid clouds, the planet is an extreme example of the greenhouse effect.",
            "The average temperature on Venus' surface is 900 F (465 C). At 92 bar, the pressure at the surface would crush and kill you. And oddly, Venus spins slowly from east to west, the opposite direction of most of the other planets.",
            "Venus is sometimes referred to as Earth's twin as they are similar in size and radar images beneath its atmosphere reveal numerous mountains and volcanoes. But beyond that, the planets could not be more different.",
            "The Greeks believed Venus was two different objects — one in the morning sky and another in the evening. Because it is often brighter than any other object in the sky, Venus has generated many UFO reports."
        ],
    },
    {
        name: 'Mercury',
        image: 'img/venus.jpg',
        description: [
            "Mercury is the closest planet to the sun and the smallest planet in the solar system — it is only a little larger than Earth's moon. Mercury zips around the sun in only 88 days and because it is so close to our star (about two-fifths the distance between Earth and the sun).",
            "Mercury experiences dramatic changes in its day and night temperatures. Mercury temperatures can reach a scorching 840 F (450 C) in the day, which is hot enough to melt lead. Meanwhile, on the night side, temperatures drop to minus 290 F (minus 180 C).",
            "Mercury's atmosphere is very thin and primarily composed of oxygen, sodium, hydrogen, helium and potassium. Because the atmosphere is so thin it cannot incoming meteors, its surface is therefore pockmarked with craters, just like our moon.",
            "Over its four-year mission, NASA's MESSENGER spacecraft revealed incredible discoveries that challenged astronomers' expectations. Among those findings was the discovery of water ice and frozen organic compounds at Mercury's north pole and that volcanism played a major role in shaping the planet's surface."
        ],
    },
    {
        name: 'Earth',
        image: 'img/earth.jpg',
        description: [
            "Earth, our home planet, is the third planet from the sun. It is a water world with two-thirds of the planet covered by water. Earth's atmosphere is rich in nitrogen and oxygen and it is the only world known to harbor life. ",
            "Earth rotates on its axis at 1,532 feet per second (467 meters per second) — slightly more than 1,000 mph (1,600 kph) — at the equator. The planet zips around the sun at more than 18 miles per second (29 km per second)."
        ],
    }
];

//information that will be shown by default when the page will be open
pageTitle.innerHTML = solarSystem[0].name;
pageImage.src = solarSystem[0].image;
for(const descrItem of solarSystem[0].description){
    const newPar = document.createElement('p');
    newPar.append(descrItem)
    pageDescr.append(newPar);
}

//creating the array of buttons
const btnsArr = Array.from(document.querySelectorAll('#navMenu>ul>li'));
const btnsArrPhones = Array.from(document.querySelectorAll('#navMenuPhone>ul>li'))

//adding event listener to every button
for(const elem of btnsArr){
    elem.addEventListener('click', changePage);
}
for(const elem of btnsArrPhones){
    elem.addEventListener('click', changePage);
}

//function that change the page while the button was clicked
function changePage(item){
    for(const elem of solarSystem){
        if(item.target.textContent === elem.name){
            pageTitle.innerHTML = elem.name;
            pageImage.src = elem.image;
            pageDescr.innerHTML = '';
            for(const descrItem of elem.description){
                const newPar = document.createElement('p');
                newPar.append(descrItem)
                pageDescr.append(newPar);
            }
        }
    }
    burgerBtn.classList.toggle('_active');
    burgerMenu.classList.toggle('_active');
}