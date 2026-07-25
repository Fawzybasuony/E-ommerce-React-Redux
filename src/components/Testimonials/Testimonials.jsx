import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css";

// Real-sounding, specific reviews beat generic "Great product!" quotes —
// swap these for actual customer reviews as soon as you have them.
const testimonials = [
  {
    text: "The fit was exactly as expected and the fabric feels better in person than in the photos. This is my third order this year.",
    name: "Mona R.",
    location: "Cairo, EG",
  },
  {
    text: "Support answered a return question within the hour and the refund landed two days later — no back and forth needed.",
    name: "Youssef K.",
    location: "Alexandria, EG",
  },
  {
    text: "I almost sized up just in case, but the size chart was spot on. Wish more stores were this accurate.",
    name: "Salma T.",
    location: "Giza, EG",
  },
  {
    text: "Free shipping actually arrived in 3 days like it said on the box. Small thing, but it's exactly what builds trust.",
    name: "Omar F.",
    location: "Dubai, AE",
  },
  {
    text: "Packaging alone felt premium. The dress itself held up after several washes with no fading.",
    name: "Nour A.",
    location: "Amman, JO",
  },
];

const StarIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="#f5b301">
    <path d="M12 2.5l2.9 6.6 7.1.7-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.8l7.1-.7L12 2.5z" />
  </svg>
);

const getInitials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

export default function Testimonials() {
  return (
    <section className="sb-testimonials">
      <div className="sb-testimonials-glow" />
      <span className="sb-testimonials-watermark" aria-hidden="true">
        &rdquo;
      </span>

      <div className="container">
        <div className="sb-testimonials-head">
          <span className="sb-testimonials-eyebrow">What customers say</span>
          <h3 className="sb-testimonials-heading">Loved, in their own words</h3>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          className="sb-testimonials-swiper"
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          spaceBetween={24}
          slidesPerView={1.05}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 1.8, centeredSlides: true },
            1200: { slidesPerView: 2.6, centeredSlides: true },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="sb-t-card">
                <span className="sb-t-quote-mark">&ldquo;</span>
                <div className="sb-t-stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon key={s} />
                  ))}
                </div>
                <p className="sb-t-text">{t.text}</p>
                <div className="sb-t-person">
                  <span className="sb-t-avatar">{getInitials(t.name)}</span>
                  <div>
                    <div className="sb-t-name">{t.name}</div>
                    <div className="sb-t-loc">{t.location}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}