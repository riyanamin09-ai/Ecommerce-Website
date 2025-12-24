import React from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

const CountrySec = () => {

  return (
   <div className="flex flex-col items-start">
   <div className="flex gap-25"><FirstSection/></div>
   <div className="flex gap-25"><SecondSection/></div>
   </div>
  );
};

export default CountrySec;
