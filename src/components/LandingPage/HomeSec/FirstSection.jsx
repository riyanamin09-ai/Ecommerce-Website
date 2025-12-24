import React from 'react'

const FirstSection = ({firstSecProductDetail}) => {
  return (
    firstSecProductDetail &&
    firstSecProductDetail.map((product) => {
      return (
        <div key={product.id} className="w-1/4 h-[50%]  p-3 flex justify-between border-r-1 border-t-1 border-gray-300">
          <div className="p-1">
            <h2 className="text-[16px] font-medium">{product.productName}</h2>
            <p className="text-[12px] mt-2 text-gray-600 leading-tight">
              From <br />
              {product.price}
            </p>
          </div>
          <div className="items-end flex">
            <img src={product.productImg} alt="" />
          </div>
        </div>
      );
    })
  )
}

export default FirstSection