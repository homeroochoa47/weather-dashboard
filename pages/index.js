import MainForecastPanel from '@/components/MainForecastPanel'
import { fetchDailyForecastData } from '@/utils/fetchDailyForecastData'

import { Inter } from 'next/font/google'

import React, { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Dashboard() {
  // State is later set to an array with two objects corresponding to day and night weather
  const [dailyForecastData, setDailyForecastData] = useState([])

  // fetch data on initial page load, run timer to refetch using setInterval
  useEffect(() => {
    const fetchData = async () => {
      console.log('fetching');
      setDailyForecastData(await fetchDailyForecastData());
    };

    fetchData()
    const interval = setInterval(fetchData, 600000);

    return () => {
      clearTimeout(interval)
    }
  }, [])

  return (
    <main className={`flex min-h-screen items-center justify-between ${inter.className} bg-gradient-to-br from-[#027baa] to-[#f99c9a] text-black`}>
    
    {/* Loading message to prevent error on inital page load, pre-data fetch */}
    {dailyForecastData.length > 0 ? (
        <MainForecastPanel dailyForecastData={dailyForecastData} />
      ) : (
        <p>Loading...</p>
      )}

      <div id="forecast-overview-panel" className='flex flex-col'>

      </div>

    </main>
  )
}
