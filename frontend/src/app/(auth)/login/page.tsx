import { Button } from "@/components/ui/button";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col gap-5 justify-center items-center my-56 w-1/4">
        <h1 className="text-xl font-bold">Нэвтрэх</h1>
        <input
          type="email"
          placeholder="Имэйл хаяг"
          className="rounded-full bg-white border px-3 py-1 w-full"
        />
        <input
          type="password"
          placeholder="Нууц үг"
          className="rounded-full bg-white border px-3 py-1  w-full"
        />

        <Button className=" w-full hover:bg-white border border-blue-500 bg-blue-500 text-black rounded-full">
          Нэвтрэх
        </Button>

        <Link href="" className="underline underline-offset-8 text-sm">
          Нууц үг мартсан
        </Link>
        <Link href="/signup" className="w-full">
          <Button className=" hover:bg-blue-500 border border-blue-500 bg-white text-black rounded-full  w-full">
            Бүртгүүлэх
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
