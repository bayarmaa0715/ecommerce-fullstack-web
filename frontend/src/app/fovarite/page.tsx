"use client";

import { Button } from "@/components/ui/button";
import { ProductContext } from "@/context/product-context";
import numeral from "numeral";
import { useContext } from "react";
import { FaAngleDown, FaHeart, FaRegHeart } from "react-icons/fa";

const Fovarite = () => {
  const { products, likeProduct } = useContext(ProductContext);

  return (
    <div className="flex flex-col gap-4 items-center bg-gray-100 p-10 ">
      <p className="text-base font-bold">Хадгалсан бүтээгдэхүүн</p>
      {
        <div className=" w-full flex flex-col items-center gap-4">
          {products.map((product) => {
            if (product.isLike === true)
              return (
                <div className=" flex gap-3 items-center  w-1/3 bg-white p-5 rounded-lg">
                  <div className="w-28 h-20 ">
                    <img
                      src={product.images[2]}
                      alt=""
                      className=" size-full object-cover rounded-lg "
                    />
                  </div>

                  <div className="flex justify-between  gap-2 items-start w-full">
                    <div>
                      <p>{product.name}</p>
                      <p>{numeral(product.price).format("0,0")}₮</p>
                      <button className=" bg-blue-600 rounded-full px-3 py-0 text-white text-sm">
                        Сагслах
                      </button>
                    </div>{" "}
                    <FaHeart className="text-black text-2xl" />
                  </div>
                </div>
              );
          })}
        </div>
      }
      <p>{}</p>
    </div>
  );
};

export default Fovarite;
