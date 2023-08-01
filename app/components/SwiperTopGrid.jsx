"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../assets/laptop_12.jpg";
import Image from "next/image";
import { Pagination, Autoplay } from 'swiper/modules';


export default function SwiperTopGrid() {
  return (
    <>
      <div className="container-top-grid">
        <div className="wrapper-top-grid">
          <Swiper
            modules={[Pagination, Autoplay]}
            className="img-wrapper-1"
            slidesPerView={1}
            spaceBetween= {20}
            onSlideChange={() => console.log("slide change")}
            pagination={{ clickable: true }}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
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
          <div className="img-wrapper-2">
            <div className="img-wrapper">
              <Image src={img1} alt="" />
            </div>
            <div className="img-wrapper">
              <Image src={img1} alt="" />
            </div>
          </div>
        </div>
        <div className="container-choice">
          <div className="wrapper-choice">
            <ul>
              <li>
                <i className="fa-regular fa-cart-shopping"></i>
                <p>Baju</p></li>
              <li>
                <i className="fa-regular fa-cart-shopping"></i>
                <p>Baju</p></li>
              <li>
                <i className="fa-regular fa-cart-shopping"></i>
                <p>Baju</p></li>
              <li>
                <i className="fa-regular fa-cart-shopping"></i>
                <p>Baju</p></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

