import Image from "next/image";
import React from "react";

function Balance({ bal }: { bal: number }) {
  return (
    <div className="flex bg-softRed p-[25px] md:p-[30px] rounded-2xl justify-between items-center mb-5 text-veryPaleOrange">
      <div className="flex flex-col">
        <h2 className="font-extralight text-sm md:text-base">My balance</h2>
        <h3 className="font-bold text-2xl md:text-3xl">${bal}</h3>
      </div>

      <Image
        className="h-[45px] w-auto md:h-auto"
        width={100}
        height={100}
        src='/logo.svg'
        alt='logo'
      />
    </div>
  );
}

export default Balance;
