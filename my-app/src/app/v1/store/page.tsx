"use client";
import React from "react";
import Image from "next/image"; // Import next/image for optimized images
import { useRouter } from "next/navigation"; // Import useRouter

const OurProducts = () => {
  const router = useRouter(); // Initialize the router

  const handleCheckout = (plan: string) => {
    // Navigate to the checkout page with the selected plan
    router.push(`/v1/payment?plan=${plan}`);
  };

  return (
    <div className="flex flex-col items-center p-8 max-w-6xl mx-auto bg-white">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {/* Basic Plan */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-center h-[500px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
          <div className="relative w-full h-1/2 mb-6">
            <Image
              src="/1.png"
              alt="Basic Plan"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold text-gray-800">₹999/-</p> {/* Plan price */}
            <button
              onClick={() => handleCheckout("basic")}
              className="bg-blue-500 text-white py-3 px-9 rounded-md hover:bg-blue-600 transition duration-300 transform hover:scale-105 text-lg"
            >
              Checkout
            </button>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-center h-[500px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
          <div className="relative w-full h-1/2 mb-6">
            <Image
              src="/2.png"
              alt="Premium Plan"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold text-gray-800">₹1999/-</p> {/* Plan price */}
            <button
              onClick={() => handleCheckout("premium")}
              className="bg-blue-500 text-white py-3 px-9 rounded-md hover:bg-blue-600 transition duration-300 transform hover:scale-105 text-lg"
            >
              Checkout
            </button>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-center h-[500px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
          <div className="relative w-full h-1/2 mb-6">
            <Image
              src="/3.png"
              alt="Pro Plan"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold text-gray-800">₹2499/-</p> {/* Plan price */}
            <button
              onClick={() => handleCheckout("pro")}
              className="bg-blue-500 text-white py-3 px-9 rounded-md hover:bg-blue-600 transition duration-300 transform hover:scale-105 text-lg"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
