function handlesearch(event) {
  event.preventDefault();
  let searchinput = document.querySelector(".search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchinput.value;
}

let searchFormElement = document.querySelector("#city-entered");
console.log(searchFormElement);
searchFormElement.addEventListener("submit", handlesearch);
