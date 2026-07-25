import React from "react";
import { motion } from "framer-motion";
import "./mainHome.css";

const ShippingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M3 7h11v9H3V7zM14 10h4l3 3v3h-7v-6zM6.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM17 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GuaranteeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 3l7 3v5c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M9 12l2 2 4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SupportIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 13v-1a8 8 0 1 1 16 0v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path
      d="M4 13a2 2 0 0 1 2-2h1v6H6a2 2 0 0 1-2-2v-2zM20 13a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2v-2zM9 20h4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const features = [
  {
    icon: <ShippingIcon />,
    num: "01",
    title: "Free shipping",
    description: "On every order over $75, delivered to your door in 3–5 business days, no code needed.",
  },
  {
    icon: <GuaranteeIcon />,
    num: "02",
    title: "30-day guarantee",
    description: "Not the right fit? Return it within 30 days for a full refund, no questions asked.",
  },
  {
    icon: <SupportIcon />,
    num: "03",
    title: "Support, 24/7",
    description: "Real people, always on. Reach us any hour by chat or email and hear back the same day.",
  },
];

const tickerText = [
  "Free shipping over $75",
  "30-day returns",
  "Support 24/7",
  "Secure checkout",
];

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 44 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function MainHome() {
  return (
    <>
      {/* Section: Features */}
      <section className="features-section">
        {/* Scrolling ticker — repeated twice back to back for a seamless loop */}
        <div className="sb-ticker">
          <div className="sb-ticker-track">
            {[...tickerText, ...tickerText, ...tickerText].map((text, i) => (
              <span className="sb-ticker-item" key={i}>
                {text}
              </span>
            ))}
          </div>
        </div>

        <div className="features-ads">
          <div className="container">
            <div className="sb-features-head">
              <span className="sb-features-eyebrow">The fine print, made short</span>
              <h2 className="sb-features-heading">Why shop with us</h2>
            </div>

            <motion.div
              className="row align-items-stretch sb-features-row"
              variants={gridVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              {features.map((feature) => (
                <motion.div key={feature.num} className="col-lg-4 col-12" variants={cardVariants}>
                  <div className="single-features-ads">
                    <span className="sb-feat-ghost-num">{feature.num}</span>
                    <div className="sb-feature-icon">{feature.icon}</div>
                    <h4>{feature.title}</h4>
                    <span className="sb-feat-underline" />
                    <p>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}