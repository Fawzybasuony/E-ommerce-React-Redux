import React from "react";
import "./mainHome.css";

const counters = [
  { number: 10000, text: "Customers" },
  { number: 100, text: "Branches" },
  { number: 1000, text: "Partner" },
  { number: 100, text: "Awards" },
];

const features = [
  {
    img: "/logos/logo_1.png",
    title: "Free shipping",
    description:
      "Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vestibulum malesuada aliquet libero viverra cursus.",
    className: "first mt-0",
  },
  {
    img: "/logos/logo_2.png",
    title: "100% Money back",
    description:
      "Urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vestibulum malesuada aliquet libero viverra cursus.",
    className: "second",
  },
  {
    img: "/logos/logo_3.png",
    title: "Online support 24/7",
    description:
      "Urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vestibulum malesuada aliquet libero viverra cursus.",
    className: "",
  },
];

export default function MainHome() {
  return (
    <>
      {/* Section: Counters */}
      <section
  id="section-counter"
  style={{
    backgroundImage: "url(logos/bg_4.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    zIndex: 1,
    padding: "10px 0",
  }}
>
  {/* Overlay */}
  <div
    style={{
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.2)", 
      zIndex: -1,
    }}
  ></div> 

  <div className="container text-center">
    <div className="row justify-content-center">
      <div className="col-md-10">
        <div className="row">
          {counters.map((counter, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap"
           
            >
              <div className="block-18 text-center">
                <div className="text">
                  <strong className="number text-light" data-number={counter.number}>
                    {counter.number.toLocaleString()}
                  </strong>
                  <span className="text-light">{counter.text}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>






      {/* Section: Features */}
      <section className="features-section mt-5">
        <div className="features-ads">
          <div className="container">
            <div className="row align-items-center">
              {features.map((feature, index) => (
                <div key={index} className="col-lg-4  ">
                  <div className={`single-features-ads ${feature.className}`}>
                    <img src={feature.img} alt={feature.title} />
                 
                     <h4>{feature.title}</h4>
                     <p>{feature.description}</p>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
