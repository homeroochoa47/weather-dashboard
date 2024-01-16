import React, { useState } from 'react'

export default function Dropdown() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen)
    console.log(isMenuOpen)
  }

  return (
    <div className='absolute flex flex-col items-end md:items-start top-3 right-3 md:top-5 md:left-5'>
      <button id="button" onClick={handleMenuOpen} className='bg-black/70 text-white-2 p-2 rounded-full cursor-pointer'>
        <svg className='w-[22px] md:w-[24px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_250_73)">
        <path d="M9 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V9C3 9.53043 3.21071 10.0391 3.58579 10.4142C3.96086 10.7893 4.46957 11 5 11H9C9.53043 11 10.0391 10.7893 10.4142 10.4142C10.7893 10.0391 11 9.53043 11 9V5C11 4.46957 10.7893 3.96086 10.4142 3.58579C10.0391 3.21071 9.53043 3 9 3ZM5 9V5H9V9H5Z" fill="#FEFEFE"/>
        <path d="M19 3H15C14.4696 3 13.9609 3.21071 13.5858 3.58579C13.2107 3.96086 13 4.46957 13 5V9C13 9.53043 13.2107 10.0391 13.5858 10.4142C13.9609 10.7893 14.4696 11 15 11H19C19.5304 11 20.0391 10.7893 20.4142 10.4142C20.7893 10.0391 21 9.53043 21 9V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3ZM15 9V5H19V9H15Z" fill="#FEFEFE"/>
        <path d="M9 13H5C4.46957 13 3.96086 13.2107 3.58579 13.5858C3.21071 13.9609 3 14.4696 3 15V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H9C9.53043 21 10.0391 20.7893 10.4142 20.4142C10.7893 20.0391 11 19.5304 11 19V15C11 14.4696 10.7893 13.9609 10.4142 13.5858C10.0391 13.2107 9.53043 13 9 13ZM5 19V15H9V19H5Z" fill="#FEFEFE"/>
        <path d="M19 13H15C14.4696 13 13.9609 13.2107 13.5858 13.5858C13.2107 13.9609 13 14.4696 13 15V19C13 19.5304 13.2107 20.0391 13.5858 20.4142C13.9609 20.7893 14.4696 21 15 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V15C21 14.4696 20.7893 13.9609 20.4142 13.5858C20.0391 13.2107 19.5304 13 19 13ZM15 19V15H19V19H15Z" fill="#FEFEFE"/>
        </g>
        <defs>
        <clipPath id="clip0_250_73">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>
      </button>
      
      {isMenuOpen && 
      <div id="menu" className='bg-black/85 backdrop-blur-lg flex flex-col mt-1.5 ml-1.5 rounded-lg p-2'>
        <div className='flex items-center space-x-2 border-b-[1px] border-white-2 pb-3'>
          <svg className='w-[24px] text-white-2' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>
          <input className='w-full h-[70%] border-[1px] rounded-lg border-white-2 bg-transparent px-3 py-2 placeholder-white-2 text-white-2' type="text" placeholder='Search Cities' />
        </div>

        <div id="saved-cities" className='flex flex-col text-sm text-white-2 pt-2'>
          <p className='text-xs font-light pb-1'>Saved Cities:</p>
          <ul className='flex flex-col space-y-1'>
            <li className='bg-white-2/20 p-2 rounded-md cursor-pointer'>
              Ashland, VA
            </li>
            <li className='p-2 rounded-md cursor-pointer hover:bg-white-2/20 transition-all duration-150 ease-out'>
              Los Angeles, CA
            </li>
            <li className='p-2 rounded-md cursor-pointer hover:bg-white-2/20 transition-all duration-150 ease-out'>
              New York, NY
            </li>
          </ul>
        </div>
      </div>}
    </div>
  )
}
