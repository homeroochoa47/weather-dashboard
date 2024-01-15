import React from 'react'

const array = [1,2,3,4,5,6,7,8,9,10]

export default function HourlyConditions() {
  return (
    <div id="daily-conditions" className='w-full'>
      <p className='text-xl font-medium'>Hourly Conditions:</p>
      <div id="cards" className='grid grid-cols-5 gap-5 h-48'>
        {array.map(() => {
          return(
            <div className='flex flex-col items-center bg-white/65 py-1 px-2 rounded-lg justify-around relative'>
              <p className='text-md'>8AM</p>
              <hr className="h-[1px] w-[80%] text-black/70 pb-3"></hr>
              <img className='w-[35px] pb-3' src="assets/weather-icons/Rain.png" alt="" />
              <p className='text-2xl font-medium'>10°F</p>
            </div>
          )
        })}
      </div>

    </div>
  )
}
