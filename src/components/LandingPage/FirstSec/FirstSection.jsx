import React from "react";
import MenuBtn from "./MenuBtn";

const FirstSection = () => {
  return (
    <div className="w-[1180px] flex gap-3 min-h-[400px] p-4 bg-white mt-5 border-1 rounded border-gray-300 m-auto">
      <div className="left flex flex-col w-3/13 h-full">
        <MenuBtn />
      </div>
      <div className="mid h-full relative">
        <div className="absolute leading-tight left-10 top-13">
          <h1 className="text-[28px] font-normal">Latest trending</h1>
          <h1 className="text-[32px] font-bold">Electronic items</h1>
          <button className="bg-white py-2 px-3 cursor-pointer hover:bg-gray-100 rounded-lg text-[16px] font-medium mt-5 active:scale-95">
            Learn more
          </button>
        </div>
        <img src="src/assets/LandingPage/main.png" alt="" />
      </div>
      <div className="right flex flex-col gap-3 w-3/16 font-normal">
        <div className="bg-[#E3F0FF] rounded h-2/5 ">
          <div className="flex items-center p-3 gap-3 leading-tight">
            <img src="src/assets/LandingPage/Avatar.png" alt="" />
            <h3>
              Hi, user <br />
              let’s get stated
            </h3>
          </div>
          <div className="flex flex-col px-2 gap-2">
            <button className="bg-[#0067FF] hover:bg-[#243996] active:scale-95 cursor-pointer text-white rounded-lg py-1">
              Join now
            </button>
            <button className="bg-white hover:bg-gray-200 active:scale-95 cursor-pointer text-[#0067FF] rounded-lg py-1">
              Log in
            </button>
          </div>
        </div>
        <div className="bg-[#F38332] rounded h-[25%] py-2 px-4 text-white leading-tight">
          <h3>
            Get US $10 off <br /> with a new <br /> supplier
          </h3>
        </div>
        <div className="bg-[#55BDC3] rounded h-[25%] py-2 px-4 text-white leading-tight ">
          <h3>
            Send quotes with <br /> supplier <br /> preferences
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
