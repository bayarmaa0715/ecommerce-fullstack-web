"use client";
import React, { useContext } from "react";
import Baraa from "@/components/main-section/baraa";
import { CategoryContext } from "@/context/category-context";

import { Hearts } from "react-loader-spinner";

const Kind = () => {
  const { category, loading } = useContext(CategoryContext);

  if (loading)
    return (
      <div className="flex flex-col gap-4 items-center bg-gray-100 p-10 ">
        <p className="text-base font-bold">Ангилал</p>

        <Hearts
          height="400"
          width="400"
          color="#f32506"
          ariaLabel="hearts-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  return (
    <div className="flex gap-10 px-20 py-10 ">
      <div className="flex flex-col gap-5 w-1/3 ">
        <ul className="list-disc pl-6">
          <h1 className="font-bold">Ангилал</h1>
          {category?.map((type, key1) => {
            return (
              <div key={key1} className="form-control">
                <label className="label cursor-pointer flex justify-start gap-4">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-green-500"
                    defaultChecked
                  />
                  <span className="label-text">{type.name}</span>
                </label>
              </div>
            );
          })}
        </ul>
        {/* <ul className="list-disc pl-6">
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
        </ul> */}
      </div>
      <div>
        {" "}
        <Baraa />
      </div>
    </div>
  );
};

export default Kind;
