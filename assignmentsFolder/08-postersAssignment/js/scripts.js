import {films} from '../data/films.js'

const pathStart = "https://starwars.dgmuvu.com/films/"
const myTarget = document.querySelector("#posters");

const gridBtn = document.querySelector("#gridIcon");
const listBtn = document.querySelector("#listIcon");

const pageBody = document.querySelector("body");

gridBtn.addEventListener('click', () => {
    pageBody.className = "grid";
    gridBtn.classList.add("is-hidden");
    listBtn.classList.remove("is-hidden");
});
listBtn.addEventListener('click', () => {
    pageBody.className = "list";
    listBtn.classList.add("is-hidden");
    gridBtn.classList.remove("is-hidden");
});

for (let x = 0; x < films.length; x++) {
    // create the div for each film
    const barDiv = document.createElement('div');
    barDiv.innerHTML = `<p>${films[x].title}</p>`;

    // movie poster images
    let myImage = document.createElement('img');
    myImage.setAttribute("src", pathStart + films[x].episode_id + ".webp");
    myImage.setAttribute("alt", films[x].title);

    // director
    const director = document.createElement('p');
    director.innerHTML = `Director: ${films[x].director}`;

    // producer
    const producer = document.createElement('p');
    producer.innerHTML = `Producer: ${films[x].producer}`;
    
    // release_date
    const realeaseDate = document.createElement('p');
    realeaseDate.innerHTML = `Release Date: ${films[x].release_date}`;

    let myFigure = document.createElement('figure');

    myFigure.appendChild(barDiv);
    myFigure.appendChild(myImage);
    myFigure.appendChild(director);
    myFigure.appendChild(producer);
    myFigure.appendChild(realeaseDate);

    myTarget.appendChild(myFigure);
}; // end of loop