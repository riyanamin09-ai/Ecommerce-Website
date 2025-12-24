import React from "react";

const Sections = ({ img, text, off }) => {
  return (
    <div className="w-1/6 border-l-1 pt-7 border-gray-300 h-full">
      <div className=" flex gap-3 pb-5 justify-between h-full flex-col items-center">
        <img src={img} alt="" />
        <div className="flex flex-col gap-2">
          <h3 className=" font-normal">{text}</h3>
          <p className="text-[14px] px-3  py-1 w-[61px] rounded-2xl font-medium text-[#EB001B] bg-[#FFE3E3]">
            {off}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sections;
