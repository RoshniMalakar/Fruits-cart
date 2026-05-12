import { useState } from "react";
import Main from "./component/Main";
import "./style/Main.css";
import fruitsMenu from "./menuApi";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
function App() {
  const [item, setItem] = useState(fruitsMenu);
  const filterItem = (season) => {
    if (season === "All") {
      setItem(fruitsMenu);
    } else {
      const updateItem = fruitsMenu.filter((curr) => {
        return curr.season === season;
      });
      setItem(updateItem);
    }
  };
  const [cart, setCart] = useState(0);
  return (
    <>
      <Navbar filterItem={filterItem} cart={cart} />
      <div className="container">
        {item.map((fruit) => (
          <Main key={fruit.id} fruit={fruit} cart={cart} setCart={setCart} />
        ))}
      </div>
    </>
  );
}
export default App;
