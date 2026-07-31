/** @format */

import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Add, Remove, DeleteOutline } from "@mui/icons-material";
import Swal from "sweetalert2";

import {
  deleteProdact,
  incrementByAmount,
  deecreasQuontity,
} from "../../Radox/mydataSlice.js";
import "./Cart.css";
import SEO from "../../helpers/SEO.jsx";

/* ------------------------------------------------------------------ */
/* config — change these two lines to match your routes / policy       */
/* ------------------------------------------------------------------ */

const SHOP_ROUTE = "/Shop";
const FREE_SHIPPING_AT = 150;
const SHIPPING_FLAT = 12;

/* ------------------------------------------------------------------ */
/* helpers                                                             */
/* ------------------------------------------------------------------ */

const money = (n) =>
  `$${Number(n || 0).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const plate = (id) => `\u2116 ${String(id).padStart(3, "0")}`;

const qtyOf = (item) => Math.max(1, Number(item.qontity) || 1);

/* ------------------------------------------------------------------ */
/* page                                                                */
/* ------------------------------------------------------------------ */

const Cart = () => {
  const { selectedProducts } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { subtotal, units } = useMemo(
    () =>
      selectedProducts.reduce(
        (acc, item) => {
          const qty = qtyOf(item);
          acc.subtotal += Number(item.price) * qty;
          acc.units += qty;
          return acc;
        },
        { subtotal: 0, units: 0 }
      ),
    [selectedProducts]
  );

  const shipping = subtotal >= FREE_SHIPPING_AT ? 0 : SHIPPING_FLAT;
  const total = subtotal + shipping;
  const missing = Math.max(0, FREE_SHIPPING_AT - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_AT) * 100);

  const confirmRemove = (item) => {
    Swal.fire({
      title: "Remove this piece?",
      text: item.title,
      icon: undefined,
      showCancelButton: true,
      confirmButtonText: "Remove",
      cancelButtonText: "Keep it",
      confirmButtonColor: "#b6572f",
      cancelButtonColor: "#63665a",
      reverseButtons: true,
    }).then((res) => {
      if (res.isConfirmed) dispatch(deleteProdact(item));
    });
  };

  /* ---------------------------------------------------------------- */
  /* empty bag                                                         */
  /* ---------------------------------------------------------------- */
  if (selectedProducts.length < 1) {
    return (
      <div className="sb-cart">
        <section className="sb-shop-section">
          <div className="sb-shop-container">
            <div className="sb-empty">
              <p className="sb-features-eyebrow">Your bag</p>
              <p className="sb-empty-title">Your bag is empty.</p>
              <p className="sb-empty-body">
                Nothing here yet. The catalogue is restocked weekly, so there is
                usually something new to find.
              </p>
              <button
                type="button"
                className="sb-btn sb-btn-solid"
                onClick={() => navigate(SHOP_ROUTE)}
              >
                Browse the catalogue
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  /* ---------------------------------------------------------------- */
  /* bag with items                                                    */
  /* ---------------------------------------------------------------- */
  return (
    <>
      <SEO 
        title="Shopping Cart" 
        description="Review your selected items and proceed to secure checkout."
        noindex={true}
      />
    <div className="sb-cart">
      {/* masthead */}
      <section className="sb-shop-section sb-cart-head">
        <div className="sb-shop-container">
          <p className="sb-features-eyebrow">Your bag</p>
          <h1 className="sb-cart-title">
            Ready when <em>you are</em>
          </h1>
          <p className="sb-cart-count">
            {selectedProducts.length} piece
            {selectedProducts.length === 1 ? "" : "s"} · {units} item
            {units === 1 ? "" : "s"}
          </p>
        </div>
      </section>

      {/* body */}
      <section className="sb-shop-section sb-cart-body">
        <div className="sb-shop-container sb-cart-layout">
          {/* ---------------- line items ---------------- */}
          <ul className="sb-bag-list">
            {selectedProducts.map((item) => {
              const qty = qtyOf(item);
              const lineTotal = Number(item.price) * qty;

              return (
                <li key={item.id} className="sb-bag-item">
                  <button
                    type="button"
                    className="sb-bag-thumb"
                    onClick={() => navigate(`/Details/${item.id}`)}
                    aria-label={`View details for ${item.title}`}
                  >
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </button>

                  <div className="sb-bag-info">
                    <p className="sb-bag-ref">
                      {plate(item.id)}
                      {item.category && (
                        <span className="sb-bag-cat"> · {item.category}</span>
                      )}
                    </p>

                    <h3
                      className="sb-bag-name"
                      onClick={() => navigate(`/Details/${item.id}`)}
                    >
                      {item.title}
                    </h3>

                    <p className="sb-bag-unit">{money(item.price)} each</p>
                  </div>

                  <div className="sb-bag-actions">
                    <div className="sb-qty" aria-label="Quantity">
                      <button
                        type="button"
                        className="sb-qty-btn"
                        aria-label="Decrease quantity"
                        disabled={qty <= 1}
                        onClick={() => dispatch(deecreasQuontity(item))}
                      >
                        <Remove fontSize="small" />
                      </button>

                      <span className="sb-qty-value">{qty}</span>

                      <button
                        type="button"
                        className="sb-qty-btn"
                        aria-label="Increase quantity"
                        onClick={() => dispatch(incrementByAmount(item))}
                      >
                        <Add fontSize="small" />
                      </button>
                    </div>

                    <span className="sb-bag-line">{money(lineTotal)}</span>

                    <button
                      type="button"
                      className="sb-bag-remove"
                      onClick={() => confirmRemove(item)}
                      aria-label={`Remove ${item.title}`}
                    >
                      <DeleteOutline fontSize="small" />
                      <span>Remove</span>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* ---------------- summary ---------------- */}
          <aside className="sb-summary">
            <div className="sb-summary-card">
              <h2 className="sb-summary-title">Order summary</h2>

              <div className="sb-summary-rows">
                <div className="sb-summary-row">
                  <span>Subtotal</span>
                  <span>{money(subtotal)}</span>
                </div>

                <div className="sb-summary-row">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : money(shipping)}</span>
                </div>
              </div>

              <div className="sb-summary-total">
                <span>Total</span>
                <span className="sb-summary-amount">{money(total)}</span>
              </div>

              {/* free-shipping meter */}
              <div className="sb-ship-meter">
                <div
                  className="sb-ship-track"
                  role="progressbar"
                  aria-valuenow={Math.round(progress)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span
                    className="sb-ship-fill"
                    style={{ inlineSize: `${progress}%` }}
                  />
                </div>
                <p className="sb-ship-note">
                  {missing > 0
                    ? `${money(missing)} away from free shipping`
                    : "Free shipping unlocked"}
                </p>
              </div>

              <button type="button" className="sb-btn sb-btn-solid sb-checkout">
                Checkout
              </button>

              <button
                type="button"
                className="sb-summary-link"
                onClick={() => navigate(SHOP_ROUTE)}
              >
                Keep shopping
              </button>

              <p className="sb-summary-fine">
                Thirty days to return anything, return label on us. Taxes are
                calculated at checkout.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
    </>
  );
};

export default Cart;