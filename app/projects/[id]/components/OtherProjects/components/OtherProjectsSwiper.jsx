"use client";

import React, { useEffect, useState, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import cn from "classnames";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { CardProject } from "./CardProject";
import { checkSliderIsCenter } from "@/helpers/checkSliderIsCenter";

import s from "./OtherProjectsSwiper.module.scss";

export default function OtherProjectsSwiper({ data }) {
  const [sliderIsCenter, setSliderIsCenter] = useState(true);
  const swiperContainerRef = useRef(null);

  function handleOverflowSlider() {
    checkSliderIsCenter(
      swiperContainerRef,
      setSliderIsCenter,
      swiperContainerRef.current
    );
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
        spaceBetween={16}
        mousewheel={{ releaseOnEdges: true }}
        modules={[Mousewheel]}
        className={cn(s.swiperContainer, { [s.center]: sliderIsCenter })}
        breakpoints={{
          768: {
            spaceBetween: 20,
          },
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
