import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./productLest.css";

// Flat-lay product photography — no models — so the copy below matches
// what's actually pictured. Swap `image` back to your own /logos/pro_X.jpg
// paths once those product photos are in place.
const products = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1616761512547-ea151d8a56d5?auto=format&fit=crop&w=800&q=80",
    label: "new",
    title: "Relaxed denim shirt",
    price: "$38.00",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1523754182607-2ff5903ec1e2?auto=format&fit=crop&w=800&q=80",
    label: "sale",
    title: "Weekend accessory set",
    price: "$24.50",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1617178388553-a9d022974a5c?auto=format&fit=crop&w=800&q=80",
    label: "new",
    title: "Straight denim jeans",
    price: "$46.00",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&w=800&q=80",
    label: "popular",
    title: "Leather derby shoes",
    price: "$69.00",
  },
];

const HeartIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 20s-7.5-4.6-10-9.3C.5 7.2 2.4 4 5.8 4c2 0 3.5 1 6.2 3.6C14.7 5 16.2 4 18.2 4c3.4 0 5.3 3.2 3.8 6.7C19.5 15.4 12 20 12 20z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function ProductLest() {
  return (
    <section className="latest-products spad">
      <div className="container">
        <div className="product-filter">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-title">
                <span className="sb-products-eyebrow">Fresh in this week</span>
                <h3>Most popular products</h3>
                <hr className="mx-auto" />
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="row"
          id="product-list"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="col-lg-3 col-sm-6 mix all dresses bags"
              variants={cardVariants}
            >
              <div className="single-product-item">
                <figure>
                  <Link to={`/product/${product.id}`}>
                    <img className="img_0" src={product.image} alt={product.title} />
                  </Link>
                  <div className={`p-status ${product.label}`}>{product.label}</div>

                  <button type="button" className="sb-wish-btn" aria-label="Add to wishlist">
                    <HeartIcon />
                  </button>

                  <button type="button" className="sb-quick-add">
                    Quick add
                  </button>
                </figure>
                <div className="product-text">
                  <h6>{product.title}</h6>
                  <p>{product.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}