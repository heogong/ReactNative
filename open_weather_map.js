const WEATHER_API_KEY = 'f2355b0a945709e7142a53c6ad6c27f8';
const API_STEM = 'https://api.openweathermap.org/data/2.5/forecast?';

function zipUrl(zip) {
    return '${API_STEM}id=${zip}&APPID=${WEATHER_API_KEY}';
}

function fetchForecast(zip) {
    return fetch(zipUrl(zip))
        .then(response => respons.json())
        .then(responseJSON => {
            return {
                main: responseJSON.weather[0].main,
                description: responseJSON.weather[0].description,
                temp: responseJSON.main.temp
            };
        })
        .catch(error => {
            console.error(error);
        })
}

export default { fetchForecast: fetchForecast };