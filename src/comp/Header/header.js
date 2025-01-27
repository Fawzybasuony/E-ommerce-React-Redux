/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "@mui/material";
import styled from "styled-components";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    // backgroundColor: "#000",
    color: "red",
    marginRight: "8px",
    top: "-16px",
  },
}));
const Header = () => {
  const { selectedProducts } = useSelector((state) => state.counter);

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
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Shop">
                    Shop
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/Cart">
                    Cart
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Abute">
                    About
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/Contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav d-flex flex-row">
                <li className="nav-item me-3 me-lg-0">
                  <NavLink className="nav-link" to="/Cart">
                    <i className="fas fa-shopping-cart  mt-md-0 " />

                    <StyledBadge
                      badgeContent={selectedProducts.length}
                    ></StyledBadge>
                  </NavLink>
                </li>
                <li className="nav-item me-3 me-lg-0">
                  <NavLink className="nav-link" to="/">
                    <i className="fab fa-twitter" />
                  </NavLink>
 
                </li>
                <li className="nav-item me-3 me-lg-0">
                  <NavLink className="nav-link" to="/">
                    <i className="fab fa-instagram" />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
