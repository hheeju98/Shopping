import React from "react";

export default function PriceCard({ text, price }) {
  return (
    <div>
      <p className="bg-gray-50 p-8 mx-2 rounded-2xl text-center text-lg md:text-xl">
        {text}
      </p>
      <p className="font-bold text-brand text-xl md:text-2xl">₩{price}</p>
    </div>
  );
}
