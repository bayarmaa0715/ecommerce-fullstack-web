"use client";
import React, { useContext, useState } from "react";
import { Input } from "../ui/input";
import { IoSearch } from "react-icons/io5";
import { FaHeartBroken } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Button } from "../ui/button";
import Link from "next/link";
import { UserContext } from "@/context/user";

const Header = () => {
  const { user } = useContext(UserContext);
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
        <FaHeartBroken className="text-red-500" />
        <Link href="purchase">
          <FaShoppingCart className="text-gray-500" />
        </Link>

        {user ? (
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
        ) : (
          <div>
            <Link href="/profilepage">
              <IoPersonCircleSharp className="text-gray-500" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
