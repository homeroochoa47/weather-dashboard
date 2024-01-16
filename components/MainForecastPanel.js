import LoadingSpinner from "./LoadingSpinner"
import chooseWeatherIcon from "@/utils/chooseWeatherIcon"

export default function MainForecastPanel({dailyForecastData}) {

  if (dailyForecastData.length < 1) {
    return (
      <div id="main-forecast-panel" className='flex flex-col md:h-screen md:w-[30%] bg-white-2/65 p-5 md:p-10 justify-center md:space-y-4'>
        <LoadingSpinner/>
      </div>
    )
  }

  return (
    <div id="main-forecast-panel" className='flex flex-col md:h-screen md:w-[30%] bg-white-2/65 p-5 md:p-8 justify-center items-center md:items-start md:space-y-4'>
      {/* <button></button> */}
      <div id="header" className='mb-4 md:mb-12'>
        <h3 className='text-lg'>Ashland, VA</h3>
        <h1 className='text-3xl md:text-4xl font-semibold'>First Arrival HQ</h1>
        <p className='text-lg'>Tomorrow</p>
      </div>

      <img className="w-[50%] md:w-full" src={chooseWeatherIcon(dailyForecastData[0].shortForecast)} alt={`${dailyForecastData[0].shortForecast} icon`} />

      <div className="w-full text-center md:text-start" id="forecast">
        <p className='text-5xl mt-3 md:mt-0 md:text-7xl'>{dailyForecastData[0].temperature}°F</p>
        <hr className="h-[1px] my-4 md:my-8 text-black/30 w-3/4 mx-auto md:w-full"></hr>
        <div className="flex w-full items-center justify-center md:justify-normal">
          <svg className="w-[18px] scale-x-[-1] mr-1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M240,120a48.05,48.05,0,0,0-48-48H152.2c-2.91-.17-53.62-3.74-101.91-44.24A16,16,0,0,0,24,40V200a16,16,0,0,0,26.29,12.25c37.77-31.68,77-40.76,93.71-43.3v31.72A16,16,0,0,0,151.12,214l11,7.33A16,16,0,0,0,186.5,212l11.77-44.36A48.07,48.07,0,0,0,240,120ZM40,199.93V40h0c42.81,35.91,86.63,45,104,47.24v65.48C126.65,155,82.84,164.07,40,199.93Zm131,8,0,.11-11-7.33V168h21.6ZM192,152H160V88h32a32,32,0,1,1,0,64Z"></path></svg>
          <h3 className='font-medium text-md md:text-lg italic'>{dailyForecastData[0].shortForecast}</h3>
        </div>
      </div>
    </div>
  )
}
