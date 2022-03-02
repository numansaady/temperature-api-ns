const API_KEY = `7a09ea4fb3baab050f38e9f3de826152`

const searchTemperature = () => {
    const city = document.getElementById('input-city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = (temperature) => {
    setInnerText('city-name', temperature.name);
    console.log(temperature.weather[0].main);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('weather-name', temperature.weather[0].main);
}
