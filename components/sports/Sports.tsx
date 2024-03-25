import React from "react";
import { SportsData } from "@/constants";
import SportCard from "./SportCard";

const Sports = () => {
  return (
    <div className="w-full">
      <h1 className="border-b-2 dark:text-white border-blue-600 inline pb-1">Sports</h1>
      <div className="grid mt-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full  gap-4">
        {SportsData.map((data) => (
          <SportCard
            key={data.id}
            title={data.title}
            totalEvents={data.totalEvents}
            sportName={data.sportName}
            imgSrc={data.imgSrc}
            isAd={false}
          />
        ))}

        <SportCard
          isAd={true}
          title="Advertisment title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imgSrc={"/ad.png"}
        />
      </div>
      <div className="flex justify-center my-8 ">
        <button className="btn rounded-sm btn-primary btn-sm  bg-blue-600 text-white border-none">See More</button>
      </div>
    </div>
  );
};

export default Sports;
