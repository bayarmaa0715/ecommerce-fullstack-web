"use client";

import Baraa, { products } from "@/components/main-section/baraa";
import React from "react";

// <ProductCard products={products} />
const ProductCard = () => {
  return (
    <div>
      <div className="relative">
        <img src="/images/image 1178.png" alt="" className="" />
        <div className="absolute left-1/4 bottom-1/4  ">
          {" "}
          <p>Wildflower Hoodie</p>
          <p className="font-bold">120'000₮</p>
        </div>
      </div>
      <div className="px-20 py-20 grid gap-5 grid-cols-4 ">
        {products.map((product) => {
          return (
            <div className={`mb-10 grid ${product.span} `}>
              <img
                src={product.img}
                alt=""
                className="object-cover size-full rounded-xl"
              />
              <p className="text-sm">{product.name}</p>
              <h1 className="font-bold">{product.price}₮</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
