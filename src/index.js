// import { locationInit, location } from "./location.js";
// window.addEventListener("load", locationInit);

// Declare query selectors

let city = document.querySelector(".location");
let timeUpdatedText = document.querySelector(".time");
let tempText = document.querySelector(".temp");
let summaryText = document.querySelector(".summary");
let iconDiv = document.querySelector(".icon");
let iconDiv2 = document.querySelector(".icon2");
let highLowText = document.querySelector(".highlow");

// Detail Query Selectors

let highLowDetail = document.querySelector(".highlow-detail");
let feelsLike = document.querySelector(".feelslike");
let humidity = document.querySelector(".humidity");
let pressure = document.querySelector(".pressure");
let wind = document.querySelector(".wind");

const API = "43e9a81c353f2fc1da34c6caa2b19ed3";

function locationInit() {
  // Create location object with lat / lon properties

  // Check if geolocation is enabled

  if (navigator.geolocation) {
    // console.log("Geolocation enabled");
    navigator.geolocation.getCurrentPosition((loc) => {
      //   location.lat = loc.coords.latitude;
      //   location.lon = loc.coords.longitude;
      //   console.log(`Latitude: ${location.lat}`);
      //   console.log(`Longitude: ${location.lon}`);
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${loc.coords.latitude}&lon=${loc.coords.longitude}&appid=${API}&units=imperial`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          city.textContent = data.name;
          tempText.textContent = `${data.main.temp}°`;

          // Icons
          if (data.weather[1]) {
            summaryText.textContent =
              `${data.weather[0].main}` + ` / ${data.weather[1].main}`;
            let icon1 = data.weather[0].icon;
            let icon2 = data.weather[1].icon;
            iconDiv.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon1}@2x.png"></img>`;
            iconDiv2.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon2}@2x.png"></img>`;
          } else {
            summaryText.textContent = `${data.weather[0].main}`;
            let icon1 = data.weather[0].icon;
            iconDiv.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon1}@2x.png"></img>`;
          }
          highLowText.textContent = `${data.main.temp_max}° / ${data.main.temp_min}°`;
          highLowDetail.textContent = `${data.main.temp_max}° / ${data.main.temp_min}°`;
          feelsLike.textContent = `${data.main.feels_like}°`;
          humidity.textContent = `${data.main.humidity}%`;
          pressure.textContent = `${data.main.pressure} in`;
          wind.textContent = `${data.wind.speed} mph`;
        });
    });
  } else {
    console.log("Geolocation is not enabled");
  }
}
locationInit();
