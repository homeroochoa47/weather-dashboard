import MainForecastPanel from '@/components/MainForecastPanel'

import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Dashboard() {
  return (
    <main className={`flex min-h-screen items-center justify-between ${inter.className} bg-gradient-to-br from-[#027baa]  to-[#f99c9a] text-black`}>
      
      <MainForecastPanel/>

      <div id="forecast-overview-panel" className='flex flex-col'>

      </div>

    </main>
  )
}
