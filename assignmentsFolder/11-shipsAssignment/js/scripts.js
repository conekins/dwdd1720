const myNav = document.querySelector('nav');
const myViewer = document.querySelector('main');

const imgPath = 'https://starwars.dgmuvu.com/ships/';

// grab the data and then wait for a response
fetch("../data/starships.json")
  .then((response) => response.json())
  .then((shipArray) => {
    console.log(shipArray);
    populateNav(shipArray);
  });


// populate the nav bar
function populateNav(allShips) {
  allShips.forEach(ship => {
    let myButton = document.createElement('button');
    myButton.textContent = ship.name
    myButton.addEventListener('click', () => displayShip(ship));

    myNav.appendChild(myButton);
  });
};

function displayShip(shipData) {
  let myFigure = document.createElement('figure')
  let myImg = document.createElement('img')
  let myCaption = document.createElement('figcaption')

  myImg.src = '';
  myCaption.textContent = '';

  myFigure.appendChild(myImg);
  myFigure.appendChild(myCaption);

  myViewer.appendChild(myFigure);
};