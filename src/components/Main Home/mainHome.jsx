import React from "react";
import "./mainHome.css";

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
