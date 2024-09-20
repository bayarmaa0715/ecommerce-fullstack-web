"use client";
import React from "react";
type Kind = "Малгай" | "Усны сав" | "T-shirt" | "Hoodie" | "Tee" | "Цүнх";
type Size = "Free" | "S" | "M" | "L" | "XL" | "2XL" | "3XL";
export interface Product {
  name: string;
  type: Kind;
  size: Size;
  img: string;
  price: number;
  span?: string;
}
export const products: Product[] = [
  {
    name: "Independent Corners Tee ",
    type: "Малгай",
    size: "S",
    img: "/images/image (7).png",
    price: 12000,
  },
  {
    name: "Independent Corners Tee ",
    type: "Усны сав",
    size: "M",
    img: "/images/image (8).png",
    price: 12000,
  },
  {
    name: "Independent Corners Tee ",
    type: "Усны сав",
    size: "L",
    img: "/images/image (9).png",
    price: 12000,
    span: "row-span-2",
  },
  {
    name: "Independent Corners Tee ",
    type: "Усны сав",
    size: "XL",
    img: "/images/image (10).png",
    price: 12000,
  },
  {
    name: "Independent Corners Tee ",
    type: "Hoodie",
    size: "M",
    img: "/images/image (11).png",
    price: 12000,
    span: "col-span-2",
  },
  {
    name: "Independent Corners Tee ",
    type: "Hoodie",
    size: "L",
    img: "/images/image (12).png",
    price: 12000,
    // span: "col-span-2",
  },
  {
    name: "Independent Corners Tee ",
    type: "Hoodie",
    size: "XL",
    img: "/images/image (13).png",
    price: 12000,
    span: "row-span-3",
  },
];
const Baraa = () => {
  return (
    <div className="grid gap-5 grid-cols-3 grid-flow-dense  ">
      {" "}
      {products.map((product) => {
        return (
          <div className="mb-10">
            <img
              src={product.img}
              alt=""
              className="object-cover size-full rounded-xl"
            />
            <p className="text-sm">{product.name}</p>
            <h1 className="font-bold">{product.price}₮</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Baraa;
