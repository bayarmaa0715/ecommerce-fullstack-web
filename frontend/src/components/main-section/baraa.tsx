"use client";
import { ProductContext } from "@/context/product-context";
import Link from "next/link";
import { useContext } from "react";

const Baraa = () => {
  const { products } = useContext(ProductContext);
  console.log("Product бүх дата харах bara =====>", products);
  return (
    <div className="grid gap-5 grid-cols-4 grid-flow-dense  ">
      {products?.map((product) => {
        return (
          <Link href={`${product._id}`}>
            <div className="flex flex-col gap-3 h-full">
              <img
                src={product.images[0]}
                alt=""
                className="object-cover size-full rounded-xl"
              />
              <div className="flex flex-col items-center ">
                <p className="text-sm">{product.name}</p>
                <h1 className="font-bold">{product.price}₮</h1>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Baraa;
