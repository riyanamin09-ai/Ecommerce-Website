import React from 'react'
import { IoIosArrowUp } from "react-icons/io";


const LastSection = () => {
  return (
    <div className='bg-gray-200 px-30 py-5 flex justify-between'>
        <p className='text-[14px] text-gray-800'>© 2023 Ecommerce. </p>
        <div className='flex items-center gap-2 text-[14px]'>
            <img src="src/assets/RegionSec/us.png" alt="" />
            <p className='text-gray-700'>English</p>
            <IoIosArrowUp />

        </div>
    </div>
  )
}

export default LastSection