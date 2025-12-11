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

    parentTag.appendChild(currentDate);
    parentTag.appendChild(weatherIcon);
    parentTag.appendChild(weatherDesc);
    parentTag.appendChild(windSpeed);
    parentTag.appendChild(currentTemp);
};

// ask for a new zipcode

// data validation for the zip-code character length