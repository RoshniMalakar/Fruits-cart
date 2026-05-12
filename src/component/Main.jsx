import React from "react";
import Navbar from "./Navbar";
import "../style/Main.css";
function Main({ fruit, cart, setCart }) {
  return (
    <div className="card">
      <div className="image">
        <img src={fruit.image} alt={fruit.name} className="card-img" />
      </div>
      <div className="card-body">
        <h2>{fruit.name}</h2>
        <p className="season">Season : {fruit.season}</p>
        <p className="description">{fruit.description}</p>
        <div className="card-footer">
          <p className="price">₹{fruit.price}</p>
          <button
            className="btn"
            onClick={() => {
              setCart(cart + 1);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default Main;
