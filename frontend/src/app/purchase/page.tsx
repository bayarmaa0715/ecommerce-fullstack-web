"use client";

import Card from "@/components/main-section/cart";
import Count from "@/components/main-section/count";
import { Button } from "@/components/ui/button";

import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
export type ICard = [
  {
    product: { name: string; price: number; images: string[]; _id: string };
    quantity: number;
  }
];

export type IProduct = {
  product: { name: string; price: number; images: string[]; _id: string };
  quantity: number;
};

const Purchase = () => {
  const [card, setCard] = useState([
    {
      product: { name: "", price: 0, images: [], _id: "" },
      quantity: 0,
    },
  ]);

  const addCount = () => {};
  const minusCount = (e: IProduct) => {
    setCard(
      card.map((product) => {
        if (e.product._id === product.product._id)
          return { ...product, quantity: product.quantity - 1 };
        // ...[1, 2, 3, 4, 5] => 1, 2, 3, 4, 5
        // ...{key: 'value'} => key: 'value'
        return product;
      })
    );
  };

  const getCard = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/v1/purchasecard");
      if (res.status === 200) {
        setCard(res.data.AllCard[0].products);
        console.log("backees irsen cart data", res.data.AllCard[0].products);
      }
    } catch (error) {
      console.log("Backend eed all card iig harahd aldaa garlaa ", error);
    }
  };
  useEffect(() => {
    getCard();
  }, []);

  const amount = card.map((e) => {
    return e.product.price * e.quantity;
  });
  //
  const sum = amount.reduce((a, b) => {
    return a + b;
  });

  return (
    <div className="  flex flex-col gap-2 justify-center items-center">
      <div className="bg-white rounded-lg p-3 flex flex-col gap-5  w-1/3">
        <Card card={card} minusCount={minusCount} />
        <div className="flex justify-between items-center gap-2 border-t-2 border-dashed pt-3">
          <p>Нийт төлөх дүн:</p>
          <p className="font-bold">{sum}₮</p>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
