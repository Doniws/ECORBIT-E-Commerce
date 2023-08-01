'use client'

import React from "react";
import img1 from "../assets/laptop_12.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Card() {
  const listProduct = [
    {
      id: 1,
      title: "Laptop 1",
      image: img1,
      price: 100000,
      description: "Description for Laptop 1",
    },
    {
      id: 2,
      title: "Laptop 2",
      image: img1,
      price: 120000,
      description: "Description for Laptop 2",
    },
    {
      id: 3,
      title: "Laptop 3",
      image: img1,
      price: 80000,
      description: "Description for Laptop 3",
    },
    {
      id: 4,
      title: "Laptop 4",
      image: img1,
      price: 140000,
      description: "Description for Laptop 4",
    },
    {
      id: 5,
      title: "Laptop 5",
      image: img1,
      price: 90000,
      description: "Description for Laptop 5",
    },
    {
      id: 6,
      title: "Laptop 6",
      image: img1,
      price: 110000,
      description: "Description for Laptop 6",
    },
    {
      id: 7,
      title: "Laptop 7",
      image: img1,
      price: 95000,
      description: "Description for Laptop 7",
    },
    {
      id: 8,
      title: "Laptop 8",
      image: img1,
      price: 130000,
      description: "Description for Laptop 8",
    },
    {
      id: 9,
      title: "Laptop 9",
      image: img1,
      price: 105000,
      description: "Description for Laptop 9",
    },
    {
      id: 10,
      title: "Laptop 10",
      image: img1,
      price: 150000,
      description: "Description for Laptop 10",
    },
  ];
  return (
    <>
      {listProduct.map((product) => {
        return (
          <Link href="/product" className="card" key={product.id}>
            <div className="img-card">
              <Image
                src={product.image}
                alt="img1"
                width="100%"
                height="100%"
              />
            </div>
            <div className="content-card">
              <h3>{product.title}</h3>
              <p>Rp 12.000</p>
              <span className="location">
                {" "}
                <i className="fa-duotone fa-location-dot"> </i>
                <p>Jakarta</p>
              </span>
              <div className="rating">
                <div className="wrap">
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
                </div>
                <p>Terjual (5000)</p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}
