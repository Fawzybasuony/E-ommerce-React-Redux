import React from "react";
import "./productLest.css";
import { Link } from "react-router-dom";

export default function ProductLest() {
  const products = [
    {
      id: 1,
      image: "/logos/pro_1.jpg",
      label: "new",
      title: "Green Dress with details",
      price: "$22.90",
    },
    {
      id: 2,
      image: "/logos/pro_2.jpg",
      label: "sale",
      title: "Yellow Maxi Dress",
      price: "$25.90",
    },
    {
      id: 3,
      image: "/logos/pro_3.jpg",
      label: "new",
      title: "One piece bodysuit",
      price: "$19.90",
    },
    {
      id: 4,
      image: "/logos/pro_4.jpg",
      label: "popular",
      title: "Blue Dress with details",
      price: "$35.50",
    },
  ];

  return (
    <section className="latest-products spad">
      <div className="container">
        <div className="product-filter">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-title">
                <h3># Most popular products</h3>
                <hr className="w-25 mx-auto" />
              </div>
            </div>
          </div>
        </div>
        <div className="row" id="product-list">
          {products.map((product) => (
            <div
              key={product.id}
              className="col-lg-3 col-sm-6 mix all dresses bags"
            >
              <div className="single-product-item">
                <figure>
                  <Link to="#">
                    <img className="img_0" src={product.image} alt="product" />
                  </Link>
                  <div className={`p-status ${product.label}`}>
                    {product.label}
                  </div>
                </figure>
                <div className="product-text">
                  <h6>{product.title}</h6>
                  <p>{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
