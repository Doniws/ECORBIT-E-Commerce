import React from "react";
import Link from "next/link";
import Image from "next/image";

import NavBar from "./components/NavBar";
import SwiperGrid from "./components/SwiperTopGrid"
import Category from "./components/Category"
import Card from "./components/Card"

import Logo from "./assets/logodouble.png"


export default function Main() {
  return (
    <main className="container-main">
      <div className="wrapper-main">
        <NavBar />
        <SwiperGrid />
        <Category />
        <div className="container-card">
          <div className="wrapper-card">
            <Card />
          </div>
        </div>
        
        <div className="container-footer">
          <div className="wrapper-footer">
            <div className="top">


              <div className="left">
                <div className="wrap-logo">
                  <Image src={Logo} alt="logo" />
                </div>
                <div className="name">
                  <h1>ORBITRON TECH <b>TM</b></h1>
                  <p>Make It Better and Easy</p>
                </div>
              </div>
              <div className="right">
                <h2>Contact Me</h2>
                <ul>
                  <li><b>Email :</b> doniwahsap@gmail.com</li>
                  <li><b>No Telp :</b> 08888888</li>
                  <li><b>Social Media :</b> doniwahsap</li>
                </ul>
              </div>
            </div>
          
          <div className="bottom">
            Doni Wahyu Saputra © 2023
          </div></div>
        </div>

      </div>  
    </main>
  )
}
