import { SpotlightCardProps } from "@/types";
import Image from "next/image";
import React from "react";

const SpotlightCard = ({
  title,
  imgSrc,
  date,
  shortDescription,
  collectionType,
}: SpotlightCardProps) => {
  return (
    <div className="bg-[url('/white_ticket_bg.png')]  bg-no-repeat bg-contain w-[257px] dark:bg-[url('/black_ticket_bg.png')] dark:h-[624px] ">
      <div className="relative h-[400px]">
        <Image alt="" fill src={imgSrc} />
      </div>
      <h2 className="dark:text-white  text-xl">{title}</h2>
      <p className="text-gray-400 text-md my-1">{date}</p>
      <p className="dark:text-white mx-6">{shortDescription}</p>
      <div className="mx-6">
        <button className="w-full border-none p-1 text-white bg-black my-1">
          {collectionType}
        </button>
      </div>
    </div>
  );
};

export default SpotlightCard;
