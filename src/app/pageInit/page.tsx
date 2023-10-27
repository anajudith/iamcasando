import Image from "next/image";
import React from "react";
import banner from "./banner.png";
import Countdown from "@/components/countdown";

function PageInit() {
  const targetDate = new Date("2024-10-19T00:00:00");
  return (
    <div className="pt-[100px] flex flex-col">
      <Image
        className=" w-full border-r border-gray-20 flex justify-start items-center bg-center bg-cover"
        src={banner}
        alt="Apresentation of the pair"
        // automatically provided
        // automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <Countdown />
    </div>
  );
}

export default PageInit;
