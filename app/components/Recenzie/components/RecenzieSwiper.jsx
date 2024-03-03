"use client";

import React, { useEffect, useState, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import cn from "classnames";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Mousewheel } from "swiper/modules";
import { RecenzieCard } from "./RecenzieCard";
import { checkSliderIsCenter } from "@/helpers/checkSliderIsCenter";

import s from "./RecenzieSwiper.module.scss";

export default function RecenzieSwiper({ data }) {
  const pageWidth = window?.innerWidth;
  const [sliderIsCenter, setSliderIsCenter] = useState(
    pageWidth >= 1440 ? true : false
  );
  const swiperContainerRef = useRef(null);
  function handleOverflowSlider() {
    checkSliderIsCenter(swiperContainerRef, setSliderIsCenter);
  }

  useEffect(() => {
    window.addEventListener("resize", handleOverflowSlider);
    handleOverflowSlider();
    return () => window.removeEventListener("resize", handleOverflowSlider);
  }, []);
  return (
    <>
      <Swiper
        ref={swiperContainerRef}
        slidesPerView={"auto"}
        mousewheel={{ releaseOnEdges: true }}
        spaceBetween={16}
        modules={[Mousewheel]}
        className={cn(s.swiperContainer, { [s.center]: sliderIsCenter })}
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
