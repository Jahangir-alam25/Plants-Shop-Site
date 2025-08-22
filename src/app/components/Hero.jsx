
// import React from "react";

// export default async function Hero() {
 
//   return (
//  <div>
//     <h2>Hero</h2>
//  </div>
//   );
// }

import React from "react";

export default function Hero() {
  return (
    <div>
        <section className="w-11/12 my-5 mx-auto grid md:grid-cols-12 grid-rows-2 min-h-screen gap-5">
      {/* Left big banner */}
      <div className="col-span-9 row-span-3 rounded flex items-center">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://cdn.pixabay.com/photo/2024/03/05/14/55/ai-generated-8614707_1280.jpg"
              className="max-w-sm rounded-lg"
              alt="Plant Banner"
            />
            <div>
              <h1 className="text-5xl font-bold">Plant for Sale</h1>
              <p className="py-6">Starts with 1099 BDT</p>
              <button className="btn btn-success text-white">Let's Buy</button>
            </div>
          </div>
        </div>
      </div>

      {/* Right top discount card */}
      <div className="col-span-3 rounded">
        <div className="card rounded-2xl p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Special Discount</h2>
          <p className="text-gray-600 mt-2">
            Get <span className="text-red-500 font-semibold">20% OFF</span> on
            your next purchase!
          </p>
          <div className="flex items-center justify-between mt-4 p-4 bg-gray-50 rounded-lg">
            <span className="text-lg font-semibold text-gray-700">Code:</span>
            <span className="text-lg font-bold text-blue-600 bg-blue-100 px-4 py-1 rounded-lg">
              SAVE20
            </span>
          </div>
          <button className="btn btn-success text-white w-full mt-4">
            Redeem Now
          </button>
        </div>
      </div>

      {/* Right bottom discount card */}
      <div className="col-span-3 rounded">
        <div className="card rounded-2xl p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Special Discount</h2>
          <p className="text-gray-600 mt-2">
            Get <span className="text-red-500 font-semibold">50% OFF</span> on
            your First delivery
          </p>
          <div className="flex items-center justify-between mt-4 p-4 bg-gray-50 rounded-lg">
            <span className="text-lg font-semibold text-gray-700">Code:</span>
            <span className="text-lg font-bold text-blue-600 bg-blue-100 px-4 py-1 rounded-lg">
              Free50
            </span>
          </div>
          <button className="btn btn-success text-white w-full mt-4">
            Redeem Now
          </button>
        </div>
      </div>
      
    </section>
     <h2
        className="text-6xl text-center font-bold text-white bg-[url(https://plantscapedubai.com/cdn/shop/collections/Buy_Plants_Online_Cheap_Prices.jpg?v=1703681047)] bg-fixed"
      >
        <p className="backdrop-blur py-10 text-gray-700">
          <i className="fa-solid fa-bag-shopping"></i> Let's Shop
        </p>
      </h2>
    </div>
  );
}
