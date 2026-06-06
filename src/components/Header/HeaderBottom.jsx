import React from "react";
import { FaAngleDown } from "react-icons/fa6";

const HeaderBottom = () => {
  return (
    <div className="flex justify-between py-4 px-20 border-b-1 border-gray-300 items-center">
      <div className="left flex gap-8 text-[16px] font-semibold items-center">
        <div className="flex items-center gap-1">
          <img className="h-[25px]" src="src/assets/menu.png" alt="" />
          <p className="cursor-pointer">All Category</p>
        </div>
        <p className="cursor-pointer">Hot Offers</p>
        <p className="cursor-pointer">Gift Boxes</p>
        <p className="cursor-pointer">Projects</p>
        <p className="cursor-pointer">Menu Item</p>
        <div className="flex items-center gap-1 cursor-pointer">
          <p>Help</p>
          <FaAngleDown className="text-gray-400"/>
        </div>
      </div>
      <div className="right flex gap-6 text-[16px] font-semibold items-center">
        <div>
          <p className="flex items-center gap-2 cursor-pointer">
            English, USD{" "}
            <span className="text-gray-40">
              <FaAngleDown />
            </span>
          </p>
        </div>
        <div>
          <p className="flex items-center gap-2 cursor-pointer">
            Ship to{" "}
            <span>
              <img src="src/assets/Navbar/DE@2x.png" alt="" />
            </span>
            <span className="text-gray-400">
              <FaAngleDown />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
