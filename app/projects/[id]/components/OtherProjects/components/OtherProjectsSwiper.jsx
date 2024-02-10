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
import { CardProject } from "./CardProject";
import s from "./OtherProjectsSwiper.module.scss";

export default function OtherProjectsSwiper({ data }) {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={16}
        mousewheel={{ releaseOnEdges: true }}
        modules={[Mousewheel]}
        className={s.swiperContainer}
        breakpoints={{
          // when window width is >= 480px
          768: {
            spaceBetween: 20,
          },
          // when window width is >= 640px
          1440: {
            spaceBetween: 40,
          },
        }}
      >
        {data &&
          data.map((data, index) => {
            console.log(index);
            return (
              <SwiperSlide
                key={index}
                className={s.swiperSlide}
              >
                <CardProject
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
