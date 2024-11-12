"use client";

import Image from "next/image";

const SearchComp = () => {
  return (
    <div className="flex items-center gap-4 ">
      <div className="w-14 h-14n relative ">
        <Image
          fill={true}
          sizes="w-auto h-auto"
          src="/images/image (7).png"
          alt="Photo"
          className=" w-auto h-auto"
          priority
        />
      </div>
      <div>
        <h1>Chunky Glyph Tee</h1>
        <p className="font-bold">120,000₮</p>
      </div>
    </div>
  );
};

export default SearchComp;
