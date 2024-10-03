"use client";

import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { Button } from "../ui/button";
import { useState } from "react";
import Link from "next/link";

const Size = ["Free", "S", "M", "L", "XL", "2XL", "3XL"];
const ProductDetail = () => {
  const [count, setcount] = useState(1);
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

  return (
    <div className=" flex gap-10 items-center">
      <div className="flex flex-col gap-5 justify-center items-center">
        <img
          src="/images/img1.png"
          alt=""
          className="w-14 h-14 object-cover rounded-lg"
        />
        <img
          src="/images/img2.png"
          alt=""
          className="w-14 h-14 object-cover rounded-lg"
        />
        <img
          src="/images/img3.png"
          alt=""
          className="w-14 h-14 object-cover rounded-lg"
        />
        <img
          src="/images/img4.png"
          alt=""
          className="w-14 h-14 object-cover rounded-lg"
        />
      </div>
      <div className=" w-[350px]">
        <img
          src="/images/img1.png"
          alt=""
          className="object-cover size-full rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex ">
          <p className="border border-blue-600 rounded-md px-2">Шинэ</p>
        </div>
        <div className="flex gap-4 items-center">
          <p className="font-bold">WildFlower Hoodie</p>
          <FaRegHeart />
        </div>
        <p>Зэрлэг цэцгийн зурагтай даавуун материалтай цамц</p>
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
        <p className="font-bold"> 120,000$</p>
        <div>
          {" "}
          <Button className="bg-blue-700 px-10 rounded-full">
            Сагсанд нэмэх
          </Button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <p>Үнэлгээ</p>
            <Link
              href="/product"
              className="text-blue-400 underline underline-offset-4"
            >
              бүгдийг харах
            </Link>
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
