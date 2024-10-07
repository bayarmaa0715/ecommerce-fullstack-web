"use client";

import { FaHeart, FaRegHeart, FaRegStar } from "react-icons/fa";
import { Button } from "../../components/ui/button";
import { useContext, useState } from "react";
import Link from "next/link";
import { ProductContext } from "@/context/product-context";
import Baraa from "@/components/main-section/baraa";
import Comment from "@/components/main-section/comment";

const Size = ["Free", "S", "M", "L", "XL", "2XL", "3XL"];
const ProductDetail = () => {
  const [count, setcount] = useState(1);
  const { product, like, setLike } = useContext(ProductContext);
  const [show, setShow] = useState(true);

  const AddCountFunction = () => {
    return setcount(count + 1);
  };
  const MinusCountFunction = () => {
    if (count <= 1) {
      return 1;
    } else {
      return setcount(count - 1);
    }
  };

  const showComment = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const likeProduct = () => {
    if (like === true) {
      setLike(false);
    } else {
      setLike(true);
    }
  };

  console.log(show);
  return (
    <div className="flex flex-col gap-10 px-20 py-10  ">
      <div className=" flex gap-10 justify-center p-5 ">
        <div className="flex flex-col gap-5 pt-20 items-center">
          {product?.images.map((p) => {
            return (
              <img
                src={p}
                alt=""
                className="w-14 h-14 object-cover size-full rounded-lg"
              />
            );
          })}
        </div>
        <div className="w-[350px] h-full">
          <img
            src={product?.images[0]}
            alt=""
            className="size-full object-fill h-full rounded-lg obg"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex ">
            <p className="border border-blue-600 rounded-md px-2">Шинэ</p>
          </div>
          <div className="flex gap-4 items-center ">
            <p className="font-bold">{product?.name}</p>
            <Button
              className="bg-white hover:bg-white text-black text-2xl "
              onClick={likeProduct}
            >
              {like === true ? (
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
              {Size.map((size) => (
                <p className=" border rounded-full px-3"> {size}</p>
              ))}
            </ul>
          </div>
          <div className="flex gap-3  items-center">
            <Button
              onClick={MinusCountFunction}
              className="bg-white text-black rounded-full border"
            >
              -
            </Button>
            <p>{count}</p>
            <Button
              onClick={AddCountFunction}
              className="bg-white text-black rounded-full border"
            >
              +
            </Button>
          </div>
          <p className="font-bold"> {product?.price}$</p>
          <div>
            {" "}
            <Button className="bg-blue-700 px-10 rounded-full">
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
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <p className="text-black text-lg">4.6</p>
              <p className="text-black text-lg">(24)</p>
            </div>
            {show === true ? <Comment /> : <span></span>}
          </div>
        </div>
      </div>
      <Baraa />
    </div>
  );
};

export default ProductDetail;
