import React from "react";

import "./LatestProducts.css";
import { Link } from "react-router-dom";

export default function Lest() {
  return (
    <>
      <section className="latest-products spad">
        <div className="container">
          <div className="product-filter">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="section-title">
                  <h3># Most popular products</h3>
                  <hr className="w-25 mx-auto"/>
                </div>
              </div>
            </div>
          </div>
          <div className="row" id="product-list">
            <>
              <div className="col-lg-3 col-sm-6 mix all dresses bags">
                <div className="single-product-item">
                  <figure>
                    <Link to="#">
                      <img className="img_0" src="/logos/pro_1.jpg" alt="." />
                    </Link>
                    <div className="p-status">new</div>
                  </figure>
                  <div className="product-text">
                    <h6>Green Dress with details</h6>
                    <p>$22.90</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 mix all accesories bags">
                <div className="single-product-item">
                  <figure>
                    <Link to="#">
                      <img className="img_0" src="/logos/pro_2.jpg" alt="." />
                    </Link>
                    <div className="p-status sale">sale</div>
                  </figure>
                  <div className="product-text">
                    <h6>Yellow Maxi Dress</h6>
                    <p>$25.90</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 mix all dresses bags">
                <div className="single-product-item">
                  <figure>
                    <Link to="#">
                      <img className="img_0" src="/logos/pro_3.jpg" alt="." />
                    </Link>
                    <div className="p-status">new</div>
                  </figure>
                  <div className="product-text">
                    <h6>One piece bodysuit</h6>
                    <p>$19.90</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 mix all accesories bags">
                <div className="single-product-item">
                  <figure>
                    <Link to="#">
                      <img className="img_0" src="/logos/pro_4.jpg" alt="." />
                    </Link>
                    <div className="p-status popular">popular</div>
                  </figure>
                  <div className="product-text">
                    <h6>Blue Dress with details</h6>
                    <p>$35.50</p>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </section>
    </>
  );
}
