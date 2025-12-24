import React from "react";
import SideImg from "../ConsumerSec/SideImg";
import HomeSection from "../ConsumerSec/HomeSection";

const HomeAndOutdoor = ({ leftImg, leftImgText, firstSecProductDetail,secondSecProductDetail}) => {
  return (
    <div className="h-[260px] flex bg-white w-[1180px] m-auto mt-5  rounded mb-4">
      <SideImg leftImg={leftImg} leftImgText={leftImgText} />

      <div className="w-[75%] flex flex-wrap border-b-1 border-l-1 rounded-br border-gray-300">
        <HomeSection
          firstSecProductDetail={firstSecProductDetail}
          secondSecProductDetail={secondSecProductDetail}
        />
      </div>
    </div>
  );
};

export default HomeAndOutdoor;
