"use client";

import { FaHeart, FaRegHeart, FaRegStar } from "react-icons/fa";
import { Button } from "../../components/ui/button";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { ProductContext } from "@/context/product-context";
import Baraa from "@/components/main-section/baraa";
import Comment from "@/components/main-section/comment";
import { useParams } from "next/navigation";
import Count from "@/components/main-section/count";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "@/context/user";



const Size = ["Free", "S", "M", "L", "XL", "2XL", "3XL"];
const ProductDetail = () => {
  const { product, like, setLike } = useContext(ProductContext);
  const { user } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const { id } = useParams();
  // console.log("user harah===>", user);
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

  const createCard = async () => {
    try {
      const { id } = useParams();

      // const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:8000/api/v1/purchasecard/createdcard",
        {
          productId: id,
          userId: user
        }
      );
      toast.success("Amjilttai sagsallaa");
    } catch (error) {}
  };

  useEffect(() => {
    createCard();
  }, []);

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
          <Count />
          <p className="font-bold"> {product?.price}$</p>
          <div>
            {" "}
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
