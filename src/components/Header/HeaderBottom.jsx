import React from "react";
import { FaAngleDown } from "react-icons/fa6";

const HeaderBottom = () => {
  return (
    <div className="flex justify-between py-4 px-20 border-b-1 border-gray-300 items-center">
      <div className="left flex gap-8 text-[16px] font-semibold items-center">
        <div className="flex items-center gap-1">
          <img className="h-[25px]" src="src/assets/menu.png" alt="" />
          <p>All Category</p>
        </div>
        <p>Hot Offers</p>
        <p>Gift Boxes</p>
        <p>Projects</p>
        <p>Menu Item</p>
        <div className="flex items-center gap-1">
          <p>Help</p>
          <FaAngleDown className="text-gray-400" />
        </div>
      </div>
      <div className="right flex gap-6 text-[16px] font-semibold items-center">
        <div>
          <p className="flex items-center gap-2">
            English, USD{" "}
            <span className="text-gray-400">
              <FaAngleDown />
            </span>
          </p>
        </div>
        <div>
          <p className="flex items-center gap-2">
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
