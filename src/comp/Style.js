import React from "react";
import "./SStyle.css";
 
 
 
 

export default function Style() {
  return (
    <>
  <section
      className="my-5"
      id="section-counter"
      style={{
        backgroundImage: "url(logos/bg_4.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row justify-content-center py-5">
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number={10000}>
                      10,000
                    </strong>
                    <span>Customers</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number={100}>
                      100
                    </strong>
                    <span>Branches</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number={1000}>
                      1,000
                    </strong>
                    <span>Partner</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number={100}>
                      100
                    </strong>
                    <span>Awards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="features-section ">
            <div className="features-ads">
              <div className="container">
                <div className="row align-items-center">

                  <div className="col-lg-4">

                    <div className="single-features-ads first mt-0">
                      <img src="/logos/logo_1.png" alt="" />
                      <h4>Free shipping</h4>
                      <p>
                        Fusce urna quam, euismod sit amet mollis quis,
                        vestibulum quis velit. Vesti bulum mal esuada aliquet
                        libero viverra cursus.{" "}
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="single-features-ads second">
                      <img src="/logos/logo_2.png" alt="" />
                      <h4>100% Money back </h4>
                      <p>
                        Urna quam, euismod sit amet mollis quis, vestibulum quis
                        velit. Vesti bulum mal esuada aliquet libero viverra
                        cursus.{" "}
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="single-features-ads">
                      <img src="/logos/logo_3.png" alt="" />
                      <h4>Online support 24/7</h4>
                      <p>
                        Urna quam, euismod sit amet mollis quis, vestibulum quis
                        velit. Vesti bulum mal esuada aliquet libero viverra
                        cursus.{" "}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

    

 


    </> 
 
  );
}
