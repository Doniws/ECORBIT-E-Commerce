import React from "react";
import NavBar from "../components/NavBar";
import Image from "next/image";
import Image1 from "../assets/laptop_12.jpg";

export default function Product() {
  return (
    <section className="container-product">
      <div className="wrapper-product">
        <NavBar />
        <div className="container-left">
          <div className="container-img-preview">
            <div className="wrapper-img">
              <Image src={Image1} alt="product" />
            </div>
            <div className="product-choice">
              <ul className="wrapper-choice">
                <li>
                  <Image src={Image1} alt="" />
                </li>
                <li>
                  <Image src={Image1} alt="" />
                </li>
                <li>
                  <Image src={Image1} alt="" />
                </li>
                <li>
                  <Image src={Image1} alt="" />
                </li>
              </ul>

              <div className="container-control">
                <i className="fa-solid fa-chevron-left"></i>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <div className="container-profile">
            <div className="profile-wrapper">
              <div className="profile-owner">
                <div className="owner-left">
                  <div className="profile-owner-img">
                    <Image src={Image1} alt="" />
                  </div>
                  <div className="profile-content">
                    <p className="profile-owner-name">Doniws</p>
                    <p className="profile-owner-description">Online</p>
                  </div>
                </div>
                <button className="profile-follow">
                  <p>Ikuti</p>
                </button>
              </div>
              <div className="profile-status">
                <div className="wrap-status">
                  <i class="fa-regular fa-star"></i>
                  <p className="rate">4.9</p>
                  <p className="name">average star</p>
                </div>
                <span className="line"></span>
                <div className="wrap-status">
                  <i class="fa-regular fa-clock"></i>
                  <p className="rate">0</p>
                  <p className="name">order proses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-center">
          <div className="wrapper-center">
            <div className="product">
              <div className="status">
                <h2 className="status-name">
                Laptop
              </h2>
              <ul className="status-product">
                <li><span>Terjual <p>60+</p></span></li>
                <span>•</span>
                <li><span>Diskusi <p>(6)</p></span></li>
              </ul>
              </div>
              
              <div className="price">
                <h2>Rp200.000</h2>
                <li><span><i class="fa-solid fa-star"></i>4 <p>(200 rating)</p></span></li>

              </div>

              <div className="choice-product">
                <h2>Pilihan Product :</h2>
                <ul className="wrapper-choice">
                  <li>
                    <Image src={Image1} alt="" />
                  </li>
                  <li>
                    <Image src={Image1} alt="" />
                  </li>
                  <li>
                    <Image src={Image1} alt="" />
                  </li>
                  <li>
                    <Image src={Image1} alt="" />
                  </li>
                  </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
