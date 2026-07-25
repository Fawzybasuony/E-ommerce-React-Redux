import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./Hero.css";

const slides = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=80",
    title: "Modern Fashion",
    description: "Discover the latest trends, cut for the season ahead.",
    buttonText: "Shop Now",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1800&q=80",
    title: "Elegant Style",
    description: "An exclusive collection, made for everyday occasions.",
    buttonText: "Explore More",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1800&q=80",
    title: "Premium Quality",
    description: "Unique designs, considered down to the last stitch.",
    buttonText: "View Collection",
  },
];

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Hero() {
  return (
    <div className="sb-hero ">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        grabCursor={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={900}
        loop={true}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.id}>
            <div className="sb-hero-slide">
              <img src={slide.url} alt={slide.title} className="sb-hero-img" />
              <div className="sb-hero-scrim" />
              <div className="sb-hero-glow" />

              <div className="sb-hero-content">
                <div className="sb-hero-index">
                  <span style={{color:"white"}}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="sb-hero-index-rule" />
                  <span style={{color:"white"}}>{String(slides.length).padStart(2, "0")}</span>
                </div>

                <h3 className="sb-hero-title">{slide.title}</h3>
                <p className="sb-hero-desc">{slide.description}</p>

                <button type="button" className="sb-hero-btn">
                  {slide.buttonText}
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}