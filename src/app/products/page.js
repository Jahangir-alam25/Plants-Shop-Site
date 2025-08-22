import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
export default async function Products() {
  // const res = await fetch("/services.json");
  const productCollection = dbConnect(collectionNamesObj.productsCollection);
  const data = await productCollection.find({}).toArray();
  return (
  <div className="bg-green-200">
    {/* Title + Description */}
        <div className="text-center pt-8">
          <h1 className="text-3xl font-bold text-gray-800">Our Products</h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Explore our wide range of fresh and healthy plants. Browse, search,
            and pick your favorites at the best price.
          </p>
        </div>
      <div className="grid grid-cols-12 gap-4 container w-11/12 py-8 mx-auto">
      {data.map((item) => {
        return (
          <div
            className="col-span-12 md:col-span-6 lg:col-span-4 p-4 h-full shadow rounded-lg bg-white border"
            key={item._id}
          >
             <figure className="w-full h-64 flex justify-center items-center overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src={item.img_url}
                width={314}
                height={200}
                alt={item.name}
              />
            </figure>
            <div className="flex justify-between items-center mt-4">
              <div>
                <h2 className="font-bold text-xl">{item.name}</h2>
                <p className="font-bold text-xl text-orange-500">
                  Price : ${item.price}
                </p>
              </div>
              <div>
                <Link
                  href={`/products/${item._id}`}
                  className="text-orange-500"
                >
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  );
}
