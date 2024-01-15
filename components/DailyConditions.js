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
    <div id="daily-conditions" className='w-full'>
      <p className='text-xl font-medium'>Tomorrows's Conditions:</p>
      <div id="cards" className='grid grid-cols-3 gap-5 h-48'>

        {/* Wind Conditions */}
        <div id="wind-card" className='flex flex-col bg-white/65 px-4 rounded-lg justify-around relative pt-14'>
          <h3 className='text-xl font-medium text-black/70 absolute top-3 left-4'>Wind Status</h3>
          <h4 className='text-5xl font-normal tracking-tighter'>{dailyForecastData[0].windSpeed.split('m')[0]} <span className='text-lg tracking-normal'>mph</span></h4>
          <div id="wind=direction" className='flex space-x-2 items-center'>
            <img className='w-[25px]' src="assets/weather-icons/compass.svg" alt="" />
            <p className='font-medium'>{dailyForecastData[0].windDirection}</p>
          </div>
        </div>

        {/* Humidity */}
        <div id="humidity-card" className='flex flex-col bg-white/65 px-4 rounded-lg justify-around relative pt-14'>
          <h3 className='text-xl font-medium text-black/70 absolute top-3 left-4'>Humidity</h3>
          <h4 className='text-5xl font-normal'>{dailyForecastData[0].relativeHumidity.value} <span className='text-lg -ml-2'>%</span></h4>
          <p className='font-medium'>Fair</p>
        </div>

        {/* Rain */}
        <div id="precipitation-card" className='flex flex-col bg-white/65 px-4 rounded-lg justify-around relative pt-14'>
          <h3 className='text-xl font-medium text-black/70 absolute top-3 left-4'>Precipitation</h3>
          <h4 className='text-5xl font-normal'>{dailyForecastData[0].probabilityOfPrecipitation.value} <span className='text-lg -ml-2'>%</span></h4>
          <p className=''></p>
        </div>
      </div>

    </div>
  )
}