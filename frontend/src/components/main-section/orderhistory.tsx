"use client";

import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";

const OrderHistory = () => {
  return (
    <div className=" w-2/5 flex flex-col gap-2 ">
      <p className="text-base font-bold">Захиалгын түүх</p>
      <div className="bg-white rounded-lg p-3 flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <div className=" flex justify-between items-center">
            <p className="text-sm font-bold">
              2023-12-12 15:23{" "}
              <span className="bg-blue-600 rounded-full py-1 px-2 text-white text-sm">
                хүргэлтэнд гарсан
              </span>{" "}
            </p>

            <FaAngleDown />
          </div>
          <div className=" flex gap-3 items-center  w-full">
            <Image
              width={100}
              height={100}
              src="/images/img1.png"
              alt=""
              className="w-16 h-14 object-cover rounded-lg "
            />
            <div className="flex justify-between  gap-2 items-center w-full">
              <div>
                <p>Chunky Olimp Tee</p>
                <p>
                  1 x <span>120,000$</span>
                </p>
              </div>
              <p>120,000$</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2 border-t-2 border-dashed pt-3">
          <p>Үнийн дүн:</p>
          <p className="font-bold">120,000$</p>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
