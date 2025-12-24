import React from 'react'
import CountrySec from './CountrySec'

const RegionSection = () => {
  return (
    <div className='w-[1180px] m-auto mt-10'>
        <h1 className='text-[24px] font-semibold'>Suppliers by region</h1>
        <div>
        <CountrySec/>
        </div>
    </div>
  )
}

export default RegionSection