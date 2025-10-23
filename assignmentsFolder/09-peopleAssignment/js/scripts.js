import { people } from "../data/people.js";

// tag the HTML elements
const myNav = document.querySelector('nav');
const myParent = document.querySelector('#peopleCards');

// create an all people button
const allPeopleBtn = document.createElement('button');
allPeopleBtn.className = "allBtn";
allPeopleBtn.textContent = "All people";
allPeopleBtn.addEventListener('click', () => displayPeople(people));

// create a female button with filter
const femaleBtn = document.createElement('button');
femaleBtn.className = "femaleBtn";
femaleBtn.textContent = "Female Filter";
femaleBtn.addEventListener('click', () => {
    const arrayFemale = people.filter(person => person.gender === "female");
    displayPeople(arrayFemale);
});

// create a male button with filter
const maleBtn = document.createElement('button');
maleBtn.className = "maleBtn";
maleBtn.textContent = "Male Filter";
maleBtn.addEventListener('click', () => {
    const arrayMale = people.filter(person => person.gender === "male");
    displayPeople(arrayMale);
});

const otherBtn = document.createElement('button');
otherBtn.className = "otherBtn";
otherBtn.textContent = "Other Filter";
otherBtn.addEventListener('click', () => {
    const arrayOther = people.filter(person => person.gender != "male" && person.gender != "female");
    displayPeople(arrayOther);
});


// add buttons to page
myNav.appendChild(allPeopleBtn);
myNav.appendChild(femaleBtn);
myNav.appendChild(maleBtn);
myNav.appendChild(otherBtn);

// loop through all the people
function displayPeople(x) {
    myParent.textContent = ''; // clear previous content
    x.forEach(person => {
        const myFigure = document.createElement('figure');

        const myImg = document.createElement('img');
        const explodedArray = person.url.split('/');

        const charNumber = explodedArray[5];
        myImg.src = `https://starwars.dgmuvu.com/characters/${charNumber}.jpg`;
        myImg.alt = `${person.name}`;

        const myName = document.createElement('figcaption');
        myName.textContent = person.name;

        // assign gender class
        switch (person.gender) {
            case "female":
                myFigure.className = "female"
            break;
            case "male":
                myFigure.className = "male"
            break;
            default:
                myFigure.className = "other"
        }; // end of switch

        // assemble the parts
        myFigure.appendChild(myImg);
        myFigure.appendChild(myName);

        // attach to the HTML page
        myParent.appendChild(myFigure);
    }); // end of the loop
};

// calls the function
displayPeople(people);