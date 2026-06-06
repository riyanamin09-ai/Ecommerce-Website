import React from "react";
import { FaAngleDown } from "react-icons/fa6";

const HeaderTop = () => {
  return (
    <div className="flex p-5 justify-around items-center border-gray-300 border-b-1">
      <div className="left flex items-center gap-3">
        <img src="src/assets/Navbar/logo-symbol.png" alt="" />
        <img src="src/assets/Navbar/Brand.png" className="h-6" alt="" />
      </div>
      <div className="mid flex items-center rounded ">
        <input
          type="text"
          className="py-1.5 pl-3 pr-50 rounded-l-lg outline-none border-2  border-[#0D6EFD]"
          placeholder="Search"
        />
        <p className="flex items-center font-normal gap-2 px-2 py-1.5  border-r-0 border-2 border-l-0 border-[#0D6EFD] ">
          All Category
          <span className="text-gray-400">
            <FaAngleDown />
          </span>
        </p>
        <button className="bg-[#0067FF] cursor-pointer hover:bg-blue-700 rounded-r-lg px-5 text-white py-1.5 border-2 border-[#0D6EFD]  ">
          Search
        </button>
      </div>
      <div className="right flex gap-13 items-center">
        <div className="flex flex-col text-[14px] text-gray-500 gap-1 w-6 justify-between items-center cursor-pointer">
          <img src="src/assets/Navbar/Vector1.png" alt="" />
          <p>Profile</p>
        </div>
        <div className="flex flex-col text-[14px] text-gray-500 gap-1  w-6 justify-between items-center cursor-pointer">
          <img src="src/assets/Navbar/Vector2.png" alt="" />
          <p>Message</p>
        </div>
        <div className="flex flex-col text-[14px] gap-1 text-gray-500  w-6 justify-between items-center cursor-pointer">
          <img src="src/assets/Navbar/Vector3.png" alt="" />
          <p>Orders</p>
        </div>
        <div className="flex flex-col text-[14px] text-gray-500 gap-1  w-6 justify-between items-center cursor-pointer">
          <img src="src/assets/Navbar/Vector4.png" alt="" />
          <p>Cart</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
