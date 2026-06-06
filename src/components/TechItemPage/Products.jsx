import React from "react";

export const Products = () => {
  const techProducts = [
    {
      id: "1",
      image:
        "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/wireless-headphones.jpg",
      name: "Wireless Bluetooth Headphones",
      rating: {
        stars: 4.7,
        count: 230,
      },
      priceCents: 7999,
      category: "Electronics & Gadgets",
      subCategory: "Audio",
      keywords: ["headphones", "bluetooth", "audio", "electronics"],
      description:
        "Experience superior sound quality with these wireless Bluetooth headphones, designed for comfort and portability for everyday use.",
    },
    {
      id: "2",
      image:
        "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/smartphone.jpg",
      name: "Smartphone - 128GB",
      rating: {
        stars: 4.6,
        count: 320,
      },
      priceCents: 45000,
      category: "Electronics & Gadgets",
      subCategory: "Mobile Phones",
      keywords: ["smartphone", "mobile", "gadgets"],
      description:
        "Stay connected with this high-performance smartphone featuring 128GB storage, perfect for apps, photos, and multimedia.",
    },
    {
      id: "3",
      image:
        "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/4k-tv.jpg",
      name: "55-Inch 4K Ultra HD TV",
      rating: {
        stars: 4.8,
        count: 190,
      },
      priceCents: 90000,
      category: "Electronics & Gadgets",
      subCategory: "Televisions",
      keywords: ["television", "4K", "electronics", "gadgets"],
      description:
        "Enjoy breathtaking visuals with this 55-inch 4K Ultra HD TV, delivering stunning detail and vibrant colors for your favorite shows.",
    },
    {
      id: "4",
      image:
        "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/laptop.jpg",
      name: "Gaming Laptop - 16GB RAM, 512GB SSD",
      rating: {
        stars: 4.9,
        count: 210,
      },
      priceCents: 120000,
      category: "Electronics & Gadgets",
      subCategory: "Computers",
      keywords: ["laptop", "gaming", "computers", "electronics"],
      description:
        "Unleash your gaming potential with this powerful gaming laptop featuring 16GB RAM and 512GB SSD for speed and performance.",
    },
    {
      id: "5",
      image:
        "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/smartwatch.jpg",
      name: "Smartwatch - Fitness Tracker",
      rating: {
        stars: 4.5,
        count: 130,
      },
      priceCents: 15000,
      category: "Electronics & Gadgets",
      subCategory: "Wearables",
      keywords: ["smartwatch", "fitness", "wearables", "electronics"],
      description:
        "Monitor your health and stay connected with this feature-rich smartwatch, perfect for tracking fitness and receiving notifications.",
    },
    {
      id: "6",
      image:
        "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/tablet.jpg",
      name: "10.1-Inch Android Tablet",
      rating: {
        stars: 4.3,
        count: 95,
      },
      priceCents: 20000,
      category: "Electronics & Gadgets",
      subCategory: "Tablets",
      keywords: ["tablet", "android", "gadgets", "electronics"],
      description:
        "Enjoy your favorite apps and media on this sleek 10.1-inch Android tablet, offering portability and a vibrant display for on-the-go.",
    },
    {
      id: "7",
      image:
        "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/bluetooth-speaker.jpg",
      name: "Portable Bluetooth Speaker",
      rating: {
        stars: 4.7,
        count: 180,
      },
      priceCents: 5000,
      category: "Electronics & Gadgets",
      subCategory: "Audio",
      keywords: ["bluetooth", "speaker", "audio", "gadgets"],
      description:
        "Take your music anywhere with this portable Bluetooth speaker, delivering powerful sound in a compact design, perfect for outdoor use.",
    },
    {
      id: "8",
      image:
        "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/dslr-camera.jpg",
      name: "DSLR Camera - 24MP",
      rating: {
        stars: 4.8,
        count: 115,
      },
      priceCents: 85000,
      category: "Electronics & Gadgets",
      subCategory: "Cameras",
      keywords: ["camera", "dslr", "gadgets", "electronics"],
      description:
        "Capture stunning photos and videos with this 24MP DSLR camera, offering professional-quality imaging and advanced features for creatives.",
    },
    {
      id: "9",
      image:
        "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/usb-drive.jpg",
      name: "USB Drive - 64GB",
      rating: {
        stars: 4.2,
        count: 75,
      },
      priceCents: 1200,
      category: "Electronics & Gadgets",
      subCategory: "Storage",
      keywords: ["usb", "storage", "gadgets", "electronics"],
      description:
        "Store and transfer your files easily with this 64GB USB drive, offering ample space and portability for your data needs.",
    },
    {
      id: "10",
      image:
        "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/action-camera.jpg",
      name: "4K Action Camera",
      rating: {
        stars: 4.6,
        count: 90,
      },
      priceCents: 18000,
      category: "Electronics & Gadgets",
      subCategory: "Cameras",
      keywords: ["action camera", "4K", "gadgets", "electronics"],
      description:
        "Record your adventures in stunning detail with this 4K action camera, built to withstand tough conditions and capture high-quality footage.",
    },
  ];
  return (
    <div className="w-full flex gap-3 flex-wrap">
      {techProducts.map((product) => {
        return <div className="w-full flex items-center border-1 pl-4 border-gray-300 rounded min-h-70 bg-white">
            <div className="flex items-center justify-center h-[70%] w-[20%]">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="pl-10 flex gap-1 flex-col items-start pt-10 w-full h-full">
              <h3 className="text-[16px] font-medium">{product.name}</h3>
              <h2 className="pt-4 text-xl font-semibold">${product.priceCents}</h2>
              <h3 className="text-[16px] text-[#FF9017]">rating: {product.rating.stars} <span className="text-[#8B96A5] pl-3">{product.rating.count} orders</span></h3>
              <p className="text-[#505050] pr-3">{product.description}</p>
            </div>
        </div>
      })}
    </div>
  );
};
