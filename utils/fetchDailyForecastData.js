import axios from 'axios';
import formatDate from './formatDate';

export async function fetchDailyForecastData() {
  const apiUrl = "https://api.weather.gov/gridpoints/AKQ/43,86/forecast"
  try {
    const response = await axios.get(apiUrl);
    const filteredWeatherData = filterApiData(response.data.properties.periods)
    return filteredWeatherData
  } catch (err) {
    console.error(err)
  }
}

// formats the dates to parse through json to find the correct data.
const filterApiData = (apiResponseData) => {
  const currentDate = new Date()
  const tomorrowsDate = new Date()
  tomorrowsDate.setDate(currentDate.getDate() + 1)


  // format tomorrows date to match the ISO format from the api response object
  const tomorrowsDateFormatted = formatDate(tomorrowsDate)


  // Filter to only include data for the following day.
  const filteredWeatherData = apiResponseData.filter(period => {
    return period.startTime.includes(tomorrowsDateFormatted)
  })

  return filteredWeatherData
}