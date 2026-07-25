/** @format */

import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { Badge, IconButton } from "@mui/material";
import { FaShoppingCart, FaInstagram, FaTwitter, FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/cart", label: "Cart" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

// Small hand-drawn asterisk mark — the signature element, stands in for a
// price-tag / bloom mark rather than a stock cart or storefront icon.
const LogoMark = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2v20M4.5 6.5l15 11M19.5 6.5l-15 11"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { selectedProducts } = useSelector((state) => state.counter);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`sb-header-wrapper ${scrolled ? "is-scrolled" : ""}`}>
      <motion.nav
        className={`sb-navbar ${scrolled ? "is-scrolled" : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="sb-row">
          {/* Brand Logo */}
          <Link to="/" className="sb-logo">
            <motion.div
              className="sb-logo-mark"
              whileHover={{ scale: 1.12, rotate: -8 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <LogoMark />
            </motion.div>
            <span className="sb-logo-text">
              Store<em>Brand</em>
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="sb-links">
            {navLinks.map((link) => (
              <li className="sb-link-item" key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => `sb-link ${isActive ? "is-active" : ""}`}
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.div
                          className="sb-active-indicator"
                          layoutId="activeNavIndicator"
                          transition={{ type: "spring", stiffness: 350, damping: 28 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Action Icons */}
          <div className="sb-actions">
            <Link to="/cart">
              <IconButton size="small">
                <motion.div
                  key={selectedProducts?.length}
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="sb-icon-btn">
                    <Badge className="sb-cart-badge" badgeContent={selectedProducts?.length || 0}>
                      <FaShoppingCart  />
                    </Badge>
                  </div>
                </motion.div>
              </IconButton>
            </Link>

            <div className="sb-social">
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <motion.div className="sb-icon-btn" whileHover={{ y: -2 }}>
                  <FaTwitter size={16} />
                </motion.div>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <motion.div className="sb-icon-btn" whileHover={{ y: -2 }}>
                  <FaInstagram size={16} />
                </motion.div>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="sb-mobile-toggle">
              <IconButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <div className="sb-icon-btn">
                  {mobileMenuOpen ? <FaTimes size={19} /> : <FaBars size={19} />}
                </div>
              </IconButton>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="sb-mobile-panel"
            >
              <div className="sb-mobile-links">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) => `sb-mobile-link ${isActive ? "is-active" : ""}`}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Header;