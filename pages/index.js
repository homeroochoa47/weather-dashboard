import MainForecastPanel from '@/components/MainForecastPanel'
import DailyConditions from '@/components/DailyConditions'
import HourlyConditions from '@/components/HourlyConditions'
import { fetchDailyForecastData } from '@/utils/fetchDailyForecastData'

import { Montserrat } from 'next/font/google'

import React, { useEffect, useState } from 'react'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Dashboard() {
  // State is later set to an array with two objects corresponding to day and night weather
  const [dailyForecastData, setDailyForecastData] = useState([])

  // fetch data on initial page load, run timer to refetch using setInterval
  useEffect(() => {
    const fetchData = async () => {
      setDailyForecastData(await fetchDailyForecastData());
    };

    fetchData()
    const interval = setInterval(fetchData, 600000);

    return () => {
      clearTimeout(interval)
    }
  }, [])

  return (
    <main className={`flex flex-col md:flex-row md:min-h-screen items-center justify-between ${montserrat.className} bg-gradient-to-br from-[#027baa] to-[#f99c9a] text-black`}>
    
      <MainForecastPanel dailyForecastData={dailyForecastData} />

      <div className='flex flex-col items-center justify-evenly md:h-[90vh] w-[90%] md:w-full'>
        
        <div className='flex flex-col md:w-[80%] mt-10 md:mt-0'>
          <p className='text-lg lg:text-xl font-medium'>Tomorrows's Forecast:</p>
          <div id="forecast-block" className='flex flex-col bg-white/65 p-3 rounded-lg justify-around relative'>
            <h3 className='text-black text-sm md:text-base'>{dailyForecastData[0]?.detailedForecast}</h3>
          </div>
        </div>

        <div id="forecast-overview-panel" className='flex flex-col w-full md:w-[80%] max-w-4xl justify-evenly mt-8 md:mt-0'>
          <DailyConditions dailyForecastData={dailyForecastData} />
        </div>

        <div id="forecast-overview-panel" className='flex flex-col w-full md:w-[80%] max-w-4xl justify-evenly my-8 md:my-0'>
          <HourlyConditions />
        </div>
      </div>
      

    </main>
  )
}
