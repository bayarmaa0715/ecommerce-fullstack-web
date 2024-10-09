"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

const Count = () => {
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
  );
};

export default Count;
