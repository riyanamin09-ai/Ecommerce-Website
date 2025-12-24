import React from 'react'
import ExtraServicesCard from './ExtraServicesCard'

const ExtraServices = () => {
  return (
    <div className='w-[1180px] m-auto mt-10'>
        <h1 className='text-[24px] font-semibold'>Our extra services</h1>
     <div className='flex gap-5 mt-4'>
     <ExtraServicesCard/>
     
     </div>
    </div>
  )
}

export default ExtraServices