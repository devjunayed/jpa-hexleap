"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./sportlight.css";
import SpotlightCard from "./SpotlightCard";
import { SpotlightData } from "@/constants";

const Spotlight = () => {
  return (
    <div>
      <h1 className="text-3xl text-center dark:text-white">
        Collection Spotlight
      </h1>
      <p className="dark:text-white text-lg text-center my-6">
        Discover extraordinary moments with our Spotlight Collection
        metatickets—exclusive access to premium events for an unforgettable
        experience. Grab yours today!
      </p>

      <div className="mx-1 sm:mx-2 md:mx-4  my-10 flex justify-center">
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          className="flex "
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            320:{
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024:{
              slidesPerView: 3,
            }
          }}
        >
          {SpotlightData.map((data) => (
            <SwiperSlide>
              <SpotlightCard
                key={data.id}
                title={data.title}
                date={data.date}
                shortDescription={data.shortDescription}
                collectionType={data.collectionType}
                imgSrc={data.imgSrc}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Spotlight;
