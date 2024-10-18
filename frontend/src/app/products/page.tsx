"use client";

import { ProductContext } from "@/context/product-context";
import Link from "next/link";
import numeral from "numeral";
import { useContext } from "react";
import { Hearts } from "react-loader-spinner";
import React from "react";
import Image from "next/image";

const ProductCard = () => {
  const { products, loading } = useContext(ProductContext);

  if (loading)
    return (
      <div className="flex justify-center items-center">
        {" "}
        <Hearts
          height="400"
          width="400"
          color="#f32506"
          ariaLabel="hearts-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );

  return (
    <div>
      <div className="relative">
        <div className="w-full h-[500px]">
          <Image
            src={products[1]?.images[3]}
            alt="g"
            className="size-full object-cover w-2"
            fill={true}
            // width={40}
            // height={100}
          />
        </div>

        <div className="absolute left-1/4 bottom-1/4  ">
          {" "}
          <p>{products[1]?.name}</p>
          <p className="font-bold">
            {" "}
            {numeral(products[1]?.price).format("0,0")}₮
          </p>
        </div>
      </div>
      <div className="px-20 py-20 grid gap-5 grid-cols-4 ">
        {products.map((prodf, idx) => {
          return (
            <div key={idx}>
              <Link href={`${prodf._id}`}>
                <div className={` flex flex-col mb-10 h-full`}>
                  {/* ${product.span} */}
                  <Image
                    src={prodf.images[0]}
                    width={100}
                    height={100}
                    alt="v"
                    className="object-cover size-full rounded-xl "
                  />
                  <div className="flex flex-col items-center ">
                    <p className="text-sm">{prodf.name}</p>
                    <h1 className="font-bold">
                      {prodf.price.toLocaleString()}₮
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
