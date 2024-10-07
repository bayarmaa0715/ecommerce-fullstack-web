"use client";

import { FaRegStar } from "react-icons/fa";
import { Button } from "../ui/button";

const Comment = () => {
  return (
    <div className="p-5">
      <div className="border-b-2 pb-5">
        <div className=" flex items-center gap-2 text-xl text-yellow-300">
          <p className="text-black text-lg">Saraa</p>
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </div>
        <p className="text-gray-600 text-sm">Taalagdlaa shuu amjilt</p>
      </div>

      <div className="flex flex-col gap-2 bg-gray-100 mt-5 rounded-lg p-5">
        <p>Та үнэлгээ өгнө үү</p>
        <div className=" flex items-center gap-2 text-xl text-yellow-300">
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </div>
        <p>Сэтгэгдэл үлдээх</p>
        <input
          type="text"
          className="border-[1px] rounded-sm p-2 h-36 text-start text-wrap"
        />
        <div>
          {" "}
          <Button className="bg-blue-700 px-10 rounded-full">Үнэлэх</Button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
