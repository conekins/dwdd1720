import { people } from "../data/people.js";

// tag the HTML elements
const myNav = document.querySelector('nav');
const myParent = document.querySelector('#peopleCards');

const pathStart = "https://starwars.dgmuvu.com/characters/";

// loop through all the people
function displayPeople(x) {
    x.forEach(person => {
        const myFigure = document.createElement('figure');

        const myImg = document.createElement('img');
        const explodedArray = person.url.split('/');
        console.log(explodedArray);

        const charNumber = explodedArray[5];
        myImg.src = `https://starwars.dgmuvu.com/characters/${charNumber}.jpg`;
        myImg.alt = `${person.name}`;

        const myName = document.createElement('figcaption');
        myName.textContent = person.name;

        // assemble the parts
        myFigure.appendChild(myImg);
        myFigure.appendChild(myName);

        // attach to the HTML page
        myParent.appendChild(myFigure);
    }); // end of the loop
};

// calls the function
displayPeople(people);