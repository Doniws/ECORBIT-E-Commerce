import React from "react";
import NavBar from "../components/NavBar";
import LeftProduct from "../components/Product/About/Left"
import RightProduct from "../components/Product/About/RIght"
import Card from "../components/Card"

export default function Product() {
  return (
    <section className="container-product">
      <NavBar />
      <div className="about-product">
        
        <LeftProduct/>
        <RightProduct/>
      </div>
      <div className="related-product">
        <h2>Related</h2>
        <div className="wrapper-card">
          <Card />
        </div>
      </div>
      <div className="comment-product">
        
      </div>
    </section>
  );
}
