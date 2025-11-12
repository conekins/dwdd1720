const myNav = document.querySelector('nav');
const myViewer = document.querySelector('main');

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
    myButton.textContent = ship.name;
    myButton.addEventListener('click', () => displayShip(ship));

    myNav.appendChild(myButton);
  });
};

function displayShip(ship) {
  myViewer.textContent = '';
  let myFigure = document.createElement('figure');

  let myImg = document.createElement('img');
  const explodedArray = ship.url.split('/');
  console.log(explodedArray);
  const charNumber = explodedArray[5];
  myImg.src = `https://starwars.dgmuvu.com/ships/${charNumber}.jpg`;
  myImg.alt = ship.name;

  let myCaption = document.createElement('figcaption');
  myCaption.textContent = `${ship.name}`;

  myFigure.appendChild(myImg);
  myFigure.appendChild(myCaption);

  myViewer.appendChild(myFigure);
};