import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const SideMenu = (props) => {
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    setClick(!click);
    console.log(click);
  };

  return (
    <div className="w-1/6 border-t-2 pr-3 pb-5 pt-2 bg-blue-50 border-gray-200 mr-2">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">{props.heading}</h2>
        <FaAngleDown
          onClick={clickHandler}
          className={`text-gray-400 ${
            click ? "rotate-180" : ""
          } hover:cursor-pointer`}
        />
      </div>
      <div
        className={`mt-5 flex flex-col ${
          click ? "hidden" : ""
        } items-start gap-4 text-gray-600 `}
      >
        <div className="flex gap-2 w-full items-center">
          {props.radio}
          <button className="w-full hover:cursor-pointer flex items-start px-2 py-0.5 rounded hover:bg-gray-200">
            {props.first}
          </button>
        </div>
        <div className="flex w-full items-center gap-2">
          {props.radio}
          <button className="w-full hover:cursor-pointer flex items-start px-2 py-0.5 rounded hover:bg-gray-200">
            {props.second}
          </button>
        </div>
        <div className=" flex items-center w-full gap-2">
          {props.radio}
          <button className="w-full hover:cursor-pointer flex items-start px-2 py-0.5 rounded hover:bg-gray-200">
            {props.third}
          </button>
        </div>
        <div className="flex w-full items-center gap-2">
          {props.radio}
          <button className="w-full hover:cursor-pointer flex items-start px-2 py-0.5 rounded hover:bg-gray-200">
            {props.fourth}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
