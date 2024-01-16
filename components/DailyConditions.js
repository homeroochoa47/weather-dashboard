import React from 'react'
import LoadingSpinner from './LoadingSpinner'

export default function DailyConditions({dailyForecastData}) {
  
  // Loading state while fetching data from API
  if (dailyForecastData.length < 1) {
    return (
      <LoadingSpinner/>
    )
  }

  return (
    <div id="daily-conditions" className='w-full flex flex-col'>
      <h2 className='text-lg lg:text-xl font-medium'>Tomorrows's Conditions:</h2>

      <div id="cards" className='grid grid-cols-1 md:grid-cols-3 gap-5 md:h-32 lg:h-40 xl:h-48'>
        {/* Wind Conditions */}
        <div id="wind-card" className='flex flex-col bg-white/65 px-4 rounded-lg justify-around relative pt-8 lg:pt-14 pb-3 md:pb-0 space-y-1'>
          <h4 className='text-md lg:text-xl font-medium text-black/70 absolute top-3 left-4'>Wind Status</h4>
          <h5 className='text-3xl xl:text-5xl font-normal tracking-tighter'>{dailyForecastData[0].windSpeed.split('m')[0]} <span className='text-lg tracking-normal'>mph</span></h5>
          <div id="wind=direction" className='flex space-x-2 items-center'>
            <img className='w-[25px]' src="assets/weather-icons/compass.svg" alt="" />
            <p className='font-medium'>{dailyForecastData[0].windDirection}</p>
          </div>
        </div>

        {/* Humidity */}
        <div id="humidity-card" className='flex flex-col bg-white/65 px-4 rounded-lg justify-around relative pt-8 lg:pt-14 pb-3 md:pb-0 space-y-1'>
          <h4 className='text-md lg:text-xl font-medium text-black/70 absolute top-3 left-4'>Humidity</h4>
          <h5 className='text-3xl xl:text-5xl font-normal'>{dailyForecastData[0].relativeHumidity.value} <span className='text-lg -ml-2'>%</span></h5>
          <p className='font-medium'>Fair</p>
        </div>

        {/* Rain */}
        <div id="precipitation-card" className='flex flex-col bg-white/65 px-4 rounded-lg justify-around relative pt-8 lg:pt-14 pb-3 md:pb-0 space-y-1'>
          <h4 className='text-md lg:text-xl font-medium text-black/70 absolute top-3 left-4'>Precipitation</h4>
          <h5 className='text-3xl xl:text-5xl font-normal'>{dailyForecastData[0].probabilityOfPrecipitation.value} <span className='text-lg -ml-2'>%</span></h5>
          <p></p>
        </div>
      </div>

    </div>
  )
}