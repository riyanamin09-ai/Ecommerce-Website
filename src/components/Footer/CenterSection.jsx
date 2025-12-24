import React from 'react'

const CenterSection = ({heading,firstText,secondText,thirdText,fourthText}) => {
  return (
    <div>
        <h3 className='font-semibold text-[17px]'>{heading}</h3>
        <div className='flex flex-col gap-1 text-[15px] text-gray-500 mt-2'>
        <a href="#">{firstText}</a>
        <a href="#">{secondText}</a>
        <a href="#">{thirdText}</a>
        <a href="#">{fourthText}</a>
        </div>
    </div>
  )
}

export default CenterSection