import { senator } from "../data/senators.js";

const pathStart = "https://unitedstates.github.io/images/congress/225x275/"

// tag the HTML elements
const myNav = document.querySelector('nav');
const myParent = document.querySelector('#senatorCards');

// Create the buttons
const allSenatorsButton = document.createElement('button');
allSenatorsButton.className = "allBtn";
allSenatorsButton.textContent = "all senators";
// allSenatorsButton.addEventListener('click', () => )

function displaySenators(x) {
    myParent.textContent = "";
    x.forEach(senator => {
        const myFigure = document.createElement('figure');
        myFigure.className = 'senatorCard';

        const myName = document.createElement('h3');
        myName.className
        myName.textContent = `${senator.first_name} ${senator.middle_name ? senator.middle_name + ' ' : ''}${senator.last_name}`;

        const myImg = document.createElement('img');
        myImg.src = `${pathStart}${senator.id}.jpg`;
        myImg.alt = `${senator.last_name}`
        myImg.loading = 'lazy';

        const myParty = senator.party;
        const myState = senator.state;
        const myCaption = document.createElement('figcaption');
        myCaption.textContent = `${myParty} from ${myState}`;

        const myPhone = document.createElement('p');
        myPhone.textContent = senator.phone;

        myFigure.appendChild(myName);
        myFigure.appendChild(myImg);
        myFigure.appendChild(myCaption);
        myFigure.appendChild(myPhone);

        myParent.appendChild(myFigure);
    });
};

displaySenators(senator);