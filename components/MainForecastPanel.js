export default function MainForecastPanel({dailyForecastData}) {

  if (dailyForecastData.length < 1) {
    return (
      <div id="main-forecast-panel" className='flex flex-col h-screen w-1/4 bg-white-2/65 p-10 justify-center space-y-4'>
          <svg aria-hidden="true" className="w-8 h-8 mx-auto text-black/40 animate-spin fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
      </div>
    )
  }

  return (
    <div id="main-forecast-panel" className='flex flex-col h-screen w-1/4 bg-white-2/65 p-10 justify-center space-y-4'>
      {/* <button></button> */}
      <div id="header" className='mb-12'>
        <h3 className='text-lg'>Ashland, VA</h3>
        <h1 className='text-4xl'>First Arrival HQ</h1>
        <p className='text-lg'>Tomorrow</p>
      </div>

      <img src="assets/weather-icons/Rain.png" alt="" />

      <div id="forecast">
        <p className='text-7xl'>{dailyForecastData[0].temperature}°F</p>
        <hr className="h-[1px] my-8 text-black/30"></hr>
        <div className="flex items-center">
          <svg className="w-[18px] scale-x-[-1] mr-1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M240,120a48.05,48.05,0,0,0-48-48H152.2c-2.91-.17-53.62-3.74-101.91-44.24A16,16,0,0,0,24,40V200a16,16,0,0,0,26.29,12.25c37.77-31.68,77-40.76,93.71-43.3v31.72A16,16,0,0,0,151.12,214l11,7.33A16,16,0,0,0,186.5,212l11.77-44.36A48.07,48.07,0,0,0,240,120ZM40,199.93V40h0c42.81,35.91,86.63,45,104,47.24v65.48C126.65,155,82.84,164.07,40,199.93Zm131,8,0,.11-11-7.33V168h21.6ZM192,152H160V88h32a32,32,0,1,1,0,64Z"></path></svg>
          <h3 className='text-sm font-normal italic'>{dailyForecastData[0].shortForecast}</h3>
        </div>
      </div>
    </div>
  )
}
