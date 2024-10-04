"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";

import React, { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const ForgottenPage = () => {
  const [email, setEmail] = useState("");
  const [otpValue, setOtpValue] = useState("");
  const [step, setStep] = useState(1);
  const [countDown, setCountDown] = useState(30);

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
        setStep(step + 1);
      }
    } catch (error) {
      toast.error("email ilgeehed aldaa garlaa ");
    }
  };

  const handleConfirmOtp = async (value: string) => {
    setOtpValue(value);
    if (value.length === 4) {
      try {
        const res = await axios.post(
          "http://localhost:8000/api/v1/auth/verify-otp",
          { email, otpValue: value }
        );
        if (res.status === 200) {
          toast.success(
            "Нууц үг сэргээх холбоосыг таны имэйл хаяг руу илгээлээ"
          );
        }
      } catch (error) {
        toast.error("Имэйл илгээхэд алдаа гарлаа");
      }
    }
  };

  const handleResendOtp = () => {
    setCountDown(30);
  };

  useEffect(() => {
    if (countDown > 0) {
      const countdown = setInterval(() => {
        setCountDown((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [countDown]);
  return (
    <div className="flex justify-center ">
      {step === 1 && (
        <>
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
        </>
      )}
      {step === 2 && (
        <>
          <div className="flex flex-col gap-5 justify-center text-center items-center my-56 w-1/2">
            <h1 className="text-xl font-bold">Баталгаажуулах</h1>
            <p>{email} хаягт илгээсэн баталгаажуулах кодыг оруулна уу</p>
            <InputOTP
              maxLength={4}
              onChange={handleConfirmOtp}
              value={otpValue}
              pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
            >
              <InputOTPGroup className="flex gap-3">
                <InputOTPSlot index={0} className="border rounded-sm p-5" />
                <InputOTPSlot index={1} className="border rounded-sm p-5" />
                <InputOTPSlot index={2} className="border rounded-sm p-5" />
                <InputOTPSlot index={3} className="border rounded-sm p-5" />
              </InputOTPGroup>
            </InputOTP>
            <Link href="" className=" flex text-center">
              <button
                onClick={handleResendOtp}
                className=" underline underline-offset-8 text-center"
              >
                Дахин илгээх ({countDown})
              </button>
            </Link>
            <Link href="/newPassPage" className="w-full">
              <Button className=" hover:bg-blue-500 border border-blue-500 bg-white text-black rounded-full  w-full">
                Баталгаажуулах
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default ForgottenPage;
