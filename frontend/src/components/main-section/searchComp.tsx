"use client";

import Image from "next/image";

const SearchComp = () => {
  return (
    <div className="flex items-center gap-4 ">
      <div className="w-14 h-14 ">
        <Image
          width={100}
          height={100}
          src="/images/image (7).png"
          alt=""
          className="size-full rounded-xl"
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
