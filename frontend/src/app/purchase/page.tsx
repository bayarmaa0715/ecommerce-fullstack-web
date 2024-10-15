"use client";

import Card from "@/components/main-section/cart";
import { useContext } from "react";
import numeral from "numeral";
import { CartContext } from "@/context/cart-context";

const Purchase = () => {
  const { card, setCard } = useContext(CartContext);

  const minusCount = () => {
    // setCard(
    //   card.map((product) => {
    //     if (e.product._id === product.product._id) {
    //       if (e.quantity <= 1) {
    //         return { ...product, quantity: 1 };
    //       } else {
    //         return { ...product, quantity: product.quantity - 1 };
    //       }
    //     }
    //     // return { ...product, quantity: product.quantity - 1};
    //     // ...[1, 2, 3, 4, 5] => 1, 2, 3, 4, 5
    //     // ...{key: 'value'} => key: 'value'
    //     return product;
    //   })
    // );
  };

  const amount = card?.map((e) => {
    return e?.product?.price * e?.quantity;
  });
  // console.log("sumlah tooo", amount);

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
          <p className="font-bold">{numeral(sum).format("0,0")}₮</p>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
