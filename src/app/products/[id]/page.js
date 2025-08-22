import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import divider from "daisyui/components/divider";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
export default async function ProductDetails({ params }) {
//   const { id } = params;
  const productCollection = dbConnect(collectionNamesObj.productsCollection);
  const products = await productCollection.find({}).toArray();
  const product = products.find((p) => p._id.toString() === params.id);
  return (

   <div className="bg-green-200">
    <div className=" w-11/12 mx-auto py-12">
      {/* Back button */}
      <div className="mb-6">
        <Link
          href="/products"
          className="inline-flex items-center text-green-700 hover:text-green-900"
        >
          <FaArrowLeft className="mr-2" /> Back to Products
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow rounded-lg p-6">
        {/* Image */}
        <div className="flex justify-center items-center">
          <Image
            src={product.img_url}
            alt={product.name}
            width={500}
            height={400}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-orange-500 text-2xl font-semibold mt-4">
            Price: ${product.price}
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">{product.description}</p>
          <p className="mt-3 text-gray-700">
            <span className="font-semibold">Available Pieces:</span>{" "}
            {product.available_pieces}
          </p>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
              Buy Now
            </button>
            <button className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}


