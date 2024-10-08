"use client";

import { ProductContext } from "@/context/product-context";
import Link from "next/link";
import { useContext } from "react";

const ProductCard = () => {
  const { products } = useContext(ProductContext);
  return (
    <div>
      <div className="relative">
        <div className="w-full h-[500px]">
          <img
            src={products[1]?.images[0]}
            alt=""
            className="size-full object-cover"
          />
        </div>

        <div className="absolute left-1/4 bottom-1/4  ">
          {" "}
          <p>{products[0]?.name}</p>
          <p className="font-bold">{products[0]?.price}₮</p>
        </div>
      </div>
      <div className="px-20 py-20 grid gap-5 grid-cols-4 ">
        {products.map((pro) => {
          return (
            <Link href={`${pro._id}`}>
              <div className={` flex flex-col mb-10 h-full`}>
                {/* ${product.span} */}
                <img
                  src={pro.images[0]}
                  alt=""
                  className="object-cover size-full rounded-xl"
                />
                <div className="flex flex-col items-center ">
                  <p className="text-sm">{pro.name}</p>
                  <h1 className="font-bold">{pro.price}₮</h1>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
