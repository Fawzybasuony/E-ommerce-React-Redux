import React from "react";

export default function Abute() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <>
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
              <div className="mx-1 mt-5 ">
                <p className="text-secondary  ">
                  <span className="text-danger">
                    we pride ourselves on more{" "}
                  </span>{" "}
                  than a decade of delivering top-quality fashion items that
                  cater to all styles and tastes. Established in [Year], our
                  brand has grown to become a household name, known for its
                  dedication to excellence and customer satisfaction.
                  <br />
                  <br />
                  <span className="text-info">
                    Our journey started with a simple idea: to provide
                    fashionable{" "}
                  </span>{" "}
                  comfortable, and affordable clothing to everyone. Over the
                  years, we've expanded our collection, continually innovating
                  to stay ahead of fashion trends and meet the ever-evolving
                  needs of our customers.
                </p>
                <form
                  className="border-0 rounded-3 p-4 mx-auto my-5 shadow-lg bg-light"
                  style={{ maxWidth: "500px" }}
                  onSubmit={handleSubmit}
                >
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label fw-bold text-dark fs-6"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control rounded-3"
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
                      className="form-label fw-bold text-dark fs-6"
                    >
                      Password
                    </label>
                    <textarea
                      className="form-control rounded-3"
                      id="exampleInputPassword1"
                      placeholder="Enter your password..."
                      style={{ minHeight: "100px", resize: "vertical" }}
                    />
                  </div>

                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label
                      className="form-check-label text-dark fs-6"
                      htmlFor="exampleCheck1"
                    >
                      Check me out
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary rounded-3 px-4 py-2 fw-semibold"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
