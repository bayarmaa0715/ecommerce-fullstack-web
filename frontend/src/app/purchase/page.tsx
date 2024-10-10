"use client";

import Card from "@/components/main-section/cart";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import numeral from "numeral";
import { UserContext } from "@/context/user";

export type ICard = [
  {
    product: { name: string; price: number; images: string[]; _id: string };
    quantity: number;
    totalAmount: number;
    _id: string;
  }
];

export type IProduct = {
  product: { name: string; price: number; images: string[]; _id: string };
  quantity: number;
  totalAmount: number;
  _id: string;
};

const Purchase = () => {
  const [card, setCard] = useState([
    {
      product: { name: "", price: 0, images: [], _id: "" },
      quantity: 0,
      totalAmount: 0,
      _id: "",
    },
  ]);
  const { user } = useContext(UserContext);

  const addCount = (e: IProduct) => {
    setCard(
      card.map((pro) => {
        if (e.product._id === pro.product._id)
          return { ...pro, quantity: pro.quantity + 1 };
        return pro;
      })
    );
  };
  const minusCount = (e: IProduct) => {
    setCard(
      card.map((product) => {
        if (e.product._id === product.product._id) {
          if (e.quantity <= 1) {
            return { ...product, quantity: 1 };
          } else {
            return { ...product, quantity: product.quantity - 1 };
          }
        }
        // return { ...product, quantity: product.quantity - 1};

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
        // console.log("backees irsen cart data", res.data.AllCard[0].products);
      }
    } catch (error) {
      console.log("Backend eed all card iig harahd aldaa garlaa ", error);
    }
  };

  const deleteCart = async (e: IProduct) => {
    try {
      const userId = user?._id;
      const cardOneProductId = e?.product._id;
      console.log("jjjj", cardOneProductId);
      const res = await axios.delete(
        "http://localhost:8000/api/v1/purchasecard/deletecart",
        { data: { userId, cardOneProductId } }
      );
      if (res.status === 200) {
        setCard(res.data.updatedCard);
        console.log("backees irsen cart data", res.data.updatedCard);
      }
    } catch (error) {
      console.log("Backend eed card iig ustgahad  aldaa garlaa ", error);
    }
  };

  useEffect(() => {
    getCard;
    deleteCart;
  }, []);

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

  return (
    <div className="  flex flex-col gap-2 justify-center items-center">
      <div className="bg-white rounded-lg p-3 flex flex-col gap-5  w-1/3">
        <Card
          card={card}
          minusCount={minusCount}
          addCount={addCount}
          deleteCart={deleteCart}
        />
        <div className="flex justify-between items-center gap-2 border-t-2 border-dashed pt-3">
          <p>Нийт төлөх дүн:</p>
          <p className="font-bold">{numeral(sum).format("0,0")}₮</p>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
