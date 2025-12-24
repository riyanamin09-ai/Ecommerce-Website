import React from 'react'

const FirstSection = () => {

    const FirstSecInfo = [
        {
          flag:"src/assets/RegionSec/uae.png",
          countryName : "Arabic Emirates",
          link : "shopname.com.ae"
        },
        {
          flag:"src/assets/RegionSec/aus.png",
          countryName : "Australia",
          link : "shopname.com.au"
        },
        {
          flag:"src/assets/RegionSec/us.png",
          countryName : "United States",
          link : "shopname.com.us"
        },
        {
          flag:"src/assets/RegionSec/rus.png",
          countryName : "Russia",
          link : "shopname.com.ru"
        },
        {
          flag:"src/assets/RegionSec/it.png",
          countryName : "Italy",
          link : "shopname.com.it"
        }
      ]

  return (
    FirstSecInfo.map((elem,idx)=>{
        return <div key={idx} className="flex items-center gap-3 mt-5">
        <div>
          <img src={elem.flag} alt="" />
        </div>
        <div className="leading-tight">
          <h3 className="text-[16px]">{elem.countryName}</h3>
          <p className="text-[13px] text-gray-500">{elem.link}</p>
        </div>
      </div>
    })
  )
}

export default FirstSection