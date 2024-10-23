"use client";
import React from "react";
import { ProductContext } from "@/context/product-context";
import Link from "next/link";
import numeral from "numeral";
import { useContext } from "react";
import Image from "next/image";

const Baraa = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="grid gap-5 grid-cols-4 grid-flow-dense pt-10 ">
      {products?.map((p1, idx) => {
        return (
          <div key={idx}>
            <Link href={`${p1._id}`}>
              <div className="flex flex-col gap-3 relative w-5/5 h-[300px]">
                <Image
                  fill={true}
                  priority
                  sizes="w-auto h-auto"
                  src={p1.images[0]}
                  alt="Photo"
                  className="object-cover size-full rounded-xl w-auto h-auto"
                />
              </div>
              <div className="flex flex-col items-center ">
                <p className="text-sm">{p1.name}</p>
                <h1 className="font-bold">
                  {numeral(p1.price).format("0,0")}₮
                </h1>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Baraa;
