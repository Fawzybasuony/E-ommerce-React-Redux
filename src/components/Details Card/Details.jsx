import React, { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import { Add as AddToCart, incrementByAmount } from "../../Radox/mydataSlice";
import data from "../../data.json";
import "./Detailse.css";

/* ------------------------------------------------------------------ */
/* config                                                              */
/* ------------------------------------------------------------------ */

const SHOP_ROUTE = "/Shop";
const CART_ROUTE = "/Cart";

/* ------------------------------------------------------------------ */
/* helpers                                                             */
/* ------------------------------------------------------------------ */

const money = (n) =>
  `$${Number(n || 0).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const plate = (id) => `\u2116 ${String(id).padStart(3, "0")}`;

const ratingOf = (item) =>
  typeof item.rating === "number" ? item.rating : item.rating?.rate ?? 0;

const reviewsOf = (item) =>
  typeof item.rating === "object" ? item.rating?.count ?? 0 : 0;

/* ------------------------------------------------------------------ */
/* read-only rating — fills fractionally, so 4.5 shows half a star     */
/* ------------------------------------------------------------------ */

function Rating({ value, count }) {
  const pct = `${Math.max(0, Math.min(5, value)) * 20}%`;

  return (
    <div className="sb-rate" aria-label={`${value} out of 5, ${count} reviews`}>
      <span className="sb-rate-stars" aria-hidden="true">
        <span className="sb-rate-base">★★★★★</span>
        <span className="sb-rate-fill" style={{ inlineSize: pct }}>
          ★★★★★
        </span>
      </span>
      <span className="sb-rate-meta">
        {value.toFixed(1)} · {count} review{count === 1 ? "" : "s"}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* page                                                                */
/* ------------------------------------------------------------------ */

export default function Details() {
  const { ID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { selectedProductsID } = useSelector((state) => state.counter);

  const [qty, setQty] = useState(1);
  const [colorIndex, setColorIndex] = useState(0);
  const [myRating, setMyRating] = useState(0);

  const product = useMemo(
    () => data.find((item) => item.id === Number.parseInt(ID, 10)) ?? null,
    [ID]
  );

  const related = useMemo(() => {
    if (!product) return [];
    return data
      .filter((i) => i.category === product.category && i.id !== product.id)
      .slice(0, 4);
  }, [product]);

  /* moving between related items should start at the top of the page */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setQty(1);
    setColorIndex(0);
    setMyRating(0);
  }, [ID]);
 
  
  /* ---------------------------------------------------------------- */
  /* not found                                                         */
  /* ---------------------------------------------------------------- */
  if (!product) {
    return (
      <div className="sb-details">
        <section className="sb-shop-section">
          <div className="sb-shop-container">
            <div className="sb-notfound">
              <p className="sb-eyebrow">Catalogue</p>
              <h1 className="sb-notfound-title">We cannot find that piece.</h1>
              <p className="sb-notfound-body">
                The reference may have been retired, or the link may be
                incomplete.
              </p>
              <button
                type="button"
                className="sb-btn sb-btn-solid"
                onClick={() => navigate(SHOP_ROUTE)}
              >
                Back to the catalogue
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  /* ---------------------------------------------------------------- */
  /* derived                                                           */
  /* ---------------------------------------------------------------- */
  const inCart = selectedProductsID.includes(product.id);
  const rate = ratingOf(product);
  const reviews = reviewsOf(product);
  const colors = Array.isArray(product.colors) ? product.colors : [];
  const stock = Number(product.stock) || 0;
  const saving = product.oldPrice ? product.oldPrice - product.price : 0;
  const savingPct = product.oldPrice
    ? Math.round((saving / product.oldPrice) * 100)
    : 0;

  const stockState =
    stock === 0 ? "out" : stock <= 3 ? "low" : stock <= 10 ? "some" : "in";

  const stockCopy = {
    out: "Sold out for now",
    low: `Only ${stock} left`,
    some: `${stock} in stock`,
    in: "In stock, ships in 48 hours",
  }[stockState];

  /* ---------------------------------------------------------------- */
  /* actions                                                           */
  /* ---------------------------------------------------------------- */
  const handleAdd = () => {
    /* the slice adds one unit, then raises the quantity for the rest */
    dispatch(AddToCart(product));
    for (let i = 1; i < qty; i += 1) dispatch(incrementByAmount(product));

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: qty > 1 ? `${qty} added to your cart` : "Added to your cart",
      toast: true,
      showConfirmButton: false,
      timer: 1700,
      timerProgressBar: true,
    });
  };

  return (
    <div className="sb-details mt-5">
 
    
      <section className="sb-shop-section sb-product">
        <div className="sb-shop-container sb-product-layout">
          {/* ---- media ---- */}
          <div className="sb-product-media">
            <div className="sb-media-frame">
              <img src={product.image} alt={product.title} />

              <div className="sb-media-flags">
                {product.tag && (
                  <span
                    className={`sb-flag sb-flag-${product.tag.toLowerCase()}`}
                  >
                    {product.tag}
                  </span>
                )}
                {savingPct > 0 && (
                  <span className="sb-flag sb-flag-save">
                    Save {savingPct}%
                  </span>
                )}
              </div>

              <span className="sb-media-ref">{plate(product.id)}</span>
            </div>
          </div>

          {/* ---- info ---- */}
          <div className="sb-product-info">
            {product.category && (
              <p className="sb-eyebrow">{product.category}</p>
            )}

            <h1 className="sb-product-title">{product.title}</h1>

            <Rating value={rate} count={reviews} />

            <div className="sb-price-row">
              <span className="sb-price">{money(product.price)}</span>
              {product.oldPrice && (
                <>
                  <s className="sb-price-old">{money(product.oldPrice)}</s>
                  <span className="sb-price-save">
                    You save {money(saving)}
                  </span>
                </>
              )}
            </div>

            <p className="sb-product-desc">{product.description}</p>

            {/* spec list */}
            <dl className="sb-specs">
              {product.material && (
                <div className="sb-spec">
                  <dt>Made from</dt>
                  <dd>{product.material}</dd>
                </div>
              )}
              <div className="sb-spec">
                <dt>Reference</dt>
                <dd>{plate(product.id)}</dd>
              </div>
              {product.category && (
                <div className="sb-spec">
                  <dt>Category</dt>
                  <dd>{product.category}</dd>
                </div>
              )}
            </dl>

            {/* colours */}
            {colors.length > 0 && (
              <div className="sb-option">
                <p className="sb-option-label">
                  Colour
                  <span className="sb-option-value">
                    {colorIndex + 1} of {colors.length}
                  </span>
                </p>
                <div className="sb-swatch-row" role="radiogroup">
                  {colors.map((c, i) => (
                    <button
                      key={c}
                      type="button"
                      role="radio"
                      aria-checked={colorIndex === i}
                      aria-label={`Colour option ${i + 1}`}
                      className={`sb-swatch-btn${
                        colorIndex === i ? " is-active" : ""
                      }`}
                      style={{ backgroundColor: c }}
                      onClick={() => setColorIndex(i)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* stock */}
            <p className={`sb-stock sb-stock-${stockState}`}>
              <span className="sb-stock-dot" aria-hidden="true" />
              {stockCopy}
            </p>

            {/* buy row */}
            <div className="sb-buy">
              <div className="sb-qty" aria-label="Quantity">
                <button
                  type="button"
                  className="sb-qty-btn"
                  aria-label="Decrease quantity"
                  disabled={qty <= 1}
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                >
                  −
                </button>
                <span className="sb-qty-value">{qty}</span>
                <button
                  type="button"
                  className="sb-qty-btn"
                  aria-label="Increase quantity"
                  disabled={stock > 0 && qty >= stock}
                  onClick={() => setQty((q) => q + 1)}
                >
                  +
                </button>
              </div>

              <button
                type="button"
                className="sb-btn sb-btn-solid sb-buy-btn"
                disabled={stock === 0}
                onClick={handleAdd}
              >
                {stock === 0 ? "Sold out" : "Add to cart"}
              </button>
            </div>

            {inCart && (
              <button
                type="button"
                className="sb-inline-link"
                onClick={() => navigate(CART_ROUTE)}
              >
                Already in your cart — view it
              </button>
            )}

            {/* accordion */}
            <div className="sb-accordion">
              <details>
                <summary>
                  Shipping
                  <span className="sb-mark" aria-hidden="true" />
                </summary>
                <p>
                  Orders placed before 4pm leave the workshop the next working
                  day. Tracking is emailed as soon as the label is printed.
                </p>
              </details>

              <details>
                <summary>
                  Returns
                  <span className="sb-mark" aria-hidden="true" />
                </summary>
                <p>
                  Thirty days from delivery, any reason, return label on us. No
                  restocking fee.
                </p>
              </details>

              <details>
                <summary>
                  Care
                  <span className="sb-mark" aria-hidden="true" />
                </summary>
                <p>
                  {product.material
                    ? `${product.material}. Keep it dry, clean it gently, and send it back to us if it ever needs a repair.`
                    : "Keep it dry, clean it gently, and send it back to us if it ever needs a repair."}
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* rate this piece — the interactive star widget                 */}
      {/* ------------------------------------------------------------ */}
      <section className="sb-shop-section sb-review">
        <div className="sb-shop-container sb-review-inner">
          <h2 className="sb-section-title">Own this one?</h2>
          <p className="sb-section-note">
            Tell us how it has held up. Ratings from buyers are the only ones we
            publish.
          </p>

          <div
            className="sb-stars"
            role="radiogroup"
            aria-label={`Rate ${product.title}`}
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <input
                key={n}
                type="radio"
                className="sb-star"
                data-star={n}
                name={`rate-${product.id}`}
                id={`rate-${product.id}-${n}`}
                title={`${n} out of 5`}
                aria-label={`${n} out of 5`}
                checked={myRating === n}
                onChange={() => setMyRating(n)}
              />
            ))}
          </div>

          <p className="sb-review-echo">
            {myRating === 0
              ? "Pick a rating above"
              : `You rated this ${myRating} out of 5`}
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* related                                                       */}
      {/* ------------------------------------------------------------ */}
      {related.length > 0 && (
        <section className="sb-shop-section sb-related">
          <div className="sb-shop-container">
            <div className="sb-section-head">
              <p className="sb-eyebrow">More in {product.category}</p>
              <h2 className="sb-section-title">Goes with this</h2>
            </div>

            <ul className="sb-related-grid">
              {related.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className="sb-related-card"
                    onClick={() => navigate(`/Details/${item.id}`)}
                  >
                    <span className="sb-related-media">
                      <img src={item.image} alt={item.title} loading="lazy" />
                    </span>
                    <span className="sb-related-name">{item.title}</span>
                    <span className="sb-related-price">
                      {money(item.price)}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}