const API = "43e9a81c353f2fc1da34c6caa2b19ed3";

function locationInit() {
  // Create location object with lat / lon properties

  // Check if geolocation is enabled

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((loc) => {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${loc.coords.latitude}&lon=${loc.coords.longitude}&appid=${API}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    });
  } else {
    console.log("Geolocation is not enabled");
  }
}
locationInit();
