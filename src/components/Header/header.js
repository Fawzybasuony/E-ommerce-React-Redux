/** @format */

import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "@mui/material";
import styled from "styled-components";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    // backgroundColor: "#000",
    color: "red",
    marginRight: "8px",
    top: "-15px",
  },
}));
const Header = () => {
  const { selectedProducts } = useSelector((state) => state.counter);

  // Array for icon-based links
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/Shop", label: "Shop" },
    { to: "/Cart", label: "Cart" },
    { to: "/Abute", label: "About" },
    { to: "/Contact", label: "Contact" },
  ];
  const iconLinks = [
    {
      to: "/Cart",
      icon: "fas fa-shopping-cart",
      badge: (
        <StyledBadge
          badgeContent={selectedProducts.length}
          style={{ paddingBottom: "30px" }}
        />
      ),
    },
    { to: "/", icon: "fab fa-twitter" },
    { to: "/", icon: "fab fa-instagram" },
  ];
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">
          <div className="container">
            <h4 className="navbar-brand">
              <i className="text-danger fa-brands fa-shopify"></i>
            </h4>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon m-0" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* Main Navigation Links */}
              <ul className="navbar-nav me-auto">
                {navLinks.map((link, index) => (
                  <li className="nav-item" key={index}>
                    <NavLink className="nav-link" to={link.to}>
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Icon Links */}
              <ul className="navbar-nav d-flex align-items-center flex-row">
                {iconLinks.map((iconLink, index) => (
                  <li className="nav-item me-3 me-lg-0" key={index}>
                    <Link className="nav-link" to={iconLink.to}>
                      <i className={`${iconLink.icon} mt-md-0`} />
                      {iconLink.badge && iconLink.badge}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
