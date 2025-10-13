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

// Render films into the #posters container using a DocumentFragment for performance
const fragment = document.createDocumentFragment();
for (const film of films) {
    const { title, episode_id, director: dir, producer: prod, release_date } = film;

    const titleDiv = document.createElement('div');
    titleDiv.innerHTML = `<p class="movieTitle">${title}</p>`;

    const img = document.createElement('img');
    img.src = `${pathStart}${episode_id}.webp`;
    img.alt = title;

    const director = document.createElement('p');
    director.className = 'director';
    director.textContent = `Director: ${dir}`;

    const producer = document.createElement('p');
    producer.className = 'producer';
    producer.textContent = `Producer: ${prod}`;

    const releaseDate = document.createElement('p');
    releaseDate.className = 'releaseDate';
    releaseDate.textContent = `Release Date: ${release_date}`;

    const details = document.createElement('div');
    details.className = 'details';
    details.append(director, producer, releaseDate);

    const figure = document.createElement('figure');
    figure.className = 'poster';
    figure.append(titleDiv, img, details);

    fragment.appendChild(figure);
}
myTarget.appendChild(fragment);