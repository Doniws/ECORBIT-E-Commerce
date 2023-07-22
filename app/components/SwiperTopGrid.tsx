"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import img1 from "../assets/laptop_12.jpg";
import Image from "next/image";
export default function Counter() {
  return (
    <Swiper
      className="img-wrapper-1"
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="img-wrapper">
        <Image src={img1} alt="" />
      </SwiperSlide>
      <SwiperSlide className="img-wrapper">
        <Image src={img1} alt="" />
      </SwiperSlide>
        <SwiperSlide className="img-wrapper">
          <Image src={img1} alt="" />
        </SwiperSlide>
    </Swiper>
  );
}

