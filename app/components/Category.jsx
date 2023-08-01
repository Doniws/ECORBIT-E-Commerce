"use client"

import React from 'react'
import {Swiper ,  SwiperSlide} from 'swiper/react'

import { Navigation ,Scrollbar } from 'swiper/modules'


export default function Category() {
  return (
    <div className="container-category">
    <div className="wrapper-category">
      <h2>Kategori</h2>
      <Swiper className="category-list"
        modules={[Navigation ,Scrollbar]}
      slidesPerView={13}
      mousewheel={true}
      // spaceBetween={20}
      scrollbar={{ draggable: true }}
      navigation = {
        {
          nextEl: '.next-swiper',
          prevEl: '.prev-swiper',
        }
      }
      >
        <SwiperSlide className='list'>
          <i className="fa-regular fa-cart-shopping"></i>
          <p>Baju</p>
        </SwiperSlide>
        <SwiperSlide className='list'>
          <i className="fa-regular fa-cart-shopping"></i>
          <p>Baju</p>
        </SwiperSlide>
        <SwiperSlide className='list'>
          <i className="fa-regular fa-cart-shopping"></i>
          <p>Baju</p>
        </SwiperSlide>
        <SwiperSlide className='list'>
          <i className="fa-regular fa-cart-shopping"></i>
          <p>Baju</p>
        </SwiperSlide>
        <SwiperSlide className='list'>
          <i className="fa-regular fa-cart-shopping"></i>
          <p>Baju</p>
        </SwiperSlide>
        <SwiperSlide className='list'>
          <i className="fa-regular fa-cart-shopping"></i>
          <p>Baju</p>
        </SwiperSlide>
        <SwiperSlide className='list'>
          <i className="fa-regular fa-cart-shopping"></i>
          <p>Baju</p>
        </SwiperSlide>
        <SwiperSlide className='list'>
          <i className="fa-regular fa-cart-shopping"></i>
          <p>Baju</p>
        </SwiperSlide>
        <SwiperSlide className='list'>
          <i className="fa-regular fa-cart-shopping"></i>
          <p>Baju</p>
        </SwiperSlide>
        <SwiperSlide className='list'>
          <i className="fa-regular fa-cart-shopping"></i>
          <p>Baju</p>
        </SwiperSlide>
        <SwiperSlide className='list'>
          <i className="fa-regular fa-cart-shopping"></i>
          <p>Baju</p>
        </SwiperSlide>
        <SwiperSlide className='list'>
          <i className="fa-regular fa-cart-shopping"></i>
          <p>Baju</p>
        </SwiperSlide>
        <SwiperSlide className='list'>
          <i className="fa-regular fa-cart-shopping"></i>
          <p>Baju</p>
        </SwiperSlide>
        <SwiperSlide className='list'>
          <i className="fa-regular fa-cart-shopping"></i>
          <p>Baju</p>
        </SwiperSlide>
        <SwiperSlide className='list'>
          <i className="fa-regular fa-cart-shopping"></i>
          <p>Baju</p>
        </SwiperSlide>
        <SwiperSlide className='list'>
          <i className="fa-regular fa-cart-shopping"></i>
          <p>Baju</p>
        </SwiperSlide>
        <SwiperSlide className='list'>
          <i className="fa-regular fa-cart-shopping"></i>
          <p>Baju</p>
        </SwiperSlide>
        <SwiperSlide className='list'>
          <i className="fa-regular fa-cart-shopping"></i>
          <p>Baju</p>
        </SwiperSlide>
        <SwiperSlide className='list'>
          <i className="fa-regular fa-cart-shopping"></i>
          <p>Baju</p>
        </SwiperSlide>
        <SwiperSlide className='list'>
          <i className="fa-regular fa-cart-shopping"></i>
          <p>Baju</p>
        </SwiperSlide>
        <SwiperSlide className='list'>
          <i className="fa-regular fa-cart-shopping"></i>
          <p>Baju</p>
        </SwiperSlide>
        <SwiperSlide className='list'>
          <i className="fa-regular fa-cart-shopping"></i>
          <p>Baju</p>
        </SwiperSlide>
        <SwiperSlide className='list'>
          <i className="fa-regular fa-cart-shopping"></i>
          <p>Baju</p>
        </SwiperSlide>
        <SwiperSlide className='list'>
          <i className="fa-regular fa-cart-shopping"></i>
          <p>Baju</p>
        </SwiperSlide>
        <SwiperSlide className='list'>
          <i className="fa-regular fa-cart-shopping"></i>
          <p>Baju</p>
        </SwiperSlide>
        <SwiperSlide className='list'>
          <i className="fa-regular fa-cart-shopping"></i>
          <p>Baju</p>
        </SwiperSlide>
        <SwiperSlide className='list'>
          <i className="fa-regular fa-cart-shopping"></i>
          <p>Baju</p>
        </SwiperSlide>
        <SwiperSlide className='list'>
          <i className="fa-regular fa-cart-shopping"></i>
          <p>Baju</p>
        </SwiperSlide>
        <SwiperSlide className='list'>
          <i className="fa-regular fa-cart-shopping"></i>
          <p>Baju</p>
        </SwiperSlide>
        <SwiperSlide className='list'>
          <i className="fa-regular fa-cart-shopping"></i>
          <p>Baju</p>
        </SwiperSlide>
        
      </Swiper>
      <button className='prev-swiper'><i className="fa-regular fa-angle-left"></i></button>
        <button className='next-swiper'><i className="fa-regular fa-angle-right"></i></button>
    </div>
  </div>
  )
}
