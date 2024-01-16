//takes in a forecast based on the wording received in the API.
//whis was a short-form solution aiming for efficiency as opposed to greater detail requiring more icons and complexity.
export default function chooseWeatherIcon(forecast) {
  if (forecast.includes("Snow")) {
      return "assets/weather-icons/snow.png";
  } else if (forecast.includes("Rain")) {
      return "assets/weather-icons/Rain.png";
  } else if (forecast.includes("Partly") || forecast.includes("Fog")) {
      return "assets/weather-icons/partly-cloudy.png";
  } else if (forecast.includes("Cloudy")) {
      return "assets/weather-icons/cloudy.png";
  } else {
      return "assets/weather-icons/sunny.png";
  }
}