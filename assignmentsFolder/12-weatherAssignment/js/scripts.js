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
        // console.log(allData);
        displayWeather(allData);
    });

// function that displays the current weather
function displayWeather(weatherResults) {
    console.log(weatherResults.weather[0].icon);
    imgPath = weatherResults.weather[0].icon;

    const weatherIcon = document.createElement('img');
    weatherIcon.src = `https://openweathermap.org/img/wn/${imgPath}@2x.png`
};

// ask for a new zipcode

// data validation for the zip-code character length