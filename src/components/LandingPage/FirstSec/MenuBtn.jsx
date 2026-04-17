import React, { useState } from "react";
import { Link } from "react-router-dom";



const MenuBtn = () => {
  const [displayTechItems, setDisplayTechItems] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      name: "Automobiles",
      id: "AM",
    },
    {
      name: "Clothes and wear",
      id: "CW",
    },
    {
      name: "Home interiors",
      id: "HI",
    },
    {
      name: "Computer and tech",
      id: "CT",
    },
    {
      name: "Tools, equipments",
      id: "TE",
    },
    {
      name: "Sports and outdoor",
      id: "SO",
    },
    {
      name: "Animal and pets",
      id: "AP",
    },
    {
      name: "Machinery tools",
      id: "MT",
    },
    {
      name: "More category",
      id: "MC",
    },
  ];

  const isSelected = selectedCategory === "Computer and tech";

  return (
    <>
      {categories.map((cat, idx) => {
        return (
          <Link
            to={cat.id}
            key={idx}
            onClick={() => setSelectedCategory(cat.name)}
            className={`hover:bg-blue-100 cursor-pointer ${
              selectedCategory === cat.name ? "bg-blue-100 text-black" : ""
            }  text-gray-600 p-2 text-[16px] font-medium rounded-lg`}
          >
            <button className="cursor-pointer">{cat.name}</button>
          </Link>
        );
      })}
    </>
  );
};

export default MenuBtn;
