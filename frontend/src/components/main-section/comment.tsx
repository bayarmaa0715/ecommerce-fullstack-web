"use client";

import { FaRegStar } from "react-icons/fa";
import { Button } from "../ui/button";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useContext, useState } from "react";
import { ProductContext } from "@/context/product-context";
import { UserContext } from "@/context/user";
import { useParams } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { METHODS } from "http";

const Comment = () => {
  const {
    products,
    createComment,
    rating,
    setRating,
    description,
    setDescription,
  } = useContext(ProductContext);
  const { user } = useContext(UserContext);

  const { id } = useParams();

  let content = [
    {
      id: "rfw",
      score: 10,
    },
    {
      id: "rfw",
      score: 10,
    },
    {
      id: "rfw",
      score: 10,
    },
  ];

  let sum = content.reduce(function (prev, current) {
    return prev + current.score;
  }, 0);
  // console.log(sum / content.length);
  console.log("products", products);
  console.log("products", products);
  let s = products.filter((product) => {
    if (id === product._id) return product?.comment.length > 0;
  });
  let a = s.map((product) => {
    // return product?.comment?.rate;
  });
  let c = a.map((p) => {
    return p;
  });
  // let d=a.reduce((a,b)=>{return a+b.rate},0)
  console.log("comment bichsen produts monu ", s);
  console.log("comment array monu a ", a);
  console.log("comment array monu p ", c);

  return (
    <div className="">
      <>
        {products.map((product) => {
          if (id === product._id) {
            return (
              <>
                {product?.comment.map((com) => (
                  <div className="border-b-2 py-5">
                    {" "}
                    <div className=" flex items-center gap-2 text-xl text-yellow-300">
                      <p className="text-black text-lg">{com?.userName}</p>
                      <Rating
                        style={{ maxWidth: 120 }}
                        value={com.rate}
                        readOnly
                      />
                    </div>
                    <p className="text-gray-600 text-sm">{com?.description}</p>
                  </div>
                ))}
              </>
            );
          }
        })}
      </>

      <div className="flex flex-col gap-2 bg-gray-100 mt-5 rounded-lg p-5">
        <p>Та үнэлгээ өгнө үү </p>
        <div className=" App ">
          <Rating
            style={{ maxWidth: 120 }}
            value={rating}
            onChange={setRating}
          />
        </div>
        <p>Сэтгэгдэл үлдээх</p>
        <input
          type="text"
          className="border-[1px] rounded-sm p-2 h-36 text-start text-wrap"
          onChange={(e) => setDescription(e.target.value)}
        />
        <div>
          {" "}
          <Button
            className="bg-blue-700 px-10 rounded-full"
            onClick={createComment}
          >
            Сэтгэгдэл үлдээх
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
