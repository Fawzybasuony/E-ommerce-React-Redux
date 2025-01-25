import "./Slidar_2.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import ProductLest from "../productLest/productLest";

export default function Slider() {
  return (
    <>
      <ProductLest />

      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        className="xxx"
      >
        <SwiperSlide>
          {" "}
          <img src="/logos/logo-1.png" alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/logos/logo-2.png" alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/logos/logo-3.png" alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/logos/logo-4.png" alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/logos/logo-5.png" alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src="/logos/marka.png" alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src="/logos/marka_2.jpeg" alt="" />{" "}
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src="/logos/mrka_3.jpeg" alt="" />{" "}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
