import React from 'react'
import SideMenu from './SideMenu';

const Side = () => {
  
  const firstMenuCat =  {
      heading : "Category",
      buttons : {
        first : "Mobile accessory",
        second : "Electronics",
        third : "Smartphones",
        fourth : "Modern tech"
      }
    }
  const secondMenuCat =  {
      heading : "Brand",
      buttons : {
        first : "Samsung",
        second : "Apple",
        third : "Huawei",
        fourth : "Lenovo"
      }
    }
  const thirdMenuCat =  {
      heading : "Features",
      buttons : {
        first : "Metallic",
        second : "Plastic cover",
        third : "8GB Ram",
        fourth : "Super power"
      }
    }
    let radio = <label htmlFor="radio"> <input type="radio" className='cursor-pointer' name="radio" id="" /></label>
  
  return (

    <div className=''>
    <SideMenu heading={firstMenuCat.heading} first={firstMenuCat.buttons.first} second={firstMenuCat.buttons.second} third={firstMenuCat.buttons.third} fourth={firstMenuCat.buttons.fourth} radio={radio}/>
    <SideMenu heading={secondMenuCat.heading} first={secondMenuCat.buttons.first} second={secondMenuCat.buttons.second} third={secondMenuCat.buttons.third} fourth={firstMenuCat.buttons.fourth} radio={radio}/>
    <SideMenu heading={thirdMenuCat.heading} first={thirdMenuCat.buttons.first} second={thirdMenuCat.buttons.second} third={thirdMenuCat.buttons.third} fourth={thirdMenuCat.buttons.fourth} radio={radio}/>
    </div>
  )
}

export default Side