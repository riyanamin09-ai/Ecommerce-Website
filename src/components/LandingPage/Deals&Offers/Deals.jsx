import React from "react";
import Sections from "./Sections";

const Deals = () => {
  return (
    <div className="h-[240px] flex bg-white w-[1180px] m-auto mt-8 border-1 rounded border-gray-300">
      <div className=" w-1/4 h-full p-5 leading-tight">
        <h3 className="text-[17px] font-semibold">Deals and offers</h3>
        <h3 className="text-gray-600">Hygiene equipments</h3>
        <div className="flex gap-2.5 mt-4 text-white">
          <div className="bg-gray-700 p-3 rounded">
            <h2 className="font-semibold">04</h2>
            <p className="text-[13px] font-extralight">Days</p>
          </div>
          <div className="bg-gray-700 p-3 rounded">
            <h2 className="font-semibold">13</h2>
            <p className="text-[13px] font-extralight">Hour</p>
          </div>
          <div className="bg-gray-700 p-3 rounded">
            <h2 className="font-semibold">34</h2>
            <p className="text-[13px] font-extralight">Mint</p>
          </div>
          <div className="bg-gray-700 p-3 rounded">
            <h2 className="font-semibold">56</h2>
            <p className="text-[13px] font-extralight">Sec</p>
          </div>
        </div>
      </div>
      <Sections
        img={"src/assets/DealsImg/watch.png"}
        text={"Smart watches"}
        off={"-25%"}
      />
      <Sections img={"src/assets/DealsImg/laptop.png"} text={"Laptops"} off={"-15%"} />
      <Sections
        img={"src/assets/DealsImg/camera.png"}
        text={"Canon cameras"}
        off={"-40%"}
      />
      <Sections
        img={"src/assets/DealsImg/headphone.png"}
        text={"Headphones"}
        off={"-25%"}
      />
      <Sections
        img={"src/assets/DealsImg/mobile.png"}
        text={"Smartphones"}
        off={"-25%"}
      />
    </div>
  );
};

export default Deals;
