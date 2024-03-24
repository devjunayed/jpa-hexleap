import React from "react";
import { SportsData } from "@/constants";
import SportCard from "./SportCard";

const Sports = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full mx-10 gap-4">
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

      <SportCard isAd={true} title="Advertisment title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." imgSrc={"/ad.png"}/>
    </div>
  );
};

export default Sports;
