"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

import React, { ChangeEvent, useState } from "react";
import { toast, useToast } from "react-toastify";

const ForgottenPage = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const handleChangeEmal = (e: ChangeEvent<HTMLInputElement>) => {
    return setEmail(e.target.value);
  };
  const handleSendOTP = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/auth/forget-password",
        { email }
      );
      if (res.status === 200) {
      }
    } catch (error) {
      toast.error("email ilgeehed aldaa garlaa ");
    }
  };
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col gap-5 justify-center items-center my-56 w-1/4">
        <h1 className="text-xl font-bold">Нууц үг сэргээх</h1>
        <input
          type="email"
          placeholder="Имэйл хаяг оруулах"
          className="rounded-full bg-white border px-3 py-1 w-full"
          onChange={handleChangeEmal}
        />

        <Button
          className=" hover:bg-blue-500 border border-blue-500 bg-white text-black rounded-full  w-full"
          onClick={handleSendOTP}
        >
          Илгээх
        </Button>
      </div>
    </div>
  );
};

export default ForgottenPage;
