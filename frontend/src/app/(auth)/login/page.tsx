"use client";
import { Button } from "@/components/ui/button";
import { UserContext } from "@/context/user";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useContext, useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();
  const { setToken } = useContext(UserContext);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const signin = async () => {
    try {
      const { email, password } = userData;
      console.log("data juser", userData);
      const res = await axios.post("http://localhost:8000/api/v1/auth/login", {
        email: email,
        password: password,
      });
      if (res.status === 200) {
        toast.success("Ажилттай нэвтэрлээ");
        console.log("Ажилттай нэвтэрлээ");
        const { token } = res.data;
        localStorage.setItem("token", token);
        setToken(token);

        router.push("/");
      }
    } catch (error) {
      toast.error("Хэрэглэгчийн имэйл эсвэл пасс буруу байна");
    }
  };
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col gap-5 justify-center items-center my-56 w-1/4">
        <h1 className="text-xl font-bold">Нэвтрэх</h1>
        <input
          type="email"
          placeholder="Имэйл хаяг"
          className="rounded-full bg-white border px-3 py-1 w-full"
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Нууц үг"
          className="rounded-full bg-white border px-3 py-1  w-full"
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />

        <Button
          onClick={signin}
          className=" w-full hover:bg-white border border-blue-500 bg-blue-500 text-black rounded-full"
        >
          Нэвтрэх
        </Button>

        <Link
          href="/forgetpass/forgottenpass"
          className="underline underline-offset-8 text-sm"
        >
          Нууц үг мартсан
        </Link>
      </div>
    </div>
  );
};

export default Login;
