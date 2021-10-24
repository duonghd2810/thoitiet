const inputSearch = document.querySelector("#input-search");
const city = document.querySelector(".city-name");
const weather = document.querySelector(".weather-state");
const imgWeather = document.querySelector(".img-weather");
const temperature = document.querySelector(".temperature");
const hourIn = document.querySelector(".hour-in");
const hourOut = document.querySelector(".hour-out");
const humidity = document.querySelector(".humidity");
const windy = document.querySelector(".windy-speed");
const API_ID = "cf26e7b2c25b5acd18ed5c3e836fb235";
const DEFAULT_VALUE = "--";
inputSearch.onchange = (e) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${API_ID}&units=metric&lang=vi`
  ).then(async (res) => {
    const data = await res.json();
    console.log(data);
    city.innerHTML = data.name || DEFAULT_VALUE;
    weather.innerHTML = data.weather[0].description || DEFAULT_VALUE;
    imgWeather.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );
    temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;
    hourIn.innerHTML =
      moment.unix(data.sys.sunrise).format("H:mm") || DEFAULT_VALUE;
    hourOut.innerHTML =
      moment.unix(data.sys.sunset).format("H:mm") || DEFAULT_VALUE;
    humidity.innerHTML = data.main.humidity || DEFAULT_VALUE;
    windy.innerHTML = data.wind.speed || DEFAULT_VALUE;
  });
};
