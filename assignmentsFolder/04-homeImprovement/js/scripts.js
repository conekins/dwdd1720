document.querySelector('#calculate').addEventListener('click', () => {
    const width = Number(document.querySelector('#width').value);
    console.log(width);
    const depth = Number(document.querySelector('#depth').value);
    console.log(depth);
    const height = Number(document.querySelector('#height').value);
    console.log(height);

    const paintType = document.querySelector('#quality').selectedOptions[0].text;
    console.log(paintType);
    const quality = document.querySelector('#quality').selectedOptions[0].value;
    console.log(quality);

    let carpet = Math.ceil((width * depth) / 9);
    console.log(carpet + "yds of Carpet");

    let tackstrip = (width * 2) + (depth * 2);
    console.log(tackstrip + "ft of Tackstrip.");

    let walls = ((width * height) + (depth * height)) * 2;
    walls = Math.ceil(walls / quality);
    console.log(walls + " Gallon(s) of semigloss Paint for the walls");

    let ceiling = Math.ceil((width * depth) / quality);
    console.log(ceiling + " Gallon(s) of flat paint for the ceiling");

    let primer = ceiling + walls;
    console.log(primer + " Gallon(s) of primer");
}) //End of the calculate function