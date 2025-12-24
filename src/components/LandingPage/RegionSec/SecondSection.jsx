import React from 'react'

const SecondSection = () => {

    const SecondSecInfo = [
        {
          flag:"src/assets/RegionSec/dk.png",
          countryName : "Denmark",
          link : "shopname.com.dk"
        },
        {
          flag:"src/assets/RegionSec/fr.png",
          countryName : "France",
          link : "shopname.com.fr"
        },
        {
          flag:"src/assets/RegionSec/uae.png",
          countryName : "Arabic Emirates",
          link : "shopname.com.ae"
        },
        {
          flag:"src/assets/RegionSec/cn.png",
          countryName : "China",
          link : "shopname.com.cn"
        },
        {
          flag:"src/assets/RegionSec/gb.png",
          countryName : "Great Britain",
          link : "shopname.com.uk"
        }
      ]

  return (
    SecondSecInfo.map((elem,idx)=>{
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

export default SecondSection