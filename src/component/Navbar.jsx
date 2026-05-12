import React, { useState } from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";
function Navbar({ filterItem, cart}) {
  return (
    <>
      <div className="navbar">
        <div className="btn-group">
          <button onClick={() => filterItem("All")}>
            <Link to="/" className="link">
              All
            </Link>
          </button>
          <button onClick={() => filterItem("Summer")}>Summer</button>
          <button onClick={() => filterItem("Winter")}>Winter</button>
          <button onClick={() => filterItem("Rainy")}>Rainy</button>
          <button onClick={() => filterItem("Autumn")}>Autumn</button>
        </div>
        <div className="cart">
          <p>
            <b>
              <Link to="/cart" className="link">
                Cart<sup>{cart}</sup>
              </Link>
            </b>
          </p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
