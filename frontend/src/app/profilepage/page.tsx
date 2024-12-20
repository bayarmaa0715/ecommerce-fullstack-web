"use client";

import OrderHistory from "@/components/main-section/orderhistory";
import ProfileInfo from "@/components/main-section/profileinfo";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Profile = () => {
  const [show, setShow] = useState(true);
  const showProfilInfo = () => {
    setShow(true);
  };
  const hideProfilInfo = () => {
    setShow(false);
  };
  return (
    <div className="flex justify-center bg-gray-200 py-24 h-[75vh]">
      <div className="flex gap-10 ">
        <div className="flex flex-col gap-2 text-start">
          <Button
            className="text-end bg-gray-200 text-black px-5  hover:bg-white hover:rounded-full  focus:bg-white focus:rounded-full "
            onClick={showProfilInfo}
          >
            Хэрэглэгчийн хэсэг
          </Button>
          <Button
            className=" bg-gray-200 text-end text-black  px-5 hover:bg-white hover:rounded-full  focus:bg-white focus:rounded-full "
            onClick={hideProfilInfo}
          >
            Захиалгын түүх
          </Button>
        </div>
        {show === true ? <ProfileInfo /> : <OrderHistory />}
      </div>
    </div>
  );
};

export default Profile;
