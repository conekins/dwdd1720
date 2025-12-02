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
  // start the figure as blank and create it
  myViewer.textContent = '';
  let myFigure = document.createElement('figure');

  // assemble the img
  let myImg = document.createElement('img');
  const explodedArray = ship.url.split('/');
  console.log(explodedArray);
  const charNumber = explodedArray[5];
  myImg.src = `https://starwars.dgmuvu.com/ships/${charNumber}.jpg`;
  myImg.alt = ship.name;

  // error checking for image
  myImg.addEventListener('error', () => {
    myImg.src = 'https://starwars.dgmuvu.com/ships/placeholder.jpg';
    myCaption.textContent = `${ship.name} has crashed on an unknown planet!`;
  });

  let myCaption = document.createElement('figcaption');
  myCaption.textContent = `${ship.name}`;

  // assemble the figure
  myFigure.appendChild(myImg);
  myFigure.appendChild(myCaption);

  // add the figure to the HTML
  myViewer.appendChild(myFigure);
};