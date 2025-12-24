import React from 'react'

const SideImg = ({leftImg,leftImgText}) => {
  return (
    <div className=' w-1/4 h-full relative'>
       <div className='absolute top-6 left-8 '>
       <h2 className='text-[18px] font-semibold leading-tight'>{leftImgText}</h2>
       <button className='bg-white px-3 py-1.5 rounded-md text-[14px] font-medium mt-5'>Source now</button>
       </div>
        <img src={leftImg} className='w-full h-full rounded-l' alt="" />
    </div>
  )
}

export default SideImg