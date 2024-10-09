"use client";

import Count from "@/components/main-section/count";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const Purchase = () => {
  const [card, setCard] = useState();
  const getCard = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/v1/purchasecard");
      if (res.status === 200) {
        setCard(res.data.AllCard);
        console.log("first", res.data.AllCard);
      }
    } catch (error) {
      console.log("Backend eed all card iig harahd aldaa garlaa ", error);
    }
  };
  useEffect(() => {
    getCard();
  }, []);

  return (
    <div className="  flex flex-col gap-2 justify-center items-center">
      <div className="bg-white rounded-lg p-3 flex flex-col gap-5  w-1/3">
        <div className="flex flex-col gap-4">
          <div className=" flex justify-between items-center">
            <p className="text-sm font-bold">1.Сагс (3)</p>
          </div>
          {card?.map((e) => e.products._id)}
          <div className=" flex gap-3 items-center  w-full">
            <img
              src="/images/img1.png"
              alt=""
              className="w-16 h-14 object-cover rounded-lg "
            />
            <div className="flex justify-between  gap-2 items-center w-full">
              <div>
                <p>fk</p>
                <Count />
                <p>120,000$</p>
              </div>

              <FaRegTrashAlt />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2 border-t-2 border-dashed pt-3">
          <p>Нийт төлөх дүн:</p>
          <p className="font-bold">120,000$</p>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
