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
        const myCaption = document.createElement('figcaption');

        //add the src and the alt to the img
        myImg.src = `${pathStart}${2}.jpg`;
        myImg.alt = `${person.name}`;

        // assemble the parts
        myFigure.appendChild(myImg);
        myFigure.appendChild(myCaption);

        // attach to the HTML page
        myParent.appendChild(myFigure);

    }); // end of the loop
};

// calls the function
displayPeople(people);