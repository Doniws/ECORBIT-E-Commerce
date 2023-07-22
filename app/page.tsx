import Link from "next/link";
import NavBar from "./components/NavBar";
import img1 from "./assets/laptop_12.jpg"
import Image from "next/image";

import Swiper from "./components/SwiperTopGrid"
import React from "react";

export default function Main() {
  return (
    <main className="container-main">
      <div className="wrapper-main">
        <NavBar />
        <div className="container-top-grid">
          <div className="wrapper-top-grid">

            {/* <div className="img-wrapper-1">
              <div className="img-wrapper">
                   <Image src={img1} alt="" />
              </div>
            </div> */}
              <Swiper/>
              

            <div className="img-wrapper-2">
              <div className="img-wrapper">
                <Image src={img1} alt="" />
              </div>
              <div className="img-wrapper">
                <Image src={img1} alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}
