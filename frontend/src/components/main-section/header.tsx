"use client";
import React, { useContext, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { IoSearch } from "react-icons/io5";
import { FaHeartBroken } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Button } from "../ui/button";
import Link from "next/link";
import { UserContext } from "@/context/user";
import { CiPower } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { CartContext } from "@/context/cart-context";
import { ProductContext } from "@/context/product-context";

const Header = () => {
  const router = useRouter();
  const { user, token } = useContext(UserContext);
  const { card } = useContext(CartContext);


  const signout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };
  // useEffect(() => {

  // }, []);
  return (
    <div className="bg-black flex justify-between items-center py-3 px-3">
      <div className="flex gap-3">
        <Link href="/products">
          {" "}
          <img src="/images/Vector.png" alt="" />
        </Link>

        <Link href="/products" className="text-white font-extrabold">
          ECOMMERCE
        </Link>

        <Link href="/kind" className="text-gray-300 ml-4">
          Ангилал
        </Link>
      </div>
      <div className="flex items-center relative">
        <IoSearch className="text-gray-600 text-2xl font-bold absolute left-2 top-2" />
        <Input
          className="bg-zinc-900 border-none rounded-full text-white pl-9 "
          placeholder="Бүтээгдэхүүн хайх"
        />
      </div>
      <div className="flex gap-3 items-center">
        <Link href="fovarite" className="relative">
          <FaHeartBroken className="text-red-500 text-lg relative" />
          <p className="bg-blue-500 rounded-full text-white text-[9px] text-center px-1 py-[0.5px]  absolute top-[-11px] right-[-9px]">
            {0}
          </p>
        </Link>

        <Link href="purchase" className="relative">
          <FaShoppingCart className="text-gray-500 text-lg  relative" />
          <p className="bg-blue-500 rounded-full text-white text-[9px] text-center px-1 py-[0.5px]  absolute top-[-11px] right-[-9px]">
            {card?.length}
          </p>
        </Link>

        {token ? (
          <div className="flex items-center gap-2 text-gray-500">
            <Link href="/profilepage">
              <IoPersonCircleSharp />
            </Link>
            <p>{user?.firstname}</p>
            <Button
              className="bg-black p-0 hover:bg-black text-lg"
              onClick={signout}
            >
              {" "}
              <CiPower className="text-gray-400 font-extrabold" />
            </Button>
          </div>
        ) : (
          <>
            {" "}
            <Link href="/signup">
              <Button className=" hover:bg-blue-500 border border-blue-500 bg-black text-white rounded-full">
                Бүртгүүлэх
              </Button>
            </Link>
            <Link href="/login">
              <Button className="bg-blue-500 text-white rounded-full hover:border hover:border-blue-500">
                Нэвтрэх
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
