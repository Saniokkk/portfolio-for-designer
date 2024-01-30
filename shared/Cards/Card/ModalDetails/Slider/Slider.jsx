//library
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./custom-pagination.css";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export const Slider = ({ data, classImage }) => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((el, i) => {
          const { name, url, width, height } = el.attributes;
          return (
            <SwiperSlide key={i}>
              <Zoom>
                <Image
                  className={classImage}
                  src={`https://admin.your-rules.com.ua${url}`}
                  alt={name}
                  width={width}
                  height={height}
                />
              </Zoom>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
