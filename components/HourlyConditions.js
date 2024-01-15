import { fetchHourlyForecastData } from '@/utils/fetchHourlyForecastData';
import { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';
import chooseWeatherIcon from '@/utils/chooseWeatherIcon';

export default function HourlyConditions() {
  const [hourlyForecastData, setHourlyForecastData] = useState([])
 
  // fetch data on initial page load, run timer to refetch using setInterval
  useEffect(() => {
    const fetchData = async () => {
      setHourlyForecastData(await fetchHourlyForecastData());
    };

    fetchData()
    const interval = setInterval(fetchData, 600000);

    return () => {
      clearTimeout(interval)
    }
  }, [])

  // Convert the ISO time from the API to 12hr format.
  const convertToHours = (startTime) => {
    const date = new Date(startTime);
    const hour = date.getHours();
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const adjustedHour = hour % 12 || 12;
  
    return `${adjustedHour} ${ampm}`;
  };

  // Loading state while fetching data from API
  if (hourlyForecastData.length < 1) {
    return (
      <LoadingSpinner/>
    )
  }

  return (
    <div id="daily-conditions" className='w-full'>
      <p className='text-xl font-medium'>Hourly Conditions:</p>
      <div id="cards" className='grid grid-cols-6 gap-5'>
        {hourlyForecastData.map((item, index) => {
          return(
            <div key={index} className='flex flex-col items-center bg-white/65 py-1 px-2 rounded-lg justify-around relative'>
              <p className='text-md'>{convertToHours(item.startTime)}</p>
              <hr className="h-[1px] w-[80%] text-black/70 pb-3"></hr>
              <img className='w-[35px] pb-3' src={chooseWeatherIcon(item.shortForecast)} alt="" />
              <p className='text-2xl font-medium'>{item.temperature}°F</p>
            </div>
          )
        })}
      </div>

    </div>
  )
}
