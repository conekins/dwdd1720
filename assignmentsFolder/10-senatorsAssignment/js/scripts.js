import { senator } from '../data/senators.js';

const pathStart = 'https://unitedstates.github.io/images/congress/225x275/'

// tag the HTML elements
const myNav = document.querySelector('nav');
const myParent = document.querySelector('#senatorCards');

// all senators filter
const allBtn = document.createElement('button');
allBtn.className = 'allBtn';
allBtn.textContent = 'all';
allBtn.addEventListener('click', () => displaySenators(senator));

// male senators filter
const maleBtn = document.createElement('button');
maleBtn.className = 'maleBtn';
maleBtn.textContent = 'males';
maleBtn.addEventListener('click', () => {
    const arrayMale = senator.filter(senator => senator.gender === 'M');
    displaySenators(arrayMale);
});

// female senators filter
const femaleBtn = document.createElement('button');
femaleBtn.className = 'femaleBtn';
femaleBtn.textContent = 'females';
femaleBtn.addEventListener('click', () => {
    const arrayFemale = senator.filter(senator => senator.gender === 'F');
    displaySenators(arrayFemale);
});

// republican filter
const repBtn = document.createElement('button');
repBtn.className = 'republicanBtn';
repBtn.textContent = 'republican';
repBtn.addEventListener('click', () => {
    const arrayRep = senator.filter(senator => senator.party === 'R');
    displaySenators(arrayRep);
});

// democrat filter
const demBtn = document.createElement('button');
demBtn.className = 'democratBtn';
demBtn.textContent = 'democrat';
demBtn.addEventListener('click', () => {
    const arrayDem = senator.filter(senator => senator.party === 'D');
    displaySenators(arrayDem);
});

// display the buttons
myNav.appendChild(allBtn);
myNav.appendChild(maleBtn);
myNav.appendChild(femaleBtn);
myNav.appendChild(repBtn);
myNav.appendChild(demBtn);

// function to build and display the cards
function displaySenators(x) {
    myParent.textContent = '';
    x.forEach(senator => {
        const figureEl = document.createElement('figure');
        figureEl.className = 'senatorCard';

        const nameEl = document.createElement('h3');
        nameEl.className
        nameEl.textContent = `${senator.first_name} ${senator.middle_name ? senator.middle_name + ' ' : ''}${senator.last_name}`;

        const imgEl = document.createElement('img');
        imgEl.src = `${pathStart}${senator.id}.jpg`;
        imgEl.alt = `${senator.last_name}`
        imgEl.loading = 'lazy';

        const partyEl = senator.party;
        const stateEl = senator.state;
        const captionEl = document.createElement('figcaption');
        captionEl.textContent = `${partyEl} from ${stateEl}`;

        const phoneEl = document.createElement('figcaption');
        phoneEl.textContent = `Phone: ${senator.phone}`;

        const birthEl = document.createElement('figcaption');
        birthEl.textContent = `Date of Birth: ${senator.date_of_birth}`;

        const twitterEl = document.createElement('figcaption');
        twitterEl.textContent = `Twitter Account: ${senator.twitter_account}`;

        const youtubeEl = document.createElement('figcaption');
        youtubeEl.textContent = `YouTube Account: ${senator.youtube_account}`;

        // assign gender class
        switch (senator.party) {
            case 'R':
                figureEl.className = 'republican'
            break;
            case 'D':
                figureEl.className = 'democrat'
            break;
            default:
                figureEl.className = 'other'
        }; // end of switch

        figureEl.appendChild(nameEl);
        figureEl.appendChild(imgEl);
        figureEl.appendChild(captionEl);
        figureEl.appendChild(phoneEl);
        figureEl.appendChild(birthEl);
        figureEl.appendChild(twitterEl);
        figureEl.appendChild(youtubeEl);

        myParent.appendChild(figureEl);
    });
};

displaySenators(senator);