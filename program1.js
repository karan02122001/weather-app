const weatherInfo = document.getElementById("weather-info");

function getWeather() {
    const locationInput = document.getElementById("location");
    const location = locationInput.value;
    const weatherData = getWeatherData();
    displayWeather(weatherData, location);
}

function getWeatherData() {
    const weatherData = {
        temperature: "72°F",
        humidity: "50%",
        description: "Partly Cloudly",

    };
    return weatherData;
}

function displayWeather(data, location) {
    const html = `
    <h2>Weather in ${location}:</h2> 
    <p>Temperature: ${data.temperature}</p>
    <p>Humidity: ${data.humidity}</p>
    <p>Description: ${data.description}</p>                                                                                                                                                                                                         
    `;
    weatherInfo.innerHTML = html;
}


