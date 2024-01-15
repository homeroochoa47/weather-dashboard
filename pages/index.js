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
    <main className={`flex min-h-screen items-center justify-between ${montserrat.className} bg-gradient-to-br from-[#027baa] to-[#f99c9a] text-black`}>
    
      <MainForecastPanel dailyForecastData={dailyForecastData} />

      <div className='flex flex-col w-full justify-evenly h-[90vh]'>
        <div id="forecast-overview-panel" className='flex flex-col w-[80%] mx-auto max-w-4xl justify-evenly'>
          <DailyConditions dailyForecastData={dailyForecastData} />
        </div>

        <div id="forecast-overview-panel" className='flex flex-col w-[80%] mx-auto max-w-4xl justify-evenly'>
          <HourlyConditions />
        </div>
      </div>
      

    </main>
  )
}
