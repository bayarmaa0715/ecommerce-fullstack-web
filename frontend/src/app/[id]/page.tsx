"use client";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Button } from "../../components/ui/button";
import React, { useContext, useState } from "react";
import { ProductContext } from "@/context/product-context";
import Baraa from "@/components/main-section/baraa";
import Comment from "@/components/main-section/comment";
import Count from "@/components/main-section/count";
import { CartContext } from "@/context/cart-context";
import numeral from "numeral";
import { Hearts } from "react-loader-spinner";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";

const Size = ["Free", "S", "M", "L", "XL", "2XL", "3XL"];
const ProductDetail = () => {
  const [rating, setRating] = useState(0);
  const { product, likeProduct, loading, rateSum, rateAvr } =
    useContext(ProductContext);
  const { createCard } = useContext(CartContext);
  const [show, setShow] = useState(false);

  const showComment = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  if (loading)
    return (
      <div className="flex flex-col gap-4 items-center bg-gray-100 p-10 ">
        <p className="text-base font-bold">Бүтээгдэхүүн</p>
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
    <div className="flex flex-col px-20 py-10  ">
      <div className=" flex gap-1 justify-center w-full h-1/3">
        <div className="flex gap-5 w-2/3 ">
          <div className="flex flex-col gap-5 justify-center items-center h-full ">
            {product?.images?.map((p, index) => {
              return (
                <Image
                  key={`img ${index} `}
                  width={100}
                  height={100}
                  src={p}
                  alt="Photo"
                  className="object-cover  rounded-lg w-20 h-20 "
                />
              );
            })}
          </div>
          <div className="w-2/3 h-full">
            <Image
              width={400}
              height={400}
              src={product?.images?.[0]}
              alt="Photo"
              className="size-full object-cover w-full h-full rounded-lg "
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 w-1/3 h-full">
          <div className="flex ">
            <p className="border border-blue-600 rounded-md px-2">Шинэ</p>
          </div>
          <div className="flex gap-4 items-center ">
            <p className="font-bold">{product?.name}</p>
            <Button
              className="bg-white hover:bg-white text-black text-2xl "
              onClick={likeProduct}
            >
              {product?.isLike === true ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart />
              )}
            </Button>
          </div>
          <p>{product?.discription}</p>
          <div className=" flex flex-col gap-3">
            <p>Хэмжээ</p>
            <ul className="flex gap-3">
              {Size.map((size, index) => (
                <p key={`size-${index}`} className=" border rounded-full px-3">
                  {size}
                </p>
              ))}
            </ul>
          </div>
          <Count />
          <p className="font-bold">{numeral(product?.price).format("0,0")}₮</p>
          <div>
            <Button
              className="bg-blue-700 px-10 rounded-full"
              onClick={createCard}
            >
              Сагсанд нэмэх
            </Button>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <p>Үнэлгээ</p>
              <Button
                className="text-blue-400 underline underline-offset-4 bg-white p-0 m-0 hover:bg-white hover:text:black"
                onClick={showComment}
              >
                бүгдийг харах
              </Button>
            </div>
            <div className=" flex items-center gap-2 text-xl text-yellow-300">
              <Rating
                style={{ maxWidth: 120 }}
                value={rating}
                onChange={setRating}
              />
              <p className="text-black text-lg">{rateAvr}</p>
              <p className="text-black text-lg">({rateSum})</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="w-1/3">
          {show === true ? <Comment /> : <span></span>}
        </div>
      </div>
      <Baraa />
    </div>
  );
};

export default ProductDetail;
