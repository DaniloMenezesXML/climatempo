let container = document.querySelector('.container');
let form = document.querySelector('.form-city');
let search = document.querySelector('.search-city');
let cityName = document.querySelector('.city-name');
let icon = document.querySelector('.icon');
let degree = document.querySelector('.degree');
let wind = document.querySelector('.wind');
let day = document.querySelector('.day');
let day1 = document.querySelector('.day-1'); 
let day2 = document.querySelector('.day-2');
let minTemp = document.querySelector('.minTemp')

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await getCities(search.value);
});

async function getCities(city) {
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=b4ef3610385948e8b12222124241104&q=${city}`);
    let data = await response.json();

    if (data.error) {
        container.innerHTML = "<p>Cidade não encontrada!</p>";
    } else {
        cityName.textContent = data.location.name;
        icon.textContent = `${data.current.condition.icon} <p>${data.current.condition.text}</p>`;
        degree.textContent = `${data.current.temp_c}°`;
        wind.textContent = `Velocidade do vento: ${data.current.wind_kph} km/h`;
        day.textContent = data.forecast.forecastday[0].date;
        day1.textContent = data.forecast.forecastday[1].date;
        day2.textContent = data.forecast.forecastday[2].date;
        minTemp.textContent = data.forecast.mintemp_c;
    }
}
