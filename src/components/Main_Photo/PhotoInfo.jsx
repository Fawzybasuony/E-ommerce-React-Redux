import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import "./Photoinfo.css";

const counters = [
  { number: 10000, suffix: "+", text: "Customers", icon: "customers" },
  { number: 100, suffix: "+", text: "Branches", icon: "branches" },
  { number: 1000, suffix: "+", text: "Partners", icon: "partners" },
  { number: 100, suffix: "+", text: "Awards", icon: "awards" },
];

const icons = {
  customers: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 20c0-3.6 3-6 7-6s7 2.4 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  branches: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21s6.5-5.7 6.5-11A6.5 6.5 0 1 0 5.5 10c0 5.3 6.5 11 6.5 11z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  partners: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 12l4-5h4l2 2 2-2h4l4 5-4 5-3-2-3 3-3-3-3 2-4-5z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  ),
  awards: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8.5" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 13l-1.5 7L12 18l4.5 2L15 13" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
};

function Counter({ to, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = null;
    const duration = 1700;

    const step = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * to));
      if (progress < 1) requestAnimationFrame(step);
    };

    const frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInView, to]);

  return (
    <strong ref={ref} className="sb-stat-number">
      {display.toLocaleString()}
      {suffix}
    </strong>
  );
}

export default function PhotoInfo() {
  return (
    <>
      {/* Section: Counters */}
      <section id="section-counter">
        <div className="sb-stats-glow" />

        <div className="container text-center">
          <div className="sb-stats-head">
            <span className="sb-stats-eyebrow">Since 2014</span>
            <h3 className="sb-stats-heading">Trusted by thousands, worldwide</h3>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row">
                {counters.map((counter, index) => (
                  <div key={index} className="col-6 col-lg-3 counter-wrap">
                    <div className="block-18">
                      <div className="sb-stat-icon">{icons[counter.icon]}</div>
                      <div className="text">
                        <Counter to={counter.number} suffix={counter.suffix} />
                        <span>{counter.text}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}