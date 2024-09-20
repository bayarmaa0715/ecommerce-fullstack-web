"use client";
import Baraa from "@/components/main-section/baraa";
import React from "react";
const kind = ["Малгай", "Усны сав", "T-shirt", "Hoodie", "Tee", "Цүнх"];
const size = ["Free", "S", "M", "L", "XL", "2XL", "3XL"];
const Kind = ({ products }) => {
  return (
    <div className="flex gap-10 px-20 py-10 ">
      <div className="flex flex-col gap-5 w-1/3 ">
        <ul className="list-disc pl-6">
          <h1 className="font-bold">Ангилал</h1>
          {kind.map((type) => {
            return (
              <div className="form-control">
                <label className="label cursor-pointer flex justify-start gap-4">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-green-500"
                    defaultChecked
                  />
                  <span className="label-text">{type}</span>
                </label>
              </div>
            );
          })}
        </ul>
        <ul className="list-disc pl-6">
          <h1 className="font-bold">Хэмжээ</h1>
          {size.map((type) => {
            return (
              <div className="form-control">
                <label className="label cursor-pointer flex justify-start gap-4">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-green-500"
                    defaultChecked
                  />
                  <span className="label-text">{type}</span>
                </label>
              </div>
            );
          })}
        </ul>
      </div>
      <div>
        {" "}
        <Baraa />
      </div>
    </div>
  );
};

export default Kind;
