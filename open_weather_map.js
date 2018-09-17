const WEATHER_API_KEY = 'f2355b0a945709e7142a53c6ad6c27f8';
//const API_STEM = 'https://api.openweathermap.org/data/2.5/forecast?';
const API_STEM = 'https://api.openweathermap.org/data/2.5/weather?';

function zipUrl(zip) {
    //return `${API_STEM}id=${zip}&APPID=${WEATHER_API_KEY}`;
    return `${API_STEM}q=${zip}&units=imperial&APPID=${WEATHER_API_KEY}`;
}

function fetchForecast(zip) {
    zip = 10001;
    return fetch(zipUrl(zip))
        .then(response => response.json())
        .then(responseJSON => {
            console.log(responseJSON.weather[0])
            return {
                main: responseJSON.weather[0].main,
                description: responseJSON.weather[0].description,
                temp: responseJSON.main.temp
            };
        })
        .catch(error => {
            console.error('error : ', error);
        })
}

export default { fetchForecast: fetchForecast };