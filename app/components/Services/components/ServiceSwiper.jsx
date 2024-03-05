"use client";

import React, { useEffect, useRef, useState } from "react";
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
import { ServiceCard } from "./ServiceCard";
import { checkSliderIsCenter } from "@/helpers/checkSliderIsCenter";
import s from "./ServiceSwiper.module.scss";

export default function ServiceSwiper({ data }) {
  const [sliderIsCenter, setSliderIsCenter] = useState(true);
  const swiperContainerRef = useRef(null);
  function handleOverflowSlider() {
    checkSliderIsCenter(swiperContainerRef, setSliderIsCenter, swiperContainerRef.current);
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
      >
        {data &&
          data.map((data, index) => {
            console.log(index);
            return (
              <SwiperSlide
                key={index}
                className={s.swiperSlide}
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
