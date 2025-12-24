import React from "react";

const FirstSec = () => {
  const firstProductCardInfo = [
    {
      productImg: "src/assets/RecommentedItemsImg/T-Shirt.png",
      productPrice: "$19.30",
      productDetail: "T-shirts with multiple colors, for men",
    },
    {
      productImg: "src/assets/RecommentedItemsImg/Coat.png",
      productPrice: "$10.30",
      productDetail: "Jeans shorts for men blue color",
    },
    {
      productImg: "src/assets/RecommentedItemsImg/BlueJacket.png",
      productPrice: "$12.50",
      productDetail: "Brown winter coat medium size",
    },
    {
      productImg: "src/assets/RecommentedItemsImg/Wallet.png",
      productPrice: "$34.00",
      productDetail: "Jeans bag for travel for men",
    },
    {
      productImg: "src/assets/RecommentedItemsImg/Bag.png",
      productPrice: "$99.00",
      productDetail: "Leather wallet",
    },
  ];

  return firstProductCardInfo.map((elem, idx) => {
    return (
      <div
        key={idx}
        className="h-[310px] w-[220px] bg-white border-1 rounded border-gray-200"
      >
        <img className="px-8 py-5" src={elem.productImg} alt="" />
        <h3 className="mt-3 px-5 text-[14px]">{elem.productPrice}</h3>
        <p className="leading-tight px-5 text-[15px] mt-1 text-gray-400">
          {elem.productDetail}
        </p>
      </div>
    );
  });
};

export default FirstSec;
