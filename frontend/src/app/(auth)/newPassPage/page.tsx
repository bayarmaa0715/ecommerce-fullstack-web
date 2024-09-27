import { Button } from "@/components/ui/button";
import exp from "constants";
import Link from "next/link";
import React from "react";

const NewPassPage = () => {
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col gap-5 justify-center items-center my-56 w-1/4">
        <h1 className="text-xl font-bold">Нууц үг сэргээх</h1>
        <input
          type="password"
          placeholder="Шинэ нууц үг"
          className="rounded-full bg-white border px-3 py-1 w-full"
        />
        <input
          type="password"
          placeholder="Шинэ нууц үг давтах"
          className="rounded-full bg-white border px-3 py-1 w-full"
        />
        <Link href="/login" className="w-full">
          <Button className=" hover:bg-blue-500 border border-blue-500 bg-white text-black rounded-full  w-full">
            Үүсгэх
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NewPassPage;
