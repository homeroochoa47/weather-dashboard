export default function MainForecastPanel({dailyForecastData}) {
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
        <h3 className='text-lg'>{dailyForecastData[0].shortForecast}</h3>
        <p className='text-6xl'>{dailyForecastData[0].temperature}°F</p>
      </div>
    </div>
  )
}
