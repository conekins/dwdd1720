// refs to the HTML
const parentTag = document.querySelector('#weatherCard');

// writing a default zip-code with local storage
let zip = localStorage.getItem('myZipCode');
if (zip == null) {
    let defaultZip = '45475';
    localStorage.setItem('myZipCode', defaultZip);
    zip = defaultZip;
};

console.log(zip);

// set a path to the API on weather
const myKey = '3228eb73df6deff1e60f57b5979cfdd1';
const myPath = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${myKey}&units=imperial`;

// fetch the remote JSON data fot the current weather
fetch(myPath)
    .then((response) => response.json())
    .then((allData) => {
        console.log(allData);
        displayWeather(allData);
    });

// function that displays the current weather
function displayWeather(weatherResults) {
    imgPath = weatherResults.weather[0].icon;

    // change the header to display the town name
    const myTown = document.querySelector('#town');
    myTown.textContent = `Current Weather for ${weatherResults.name}`;

    // current date
    const currentDate = document.createElement('p');
    currentDate.className = 'date';
    const d = new Date();
    currentDate.textContent = d.toDateString();

    // current temperature
    const currentTemp = document.createElement('p');
    currentTemp.className = 'temp';
    currentTemp.textContent = weatherResults.main.temp + ' °F';

    // weather description
    const weatherDesc = document.createElement('p');
    const desc = weatherResults.weather[0].description;
    weatherDesc.className = 'description';
    weatherDesc.textContent = `The weather is currently ${desc}.`;

    // weather icon
    const weatherIcon = document.createElement('img');

    // wind speed
    const windSpeed = document.createElement('p');
    windSpeed.className = 'windSpeed';
    windSpeed.textContent = `Wind Speed: ${weatherResults.wind.speed} mph`;

    weatherIcon.src = `https://openweathermap.org/img/wn/${imgPath}@2x.png`;
    weatherIcon.alt = weatherResults.weather[0].description;

    // temp min and max
    const tempMin = document.createElement('p');
    const tempMax = document.createElement('p');
    tempMin.className = 'min';
    tempMax.className = 'max';
    tempMin.textContent = `Low: ${weatherResults.main.temp_min} °F`;
    tempMax.textContent = `High: ${weatherResults.main.temp_max} °F`;

    parentTag.appendChild(currentDate);
    parentTag.appendChild(weatherIcon);
    parentTag.appendChild(weatherDesc); // 1
    parentTag.appendChild(windSpeed); // 2
    parentTag.appendChild(currentTemp); // 3
    parentTag.appendChild(tempMin); // 4
    parentTag.appendChild(tempMax); // 5
};

// ask for a new zipcode
const theModalBox = document.querySelector('aside');
const settingsIcon = document.querySelector('#settings');

settingsIcon.addEventListener('click', () => {
    theModalBox.classList.toggle('show');
});

// set a new zip
const myButton = document.querySelector('#applyZip');
myButton.addEventListener('click', () => {
    theModalBox.className = '';

    let newZip = document.querySelector('#newZip').value;
    if (newZip.length === 5) {
        localStorage.setItem('myZipCode', newZip);
    };

    location.reload();
});

// data validation for the zip-code character length
myInput = document.querySelector('#newZip');
myInput.addEventListener('input', () => {
    myInput.value = myInput.value.slice(0, 5)
});