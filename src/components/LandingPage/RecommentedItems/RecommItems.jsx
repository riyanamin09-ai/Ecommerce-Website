import React from 'react'
import ProductCard from './ProductCard'

const RecommItems = () => {
  return (
    <div className='w-[1180px] m-auto mt-10'>
        <h1 className='text-[24px] font-semibold'>Recommented items</h1>
        <div className='flex gap-5 mt-4'>
            <ProductCard/>
        </div>
    </div>
  )
}

export default RecommItems