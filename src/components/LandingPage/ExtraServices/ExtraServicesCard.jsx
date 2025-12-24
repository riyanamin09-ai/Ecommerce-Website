import React from 'react'

const ExtraServicesCard = () => {

    const extraServicesDetail = [
        {
            img : "src/assets/ExtraServicesImg/first.png",
            icon :"src/assets/ExtraServicesImg/1icon.png",
            text : "Source from Industry Hubs"
        },
        {
            img : "src/assets/ExtraServicesImg/second.png",
            icon : "src/assets/ExtraServicesImg/2icon.png",
            text : "Customize Your Products"
        },
        {
            img : "src/assets/ExtraServicesImg/third.png",
            icon : "src/assets/ExtraServicesImg/3icon.png",
            text : "Fast, reliable shipping by ocean or air"
        },
        {
            img : "src/assets/ExtraServicesImg/fourth.png",
            icon :"src/assets/ExtraServicesImg/4icon.png",
            text : "Product monitoring and inspection"
        },
    ]

  return (
    extraServicesDetail.map((elem,idx)=>{
        return <div key={idx} className='h-[200px] relative w-[280px]  border-gray-200 border-1 bg-white rounded-md overflow-hidden'>
        <img className='opacity-[90%] w-full bg-black' src={elem.img} alt="" />
        <p className='text-[17px] text-gray-800 font-medium mt-4 pl-5 pr-18'>{elem.text}</p>
        <div className='bg-blue-100 absolute right-5 p-5 rounded-[50%] bottom-12 border-2 border-white'>
            <img src={elem.icon} alt="" />
        </div>
    </div>
    })
  )
}

export default ExtraServicesCard