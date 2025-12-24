import React, { useState } from "react";
import TechItems from "../../TechItems/TechItems";

const MenuBtn = () => {
  const [displayTechItems, setDisplayTechItems] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    "Automobiles",
    "Clothes and wear",
    "Home interiors",
    "Computer and tech",
    "Tools, equipments",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tools",
    "More category",
  ];

  const isSelected = selectedCategory == "Computer and tech"

  return (
    <>
      {categories.map((cat) => {
        return (
          <div
            onClick={() => setSelectedCategory(cat)}
            className={`hover:bg-blue-100 cursor-pointer ${
              selectedCategory === cat ? "bg-blue-100 text-black" : ""
            }  hover:text-black text-gray-600 p-2 text-[16px] font-medium rounded-lg`}
          >
            <button>{cat}</button>
          </div>
        );
      })}
      {
        isSelected ? <TechItems/>
        : "Nothing"
      }
    </>
  );
};

export default MenuBtn;
