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
        <Hearts
          height="400"
          width="400"
          color="#f32506"
          ariaLabel="hearts-loading"
          wrapperStyle={{}}
          visible={true}
        />
      </div>
    );

  return (
    <div>
      <div className="relative">
        <div className="w-full h-[500px] relative">
          <Image
            fill={true}
            sizes="w-auto h-auto"
            src="https://img.freepik.com/premium-photo/fashionable-youth-clothes-background_925613-32311.jpg?semt=ais_hybrid"
            alt="Photo"
            className="object-cover w-auto h-auto"
            priority
          />
        </div>

        <div className="absolute left-1/4 bottom-1/4  ">
          <p>Hat</p>
          <p className="font-bold">
            {numeral(products[1]?.price).format("0,0")}₮
          </p>
        </div>
      </div>
      <div className="px-20 py-20 grid gap-5 grid-cols-4 ">
        {products.map((prodf, idx) => {
          return (
            <div key={idx}>
              <Link href={`${prodf._id}`} className="flex flex-col gap-2">
                <div className={` flex flex-col h-[300px] relative`}>
                  {/* ${product.span} */}
                  <Image
                    fill={true}
                    sizes="w-auto h-auto"
                    src={prodf.images[0]}
                    alt="Photo"
                    priority
                    className="object-cover rounded-xl w-auto h-auto"
                  />
                </div>
                <div className="flex flex-col items-center ">
                  <p className="text-sm">{prodf.name}</p>
                  <h1 className="font-bold">{prodf.price.toLocaleString()}₮</h1>
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
