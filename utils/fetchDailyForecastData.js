import axios from 'axios';
import formatDate from './formatDate';

export async function fetchDailyForecastData() {
  const apiUrl = "https://api.weather.gov/gridpoints/AKQ/45,84/forecast"
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
  const currentDate = new Date()
  const tomorrowsDate = new Date()
  tomorrowsDate.setDate(currentDate.getDate() + 1)


  // format tomorrows date to match the ISO format from the api response object
  const tomorrowsDateFormatted = formatDate(tomorrowsDate)

  // console.log(tomorrowsDateFormatted)

  // Filter to only include data for the following day.
  const filteredWeatherData = apiResponseData.filter(period => {
    return period.startTime.includes(tomorrowsDateFormatted)
  })

  return filteredWeatherData
}