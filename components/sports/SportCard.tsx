import { SportCardProps } from "@/types";
import Image from "next/image";
import React from "react";

const SportCard = ({
  title,
  totalEvents,
  sportName,
  imgSrc,
  isAd,
  description,
}: SportCardProps) => {
  return (
    <div className="dark:bg-[#3B3E47]   shadow-2xl p-4">
      <div className="w-full mx-auto h-[217] flex justify-center relative">
        <Image
          className=""
          alt={title}
          src={imgSrc}
          height={217}
          layout="fixed"
          width={385}
          objectFit="contain"
        />
        {isAd && (
          <p className="bg-black text-white absolute top-0 right-0 px-4 py-1 text-xs">
            Ad
          </p>
        )}
      </div>
      {isAd && (
        <div className="mx-2">
          <h1 className="dark:text-white my-4">{title}</h1>
          <p className=" dark:text-[#DFDFDF] text-xs text-[#525965]">
            {description}
          </p>
        </div>
      )}
      {!isAd && (
        <div>
          <h1 className="dark:text-white my-2">{title}</h1>
          <div className="flex justify-between  dark:bg-black p-2 rounded-sm">
            <div className="flex flex-col w-1/2">
              <p className="dark:text-[#DFDFDF] text-xs text-[#525965]">
                Total Events
              </p>
              <p className="dark:text-white text-sm">{totalEvents} Events</p>
            </div>
            <div className="flex flex-col w-1/2">
              <p className="dark:text-[#DFDFDF] text-xs text-[#525965]">
                Sport
              </p>
              <p className="dark:text-white text-sm">{sportName}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SportCard;
