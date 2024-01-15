export default function chooseWeatherIcon(forecast) {
  console.log(forecast);
  
  if (forecast.includes("Snow")) {
      return "assets/weather-icons/snow.png";
  } else if (forecast.includes("Rain")) {
      return "assets/weather-icons/Rain.png";
  } else if (forecast.includes("Partly")) {
      return "assets/weather-icons/partly-cloudy.png";
  } else if (forecast.includes("Cloudy")) {
      return "assets/weather-icons/cloudy.png";
  } else {
      return "assets/weather-icons/sunny.png";
  }
}