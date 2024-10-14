"use client";
import React from "react";

import { FaRegTrashAlt } from "react-icons/fa";
import { Button } from "../ui/button";
import numeral from "numeral";
import { IProduct } from "@/app/purchase/page";
export type CardProps = {
  card: {
    product: {
      _id: string;
      name: string;
      price: number;
      images: string[];
    };
    quantity: number;
    totalAmount: number;
    _id: string;
  }[];
  minusCount: (_e: any) => void;
  addCount: (_e: any) => void;
  deleteCart: (_e: any) => void;
};

const Card = ({ card, minusCount, addCount, deleteCart }: CardProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className=" flex justify-between items-center">
        <p className="text-sm font-bold">1.Сагс ({card?.length})</p>
      </div>
      {card?.map((e) => {
        return (
          <div className=" flex gap-3 items-center  w-full">
            <div className="w-16 h-14">
              <img
                src={e?.product?.images[1]}
                alt=""
                className="w-16 h-14 size-full object-cover rounded-lg "
              />
            </div>

            <div className="flex justify-between  gap-2 items-center w-full">
              <div>
                <p>{e?.product?.name}</p>

                <div className="flex gap-3  items-center">
                  <Button
                    onClick={() => minusCount(e)}
                    className="bg-white text-black rounded-full border"
                  >
                    -
                  </Button>
                  <p>{e?.quantity}</p>
                  <Button
                    onClick={() => {
                      addCount(e);
                    }}
                    className="bg-white text-black rounded-full border"
                  >
                    +
                  </Button>
                </div>

                <p>{numeral(e?.product?.price * e?.quantity).format("0,0")}₮</p>
              </div>
              <button onClick={() => deleteCart(e?.product?._id)}>
                <FaRegTrashAlt />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
