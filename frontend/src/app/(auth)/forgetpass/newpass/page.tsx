"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
// import { useToast } from "@/hooks/use-toast";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

const NewPassPage = () => {
  const router = useRouter();
  const params = useSearchParams();
  const reset = params.get("resettoken");
  const [password, setPassword] = useState("");
  const [repass, setRepass] = useState("");

  const handleNewPassword = async () => {
    try {
      if (!(password === repass)) {
        toast.error("Нууц үг хоорондоо таарахгүй байна");
        console.log("Нууц үг хоорондоо таарахгүй байна");
        return;
      }
      console.log("Reset token", reset);
      const res = await axios.post(
        "http://localhost:8000/api/v1/auth/verify-password",
        {
          password,
          resetToken: reset,
        }
      );

      if (res.status === 200) {
        toast.success("Нууц үг good");
        console.log("Нууц үг good");
        router.push("/login");
      }
    } catch (error) {
      console.log("password solihod aldaa zaalaa", error);
    }
  };

  return (
    <div className="flex justify-center ">
      <div className="flex flex-col gap-5 justify-center items-center my-56 w-1/4">
        <h1 className="text-xl font-bold">Нууц үг сэргээх</h1>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Шинэ нууц үг"
          className="rounded-full bg-white border px-3 py-1 w-full"
        />
        <input
          type="password"
          onChange={(e) => setRepass(e.target.value)}
          placeholder="Шинэ нууц үг давтах"
          className="rounded-full bg-white border px-3 py-1 w-full"
        />

        <Button
          onClick={handleNewPassword}
          className=" hover:bg-blue-500 border border-blue-500 bg-white text-black rounded-full  w-full"
        >
          Үүсгэх
        </Button>
      </div>
    </div>
  );
};

export default NewPassPage;
