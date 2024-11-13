"use client";
import { Button } from "@/components/ui/button";

const ProfileInfo = () => {
  return (
    <div className="w-3/5 flex flex-col gap-2">
      <p className="text-base font-bold">Хэрэглэгчийн хэсэг</p>
      <p>Овог:</p>
      <input type="text" className="rounded-full w-full" />
      <p>Нэр:</p>
      <input type="text" className="rounded-full w-full" />
      <h1>Утасны дугаар:</h1>
      <input type="text" className="rounded-full w-full" />
      <p>Имэйл хаяг:</p>
      <input type="text" className="rounded-full w-full" />
      <p>Хаяг:</p>
      <input type="text" className="h-28 rounded-lg w-full" />
      <div className="flex justify-end">
        <Button className="bg-blue-600 rounded-full py-1 px-5 text-xs">
          Мэдээлэл шинэчлэх
        </Button>
      </div>
    </div>
  );
};

export default ProfileInfo;
