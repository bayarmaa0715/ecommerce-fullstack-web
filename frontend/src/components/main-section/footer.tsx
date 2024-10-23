"use client";
import Link from "next/link";
import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-black text-white py-12 px-28 ">
      <div className="flex justify-between items-center pb-10">
        <div className="w-8 h-8 relative">
          <Image
            fill={true}
            sizes="w-auto h-auto"
            src="/images/Vector.png"
            alt="Photo"
            className="w-auto h-auto"
            priority
          />
        </div>
        <div className="flex items-center gap-5 text-gray-400">
          <div className="flex items-center gap-3">
            <div className="border border-gray-400 rounded-full p-1">
              <IoCallOutline className="text-m" />
            </div>

            <h1>+976 86367692</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="border  border-gray-400 rounded-full p-1">
              <MdOutlineMail />
            </div>
            <h1>bayrmaa.m49@gmail.com</h1>
          </div>
        </div>
      </div>
      <div className="flex  items-center justify-between border-zinc-700 border-t-[1px] pt-10">
        <h1>© 2024 Ecommerce MN</h1>
        <div className="flex gap-5 text-xl">
          <Link href="https://github.com/dashboard">
            <FaFacebook />
          </Link>
          <Link href="https://github.com/dashboard">
            <FaInstagram />
          </Link>
          <Link href="https://github.com/dashboard">
            <FaSquareXTwitter />
          </Link>
          <Link href="https://github.com/dashboard">
            <CiLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
