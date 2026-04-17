import React from "react";

const UserInput = () => {
  return (
    <div className="relative h-[420px] flex bg-white w-[1180px] m-auto mt-8 mb-10">
      <img
        className="w-full h-full"
        src="src/assets/UserinputSec/bg.png"
        alt=""
      />
      <div className="absolute p-15  text-white leading-tight">
        <h2 className="text-[26px] font-semibold mb-5">
          An easy way to send <br /> requests to all suppliers
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed
          do eiusmod tempor incididunt.
        </p>
      </div>
      <div className="absolute h-[80%] p-5 bg-white w-[38%] right-0 mt-10 mr-8 rounded-md">
        <h2 className="text-[18px] font-medium">Send quote to suppliers</h2>
        <p className="border-1 mt-5 px-3 py-2 rounded-lg border-gray-200">
          What item you need?
        </p>
        <textarea
          className="rounded-lg px-3 py-2 outline-none w-full border-gray-200 border-1 mt-5"
          placeholder="Type more details"
        ></textarea>
        <input
          type="number"
          placeholder="Quantity"
          className="rounded-lg px-3 py-2 border-gray-200 border-1 mt-3 outline-none"
        />
        <select className="pr-10 pl-2 text-gray-500 py-2 border-gray-200 border-1 rounded-lg ml-4">
          <option value="One">Pcs</option>
        </select>
        <button className="mt-5 rounded-md text-white text-[17px] shadow-lg/30 active:scale-95 font-medium bg-[#0067FF] cursor-pointer hover:bg-blue-700 px-4 py-1.5">
          Send inquiry
        </button>
      </div>
    </div>
  );
};

export default UserInput;
