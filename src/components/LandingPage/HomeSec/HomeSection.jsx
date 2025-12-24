import React from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

const HomeSection = ({ className, firstSecProductDetail,secondSecProductDetail }) => {
  return (
    <>
   <FirstSection firstSecProductDetail={firstSecProductDetail}/>
   <SecondSection secondSecProductDetail={secondSecProductDetail} />
   </>
  );
};

export default HomeSection;
