import axios from 'axios';
import formatDate from './formatDate';

export async function fetchHourlyForecastData() {
  const apiUrl = "https://api.weather.gov/gridpoints/AKQ/43,86/forecast/hourly"
  try {
    const response = await axios.get(apiUrl);
    const filteredWeatherData = filterApiData(response.data.properties.periods)
    return filteredWeatherData
  } catch (err) {
    console.error(err)
  }
}

// retreives necessary data to parse through json to find the correct data
const filterApiData = (apiResponseData) => {
  const currentDate = new Date();
  const tomorrowsDate = new Date();
  tomorrowsDate.setDate(currentDate.getDate() + 1);

  // Format tomorrow's date to match the ISO format from the API response object
  const tomorrowsDateFormatted = formatDate(tomorrowsDate)

  // Filter to only include data for the following day and the specified time range (4AM to 12AM)
  const filteredWeatherData = apiResponseData.filter(period => {
    const startTime = new Date(period.startTime);
    const startHour = startTime.getHours();
    return (
      period.startTime.includes(tomorrowsDateFormatted) &&
      startHour >= 8 &&
      startHour < 20
    );
  });
  
  // Return filteredWeatherData
  return filteredWeatherData;
};