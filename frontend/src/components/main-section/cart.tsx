"use client";
import React, { useContext } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { Button } from "../ui/button";
import { CartContext } from "@/context/cart-context";
import Image from "next/image";

const Card = () => {
  const { card, updatedQuantity, deleteCart } = useContext(CartContext);

  return (
    <div className="flex flex-col gap-4">
      <div className=" flex justify-between items-center">
        <p className="text-sm font-bold">1.Сагс ({card?.length})</p>
      </div>
      {card?.map((e, idx) => {
        return (
          <div key={idx} className=" flex gap-3 items-center  w-full">
            <div className="w-16 h-14">
              <Image
                width={100}
                height={100}
                src={e?.product?.images[0]}
                alt=""
                className="w-16 h-14 size-full object-cover rounded-lg "
              />
            </div>

            <div className="flex justify-between  gap-2 items-center w-full">
              <div>
                <p>{e?.product?.name}</p>

                <div className="flex gap-3  items-center">
                  <Button
                    onClick={() =>
                      updatedQuantity(
                        e?.product?._id,
                        Math.max(1, e?.quantity - 1)
                      )
                    }
                    className="bg-white text-black rounded-full border"
                  >
                    -
                  </Button>
                  <p>{e?.quantity}</p>
                  <Button
                    onClick={() => {
                      updatedQuantity(e?.product?._id, e?.quantity + 1);
                    }}
                    className="bg-white text-black rounded-full border"
                  >
                    +
                  </Button>
                </div>

                <p>{(e?.product?.price * e?.quantity).toLocaleString()}₮</p>
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
