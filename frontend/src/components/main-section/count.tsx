"use client";
import React, { useContext } from "react";
import { Button } from "../ui/button";
import { ProductContext } from "@/context/product-context";

const Count = () => {
  const { product, setProduct } = useContext(ProductContext);
  const AddCountFunction = () => {
    return setProduct({ ...product, quantity: product?.quantity + 1 });
  };
  const MinusCountFunction = () => {
    if (product?.quantity <= 1) {
      return 1;
    } else {
      return setProduct({ ...product, quantity: product?.quantity - 1 });
    }
  };
  return (
    <div className="flex gap-3  items-center">
      <Button
        onClick={MinusCountFunction}
        className="bg-white text-black rounded-full border"
      >
        -
      </Button>
      <p>{product?.quantity}</p>
      <Button
        onClick={AddCountFunction}
        className="bg-white text-black rounded-full border"
      >
        +
      </Button>
    </div>
  );
};

export default Count;
