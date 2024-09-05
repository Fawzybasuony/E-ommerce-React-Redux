import React from "react";
import Header from "./header";
import Footer from "./Footer";

export default function Abute() {
  return (
    <>
      <Header />
      <div className="about-section mb-4" style={{ marginTop: "100px" }}>
        <div className="text-center mt-5">
          <h2>
            Our <span className="text-danger">History</span>
          </h2>
          <p className="fw-bold text-secondary">
            More than 10+ years of experience in the fashion industry
          </p>
        </div>
        <section className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <img
                className="img-fluid mx-1 rounded shadow"
                src="/logos/person_1.jpg"
                alt="Fashion"
              />
            </div>
            <div className="col-12 col-lg-6">
              <div className="mx-1 mt-4">
                <p className="text-secondary">
                  we pride ourselves on more than a decade of delivering
                  top-quality fashion items that cater to all styles and tastes.
                  Established in [Year], our brand has grown to become a
                  household name, known for its dedication to excellence and
                  customer satisfaction.
                </p>
                <p className="text-secondary">
                  Our journey started with a simple idea: to provide
                  fashionable, comfortable, and affordable clothing to everyone.
                  Over the years, we've expanded our collection, continually
                  innovating to stay ahead of fashion trends and meet the
                  ever-evolving needs of our customers.
                </p>

                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className=" text-secondary form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label text-secondary"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label  text-secondary" htmlFor="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>



              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
