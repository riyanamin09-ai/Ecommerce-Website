import React from 'react'

const SecondSec = () => {

    const secondProductCardInfo = [
        {
            productImg: "src/assets/RecommentedItemsImg/Short.png",
            productPrice: "$9.99",
            productDetail: "Canon camera black, 100x zoom",
          },
          {
            productImg: "src/assets/RecommentedItemsImg/Headset.png",
            productPrice: "$8.99",
            productDetail: "Headset for gaming with mic",
          },
          {
            productImg: "src/assets/RecommentedItemsImg/Bag.png",
            productPrice: "$10.30",
            productDetail: "Smartwatch silver color medium",
          },
          {
            productImg: "src/assets/RecommentedItemsImg/Pot.png",
            productPrice: "$10.30",
            productDetail: "Blue wallet for men leather material",
          },
          {
            productImg: "src/assets/RecommentedItemsImg/Kettle.png",
            productPrice: "$80.95",
            productDetail: "Jeans bag for travel for men",
          },
       ]

  return (
    secondProductCardInfo.map((elem,idx)=>{
        return <div key={idx} className="h-[310px]  w-[220px] bg-white border-1 rounded border-gray-200">
        <img
          className="px-8 py-5"
          src={elem.productImg}
          alt=""
        />
        <h3 className="mt-3 px-5 text-[14px]">{elem.productPrice}</h3>
        <p className="leading-tight px-5 text-[15px] mt-1 text-gray-400">
          {elem.productDetail}
        </p>
      </div>
    })
  )
}

export default SecondSec