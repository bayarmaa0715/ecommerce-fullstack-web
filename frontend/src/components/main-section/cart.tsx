import React from "react";

import { FaRegTrashAlt } from "react-icons/fa";
import { Button } from "../ui/button";

export type CardProps = {
  card: {
    product: { name: string; price: number; images: string[] };
    quantity: number;
  }[];
  minusCount: (_e: any) => void;
};

const Card = ({ card, minusCount }: CardProps) => {
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
                src={e.product.images[1]}
                alt=""
                className="w-16 h-14 size-full object-cover rounded-lg "
              />
            </div>

            <div className="flex justify-between  gap-2 items-center w-full">
              <div>
                <p>{e.product.name}</p>

                <div className="flex gap-3  items-center">
                  <Button
                    onClick={() => minusCount(e)}
                    className="bg-white text-black rounded-full border"
                  >
                    -
                  </Button>
                  <p>{e.quantity}</p>
                  <Button
                    onClick={() => {}}
                    className="bg-white text-black rounded-full border"
                  >
                    +
                  </Button>
                </div>
                <p>{e.product.price * e.quantity}₮</p>
              </div>
              <FaRegTrashAlt />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
