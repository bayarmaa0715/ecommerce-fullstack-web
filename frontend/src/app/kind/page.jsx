"use client";
import React, { useContext } from "react";
import { CategoryContext } from "@/context/category-context";

import { Hearts } from "react-loader-spinner";
import Link from "next/link";
import Image from "next/image";
import { ProductContext } from "@/context/product-context";
import numeral from "numeral";

const Kind = () => {
  const { category, loading } = useContext(CategoryContext);
  const { products } = useContext(ProductContext);

  if (loading)
    return (
      <div className="flex flex-col gap-4 items-center bg-gray-100 p-10 ">
        <p className="text-base font-bold">Ангилал</p>

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
    <div className="flex gap-1 px-20 py-10 ">
      <div className="flex flex-col gap-5 w-1/5 ">
        <ul className="list-disc pl-6">
          <h1 className="font-bold">Ангилал</h1>
          {category?.map((type, key1) => {
            return (
              <div key={key1} className="form-control">
                <label className="label cursor-pointer flex justify-start gap-4">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-green-500"
                    defaultChecked
                  />
                  <span className="label-text">{type.name}</span>
                </label>
              </div>
            );
          })}
        </ul>
        {/* <ul className="list-disc pl-6">
          <h1 className="font-bold">Хэмжээ</h1>
          {size.map((type) => {
            return (
              <div className="form-control">
                <label className="label cursor-pointer flex justify-start gap-4">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-green-500"
                    defaultChecked
                  />
                  <span className="label-text">{type}</span>
                </label>
              </div>
            );
          })}
        </ul> */}
      </div>
      <div className="grid gap-5 grid-cols-4 grid-flow-dense  w-full ">
        {products?.map((p1, idx) => {
          return (
            <div key={idx}>
              <Link href={`${p1._id}`}>
                <div className="flex flex-col gap-3 relative w-full h-[300px]">
                  <Image
                    layout="fill"
                    src={p1.images[0]}
                    alt="Photo"
                    className="object-cover size-full rounded-xl w-auto h-auto"
                    priority
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
    </div>
  );
};

export default Kind;
