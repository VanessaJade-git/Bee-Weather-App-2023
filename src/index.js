function handlesearch(event) {
  event.preventDefault();
  let searchinput = document.querySelector(".search-form-input");

  searchCity(searchinput.value);
}

let searchFormElement = document.querySelector("#city-entered");
console.log(searchFormElement);
searchFormElement.addEventListener("submit", handlesearch);

function searchCity(city) {
  let api = "67c51o1bccat73f84f450a30f6ffcb49";
  let apiKey = `https://api.shecodes.io/weather/v1/current?query=${city}&key=67c51o1bccat73f84f450a30f6ffcb49&units=metric`;

  axios.get(apiKey).then(displayTemperature);
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
}
searchCity("Paris");
