import React from "react";
import { FaRegEnvelope } from "react-icons/fa";

const SubscribeSection = () => {
  return (
    <div className="w-full h-[200px] pt-13 bg-gray-200 mt-10 flex flex-col items-center">
      <h1 className="text-[19px] font-medium">Subscribe on our newsletter</h1>
      <p className="text-[15px] font-normal text-gray-500">
        Get daily news on upcoming offers from many suppliers all over the world
      </p>
      <div className="mt-4 flex items-center gap-3 relative">
        <FaRegEnvelope className="absolute left-2 text-gray-400" />

        <input
          className="bg-white pr-19 pl-7 rounded outline-none py-1.5"
          type="email"
          name=""
          placeholder="Email"
          id=""
        />

        <button className="bg-[#0067FF] px-3 py-1.5 cursor-pointer hover:bg-blue-700 rounded-lg text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscribeSection;
