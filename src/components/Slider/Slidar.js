import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./Slider.css";

export default function Slidar() {
  const slides = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
      title: "Modern Fashion",
      description: "Discover the Latest Trends",
      buttonText: "Shop Now",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1445205170230-053b83016050",
      title: "Elegant Style",
      description: "Exclusive Collection",
      buttonText: "Explore More",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04",
      title: "Premium Quality",
      description: "Unique Designs Just for You",
      buttonText: "View Collection",
    },
  ];

  return (
    <div className="position-relative">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        grabCursor={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        style={{ width: "100%", margin: "0", padding: "0" }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="group position-relative">
              <img
                src={slide.url}
                alt={slide.title}
                className="w-100 object-fit-cover "
                style={{ minHeight: "700px" }}
              />
              <div
                className="position-absolute top-0 start-0 end-0 bottom-0 rounded-3"
                style={{
                  background:
                    "linear-gradient(to right, rgba(129, 59, 241, 0.7), transparent)",
                }}
              />

              {/* _Text in Header */}
              <div className="position-absolute top-50 start-0 end-0 translate-middle-y p-5 text-white">
                <h3 className="display-4 fw-bold mb-4 slide-title">
                  {slide.title}
                </h3>
                <p className="fs-3 mb-5 slide-description">
                  {slide.description}
                </p>
                <button className="btn btn-light text-purple rounded-pill fw-semibold px-4 py-2 slide-button">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
