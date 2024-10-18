"use client";

import Card from "@/components/main-section/cart";
import { useContext } from "react";
import { CartContext } from "@/context/cart-context";
import { Hearts } from "react-loader-spinner";
import React from "react";

const Purchase = () => {
  const { card, cLoading } = useContext(CartContext);
  if (cLoading)
    return (
      <div className="flex flex-col gap-4 items-center bg-gray-100 p-10 ">
        <p className="text-base font-bold">Ангилал</p>

        <Hearts
          height="400"
          width="400"
          color="#f34567"
          ariaLabel="hearts-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );

  const amount = card?.map((e) => {
    return e?.product?.price * e?.quantity;
  });
  // console.log("sumlah tooo", amount);
  // amount=[11,22,33]

  // const sum = amount.reduce((a, b) => {
  //   return a + b;
  // });
  let sum = 0;
  // for (let i = 0; i < amount.length; i++) {
  //   sum += amount[i];
  // }
  amount?.forEach((num) => {
    sum += num;
  });
  // console.log("card harah", card);
  return (
    <div className="  flex flex-col gap-2 justify-center items-center">
      <div className="bg-white rounded-lg p-3 flex flex-col gap-5  w-1/3">
        <Card />

        <div className="flex justify-between items-center gap-2 border-t-2 border-dashed pt-3">
          <p>Нийт төлөх дүн:</p>
          <p className="font-bold">{sum.toLocaleString()}₮</p>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
