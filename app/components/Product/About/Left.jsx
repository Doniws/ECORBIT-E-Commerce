"use client"


import React, { useState } from 'react'
import Image from "next/image";
import Image1 from "../../../assets/laptop_12.jpg";

export default function LeftProduct() {

    // plus minus button 
    const [count, setCount] = useState(1);
    const plus = () => setCount(count + 1);

    const minus = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }
    return (
        <>
            <div className="container-left">
                <div className="wrapper-left">
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
                                    <i className="fa-regular fa-star"></i>
                                    <p className="rate">4.9</p>
                                    <p className="name">average star</p>
                                </div>
                                <span className="line"></span>
                                <div className="wrap-status">
                                    <i className="fa-regular fa-clock"></i>
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
                                <h2 className="product-name">
                                    Laptop ORBIT 18Inch 10000 MAH AMD RYZEN 9 11000X
                                </h2>
                                <ul className="status-product">
                                    <li><span>Terjual <p>60+</p></span></li>
                                    <span>•</span>
                                    <li><span>Diskusi <p>(6)</p></span></li>
                                </ul>
                            </div>

                            <div className="price">
                                <h2>Rp200.000</h2>
                                <li>
                                    <span>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        4 <p>(200 rating)</p>
                                    </span>
                                </li>
                            </div>

                            <div className="choice-product">
                                <h3>Pilihan Product </h3>
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

                            <div className="choice-product">
                                <h3>Ukuran </h3>
                                <div className="wrapper-size">
                                    <button>
                                        <p>20</p>
                                    </button><button>
                                        <p>20</p>
                                    </button><button>
                                        <p>20</p>
                                    </button><button>
                                        <p>20</p>
                                    </button><button>
                                        <p>20</p>
                                    </button>
                                    
                                </div>
                            </div>
                            <div className="choice-product">
                                <h3>Quantity </h3>
                                <div className="wrapper-quantity">
                                    <button className="quantity-minus" onClick={minus}>
                                        <i className="fa-solid fa-minus"></i>
                                    </button>
                                    <p className="quantity">{count}</p>
                                    <button className="quantity-plus" onClick={plus}>
                                        <i className="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="button-shop">
                                <button className='cart'>
                                    <i class="fa-regular fa-cart-plus"></i>
                                    <p>Add to cart</p>
                                </button>
                                <button className='buy'>
                                    Buy Now
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
