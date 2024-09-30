"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import axios from "axios";
import { toast } from "react-toastify";

const VerifyPage = () => {
  const [otpValue, setOtpValue] = useState("");
  const handleChangeOPT = (e: ChangeEvent<HTMLInputElement>) => {
    return setOtpValue(e.target.value);
  };
  const handleSendOTP = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/auth/forget-password",
        { otpValue }
      );
      if (res.status) {
      }
    } catch (error) {
      toast.error("email ilgeehed aldaa garlaa ");
    }
  };
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col gap-5 justify-center text-center items-center my-56 w-1/2">
        <h1 className="text-xl font-bold">Баталгаажуулах</h1>
        <p>bbb@gmail.com хаягт илгээсэн баталгаажуулах кодыг оруулна уу</p>
        <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS_AND_CHARS} >
          <InputOTPGroup className="flex gap-3" onChange={handleChangeOPT}>
            <InputOTPSlot index={0} className="border rounded-sm p-5" />
            <InputOTPSlot index={1} className="border rounded-sm p-5" />
            <InputOTPSlot index={2} className="border rounded-sm p-5" />
            <InputOTPSlot index={3} className="border rounded-sm p-5" />
          </InputOTPGroup>
        </InputOTP>
        <Link href="" className=" flex text-center">
          <p className=" underline underline-offset-8 text-center">
            Дахин илгээх (30)
          </p>
        </Link>
        <Link href="/newPassPage" className="w-full">
          <Button className=" hover:bg-blue-500 border border-blue-500 bg-white text-black rounded-full  w-full">
            Баталгаажуулах
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default VerifyPage;
