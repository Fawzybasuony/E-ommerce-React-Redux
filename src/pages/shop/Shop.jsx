import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Aos from "aos";

import { Add } from "../../Radox/mydataSlice";
import data from "../../data.json";
import "./shoop.css";
import SEO from "../../helpers/SEO";

/* ------------------------------------------------------------------ */
/* helpers                                                             */
/* ------------------------------------------------------------------ */

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "rating", label: "Top rated" },
  { value: "name", label: "A – Z" },
];

const money = (n) =>
  `$${Number(n || 0).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

/* catalogue reference, e.g. № 004 — derived from the product id */
const plate = (id) => `\u2116 ${String(id).padStart(3, "0")}`;

const ratingOf = (item) =>
  typeof item.rating === "number" ? item.rating : item.rating?.rate ?? 0;

const reviewsOf = (item) =>
  typeof item.rating === "object" ? item.rating?.count ?? 0 : 0;

/* ------------------------------------------------------------------ */
/* read-only rating — fills the stars fractionally (4.5 shows a half)  */
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
        {value.toFixed(1)} <span aria-hidden="true">·</span> {count}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* page                                                                */
/* ------------------------------------------------------------------ */

export default function Shop() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { selectedProductsID } = useSelector((state) => state.counter);

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("featured");
  const [liked, setLiked] = useState({});

  useEffect(() => {
    Aos.init({ duration: 700, once: true, offset: 60 });
  }, []);

  /* data.json is imported directly — no fetch needed */
  const products = useMemo(() => (Array.isArray(data) ? data : []), []);

  const categories = useMemo(
    () => ["all", ...new Set(products.map((p) => p.category).filter(Boolean))],
    [products]
  );

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();

    const list = products.filter((item) => {
      const inCategory = category === "all" || item.category === category;
      const inQuery =
        !q ||
        `${item.title} ${item.description} ${item.category}`
          .toLowerCase()
          .includes(q);
      return inCategory && inQuery;
    });

    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => ratingOf(b) - ratingOf(a));
    if (sort === "name") list.sort((a, b) => a.title.localeCompare(b.title));

    return list;
  }, [products, query, category, sort]);

  const addedToast = () =>
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Added to your cart",
      toast: true,
      showConfirmButton: false,
      timer: 1600,
      timerProgressBar: true,
    });

  const alreadyToast = () =>
    Swal.fire({
      position: "top-end",
      icon: "info",
      title: "This one is already in your cart",
      toast: true,
      showConfirmButton: false,
      timer: 1600,
    });

  const clearFilters = () => {
    setQuery("");
    setCategory("all");
    setSort("featured");
  };

  return (
    <>
      <SEO 
        title="Shop Catalogue" 
        description="Browse our active catalogue of small-batch products, full-grain leather goods, and merino wool items."
      />
    <div className="sb-shop">
      {/* ------------------------------------------------------------ */}
      {/* masthead                                                      */}
      {/* ------------------------------------------------------------ */}
      <section className="sb-shop-section sb-masthead">
        <div className="sb-shop-container  ">
          <p className="sb-features-eyebrow">Catalogue</p>

          <h1 className="sb-masthead-title">
            Our curated <em>collection</em>
          </h1>

          <p className="sb-masthead-lead  ">
            Chosen by hand, kept in small runs. Everything on this page is in
            stock today and leaves the workshop within two days.
          </p>

          <dl className="sb-masthead-meta">
            <div className="sb-meta-item">
              <dt>Pieces</dt>
              <dd>{String(products.length).padStart(2, "0")}</dd>
            </div>
            <div className="sb-meta-item">
              <dt>Categories</dt>
              <dd>{String(categories.length - 1).padStart(2, "0")}</dd>
            </div>
            <div className="sb-meta-item">
              <dt>Restock</dt>
              <dd>Weekly</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* filter bar                                                    */}
      {/* ------------------------------------------------------------ */}
      <section className="sb-shop-section sb-toolbar">
        <div className="sb-shop-container sb-toolbar-inner">
          <div className="sb-chips" role="tablist" aria-label="Categories">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={category === c}
                className={`sb-chip${category === c ? " is-active" : ""}`}
                onClick={() => setCategory(c)}
              >
                {c === "all" ? "Everything" : c}
              </button>
            ))}
          </div>

          <div className="sb-toolbar-controls">
            <div className="sb-search">
              <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the catalogue"
                aria-label="Search the catalogue"
              />
            </div>

            <label className="sb-sort">
              <span className="sb-sort-label">Sort</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                aria-label="Sort products"
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* grid                                                          */}
      {/* ------------------------------------------------------------ */}
      <section className="sb-shop-section sb-grid-section">
        <div className="sb-shop-container">
          <p className="sb-result-line">
            Showing {visible.length} of {products.length} pieces
            {category !== "all" && <span> in {category}</span>}
          </p>

          {visible.length === 0 ? (
            <div className="sb-empty">
              <p className="sb-empty-title">Nothing matches that search.</p>
              <p className="sb-empty-body">
                Try a shorter word, or clear the filters to see the full
                catalogue.
              </p>
              <button
                type="button"
                className="sb-btn sb-btn-solid"
                onClick={clearFilters}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="sb-grid">
              {visible.map((item, i) => {
                const inCart = selectedProductsID.includes(item.id);
                const isLiked = !!liked[item.id];
                const openDetails = () => navigate(`/Details/${item.id}`);

                return (
                  <article
                    key={item.id}
                    className="sb-card"
                    data-aos="fade-up"
                    data-aos-delay={(i % 4) * 70}
                  >
                    {/* ---- media ---- */}
                    <div className="sb-card-media">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        onClick={openDetails}
                      />

                      <div className="sb-card-flags">
                        {item.tag && (
                          <span
                            className={`sb-flag sb-flag-${item.tag.toLowerCase()}`}
                          >
                            {item.tag}
                          </span>
                        )}
                        {item.stock > 0 && item.stock <= 3 && (
                          <span className="sb-flag sb-flag-low">
                            Only {item.stock} left
                          </span>
                        )}
                      </div>

                      <button
                        type="button"
                        className={`sb-like${isLiked ? " is-liked" : ""}`}
                        aria-pressed={isLiked}
                        aria-label={
                          isLiked ? "Remove from wishlist" : "Save to wishlist"
                        }
                        onClick={() =>
                          setLiked((prev) => ({
                            ...prev,
                            [item.id]: !prev[item.id],
                          }))
                        }
                      >
                        <i
                          className={`fa-heart ${
                            isLiked ? "fa-solid" : "fa-regular"
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      <span className="sb-card-ref">{plate(item.id)}</span>

                      <button
                        type="button"
                        className="sb-card-view"
                        onClick={openDetails}
                      >
                        View details
                        <i
                          className="fa-solid fa-arrow-right sb-card-view-arrow"
                          aria-hidden="true"
                        />
                      </button>
                    </div>

                    {/* ---- body ---- */}
                    <div className="sb-card-body">
                      <div className="sb-card-top">
                        {item.category && (
                          <span className="sb-card-cat">{item.category}</span>
                        )}
                        <Rating value={ratingOf(item)} count={reviewsOf(item)} />
                      </div>

                      <h3 className="sb-card-title" onClick={openDetails}>
                        {item.title}
                      </h3>

                      <p className="sb-card-desc">{item.description}</p>

                      {item.material && (
                        <p className="sb-card-material">{item.material}</p>
                      )}

                      {Array.isArray(item.colors) && item.colors.length > 0 && (
                        <ul
                          className="sb-swatches"
                          aria-label={`${item.colors.length} colours available`}
                        >
                          {item.colors.map((c) => (
                            <li
                              key={c}
                              className="sb-swatch"
                              style={{ backgroundColor: c }}
                            />
                          ))}
                        </ul>
                      )}

                      <div className="sb-card-foot">
                        <div className="sb-price-block">
                          <span className="sb-card-price">
                            {money(item.price)}
                          </span>
                          {item.oldPrice && (
                            <s className="sb-card-oldprice">
                              {money(item.oldPrice)}
                            </s>
                          )}
                        </div>

                        {inCart ? (
                          <button
                            type="button"
                            className="sb-btn sb-btn-done"
                            onClick={alreadyToast}
                          >
                            <i className="fa-solid fa-check" aria-hidden="true" />
                            In cart
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="sb-btn sb-btn-solid"
                            onClick={() => {
                              dispatch(Add(item));
                              addedToast();
                            }}
                          >
                            <i
                              className="fa-solid fa-cart-plus"
                              aria-hidden="true"
                            />
                            Add to cart
                          </button>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* promise strip                                                 */}
      {/* ------------------------------------------------------------ */}
      <section className="sb-shop-section sb-promise">
        <div className="sb-shop-container sb-promise-grid">
          <div className="sb-promise-item">
            <h4 className="sb-promise-title">Shipped in 48 hours</h4>
            <p className="sb-promise-body">
              Orders placed before 4pm leave the workshop the next working day.
            </p>
          </div>
          <div className="sb-promise-item">
            <h4 className="sb-promise-title">Thirty days to decide</h4>
            <p className="sb-promise-body">
              Send anything back within a month and we cover the return label.
            </p>
          </div>
          <div className="sb-promise-item">
            <h4 className="sb-promise-title">Made in small batches</h4>
            <p className="sb-promise-body">
              Short runs, named makers, and no restock we cannot trace.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}