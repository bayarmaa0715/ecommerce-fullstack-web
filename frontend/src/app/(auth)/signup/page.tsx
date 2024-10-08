"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Signup = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    firstname: "",
    email: "",
    password: "",
    repassword: "",
  });
  const signup = async () => {
    const { firstname, email, password, repassword } = userData;
    if (password !== repassword) {
      toast.error("Нууц үг хоорондоо таарахгүй байна.");
      return;
    }
    try {
      const res = await axios.post("http://localhost:8000/api/v1/auth/signup", {
        firstname,
        email,
        password,
      });
      if (res.status === 201) {
        toast.success("Амжилттай бүртгэлээ");
        router.push("/login");
      }
    } catch (error) {
      toast.error("Бүртгэл үүсэхэд алдаа гарлаа");
      console.log("Newtrehed aldaa garlaa", error);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-5 w-1/4 my-48 justify-center items-center">
        <h1 className="text-xl font-bold">Бүртгүүлэх</h1>
        <input
          type="text"
          placeholder="Нэр"
          className="rounded-full bg-white border px-3 py-1 w-full"
          onChange={(e) => {
            return setUserData({ ...userData, firstname: e.target.value });
          }}
        />

        <input
          type="email"
          placeholder="Имэйл хаяг"
          className="rounded-full bg-white border px-3 py-1 w-full"
          onChange={(e) => {
            return setUserData({ ...userData, email: e.target.value });
          }}
        />
        <input
          type="password"
          placeholder="Нууц үг"
          className="rounded-full bg-white border px-3 py-1 w-full"
          onChange={(e) => {
            return setUserData({ ...userData, password: e.target.value });
          }}
        />
        <input
          type="password"
          placeholder="Нууц үг давтах"
          className="rounded-full bg-white border px-3 py-1 w-full"
          onChange={(e) => {
            return setUserData({ ...userData, repassword: e.target.value });
          }}
        />
        <Button
          className=" w-full hover:bg-white border border-blue-500 bg-blue-500 text-black rounded-full"
          onClick={signup}
        >
          Үүсгэх
        </Button>

        <Link href="/login" className="w-full">
          <Button className=" hover:bg-blue-500 border border-blue-500 bg-white text-black rounded-full  w-full">
            Нэвтрэх
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
