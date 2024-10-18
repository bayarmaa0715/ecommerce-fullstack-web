"use client";
import React from "react";
import { Button } from "../ui/button";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useContext } from "react";
import { ProductContext } from "@/context/product-context";
import { UserContext } from "@/context/user";
import { useParams } from "next/navigation";

const Comment = () => {
  const {
    products,
    createComment,
    rating,
    setRating,
    setDescription,
  } = useContext(ProductContext);


  const { id } = useParams();

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
