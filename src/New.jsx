"use client";

import React, { useState } from "react";

export default function New() {
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

  const isTechSelected = selectedCategory === "Computer and tech";

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                🔒
              </div>
              <h1 className="text-2xl font-bold text-blue-600">Brand</h1>
            </div>
            <div className="flex items-center gap-8 flex-1 max-w-4xl mx-auto">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md">
                All Ca
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="bg-gray-50 border-t border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4">
              <ul className="flex gap-8 py-3 text-gray-700">
                <li className="font-medium hover:text-blue-600 cursor-pointer">
                  All Category
                </li>
                <li className="hover:text-blue-600 cursor-pointer">
                  Hot Offers
                </li>
                <li className="hover:text-blue-600 cursor-pointer">
                  Gift Boxes
                </li>
                <li className="hover:text-blue-600 cursor-pointer">Projects</li>
                <li className="hover:text-blue-600 cursor-pointer">
                  Menu Item
                </li>
                <li className="hover:text-blue-600 cursor-pointer flex items-center gap-1">
                  Help <span>▼</span>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-8 flex gap-8">
          {/* Sidebar Categories */}
          <aside className="w-64 bg-white rounded-lg shadow-sm p-6">
            <ul className="space-y-4 text-gray-800">
              {categories.map((cat) => (
                <li
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`cursor-pointer hover:text-blue-600 font-medium ${
                    selectedCategory === cat ? "text-blue-600" : ""
                  }`}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Display Area */}
          <section className="flex-1">
            {isTechSelected ? (
              // Tech Items Grid when "Computer and tech" is selected
              <div>
                <h2 className="text-3xl font-bold mb-8">
                  Computer & Tech Items
                </h2>
                <div className="grid grid-cols-3 gap-8">
                  {/* Product Card 1 */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src="https://as2.ae/wp-content/uploads/2024/10/Gadgets-Examples.webp"
                      alt="Tech Gadgets Collection"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">
                        Latest Tech Gadgets Bundle
                      </h3>
                      <p className="text-gray-600 mt-2">$499.99</p>
                    </div>
                  </div>

                  {/* Product Card 2 */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src="https://media.wired.com/photos/67bcfedc41727304dcef0cd9/master/w_1600%2Cc_limit/Motorola-Moto-G-Power-2025-(front_back)-Reviewer-Photo-SOURCE-Julian-Chokkattu.jpg"
                      alt="Motorola Moto G Power 2025"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">
                        Motorola Moto G Power 2025
                      </h3>
                      <p className="text-gray-600 mt-2">$299.99</p>
                    </div>
                  </div>

                  {/* Product Card 3 */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src="https://cdn.mos.cms.futurecdn.net/sCTUm3TGXAahNHu7wghtpP-2962-80.jpg"
                      alt="High-End Gaming Laptop"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">
                        Premium Gaming Laptop
                      </h3>
                      <p className="text-gray-600 mt-2">$1,999.99</p>
                    </div>
                  </div>

                  {/* Product Card 4 */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src="https://m.media-amazon.com/images/I/51XPf0SQc7L.AC_UF894,1000_QL80.jpg"
                      alt="Wireless Open Ear Headphones"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">
                        Wireless Open-Ear Earbuds
                      </h3>
                      <p className="text-gray-600 mt-2">$89.99</p>
                    </div>
                  </div>

                  {/* Product Card 5 */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src="https://i.rtings.com/assets/pages/6dRuEBex/best-gaming-laptops-20242028-medium.jpg?format=auto"
                      alt="Best Gaming Laptops 2025"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">
                        Top Gaming Laptop 2025
                      </h3>
                      <p className="text-gray-600 mt-2">$2,499.99</p>
                    </div>
                  </div>

                  {/* Product Card 6 */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src="https://pyxis.nymag.com/v1/imgs/19d/9df/cf708d9114b600bc0415274660ce493c11-2----.rhorizontal.w600.jpg"
                      alt="Premium Wireless Headphones"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">
                        Noise-Canceling Headphones
                      </h3>
                      <p className="text-gray-600 mt-2">$349.99</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Default Banner (shown on load or other categories)
              <div className="relative bg-gradient-to-r from-cyan-400 to-blue-300 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://via.placeholder.com/1200x500/00FFFF/000000?text=Background+Image"
                  alt="Background"
                  className="w-full h-full object-cover absolute inset-0 opacity-50"
                />
                <div className="relative p-16 flex flex-col items-start">
                  <h2 className="text-5xl font-bold text-gray-900 mb-4">
                    Latest trending
                    <br />
                    Electronic items
                  </h2>
                  <button className="px-8 py-3 bg-white text-gray-800 rounded-full font-medium shadow hover:bg-gray-100">
                    Learn more
                  </button>
                </div>
                <div className="absolute bottom-0 right-0 w-64 h-64">
                  <img
                    src="https://via.placeholder.com/300/000000/FFFFFF?text=Headphones"
                    alt="Headphones"
                    className="object-contain"
                  />
                </div>
              </div>
            )}
          </section>
        </main>
      </div>
          
    </>
  );
}
