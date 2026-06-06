import React from "react";
import Side from "./Side";
import Path from "./Path";
import { Products } from "./Products";

const TechItemPage = () => {
  
  return (
    <>
      <div className="w-295 flex gap-3 mt-5 rounded m-auto ">
        <Path />
      </div>
      <div className="w-310 flex gap-3 mt-5 rounded m-auto ">
        <Side/>
        <Products/>
      </div>
    </>
  );
};

export default TechItemPage;
