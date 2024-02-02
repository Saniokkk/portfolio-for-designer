"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
// import { FreeMode, Pagination } from "swiper/modules";
import { ServiceCard } from "./ServiceCard";
import s from "./ServiceSwiper.module.scss";

export default function ServiceSwiper({ data }) {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={16}
        pagination={{
          clickable: true,
        }}
        modules={[]}
        className={s.swiperContainer}
        breakpoints={{
          // when window width is >= 480px
          768: {
            // slidesPerView: 4,
          },
          // when window width is >= 640px
          1440: {
            // slidesPerView: 6,
          },
        }}
      >
        {data &&
          data.map((data, index) => {
            console.log(index);
            return (
              <SwiperSlide
                key={index}
                // className={s.swiperSlide}
              >
                <ServiceCard
                  data={data}
                  index={index}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
