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
import { Mousewheel } from "swiper/modules";
import { RecenzieCard } from "./RecenzieCard";
import s from "./RecenzieSwiper.module.scss";

export default function RecenzieSwiper({ data }) {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        mousewheel={{ releaseOnEdges: true }}
        spaceBetween={16}
        modules={[Mousewheel]}
        className={s.swiperContainer}
      >
        {data &&
          data.map((data, index) => {
            console.log(index);
            return (
              <SwiperSlide
                key={index}
                className={s.swiperSlide}
              >
                <RecenzieCard
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
