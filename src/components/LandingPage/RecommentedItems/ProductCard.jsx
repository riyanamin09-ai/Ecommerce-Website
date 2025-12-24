import React from "react";
import FirstSec from "./FirstSec";
import SecondSec from "./SecondSec";

const ProductCard = () => {
  return (
    <div>
      <div className="flex gap-5">
        <FirstSec />
      </div>
      <div className="flex gap-5 mt-5">
        <SecondSec />
      </div>
    </div>
  );
};

export default ProductCard;
