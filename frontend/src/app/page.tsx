"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  const add = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  return (
    <div className="">
      <h1>hi evervone</h1>
      <div className="flex gap-5 items-center">
        <Button onClick={minus}>-</Button>
        <Label>{count}</Label>
        <Button onClick={add}>+</Button>
      </div>
    </div>
  );
}
