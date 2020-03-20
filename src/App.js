import React, { useState } from "react";
import "./App.css";
import Burger from "./Molecules/Burger";

const App = () => {
  const [burgerState, setBurgerState] = useState([
    "salad",
    "bacon",
    "bacon",
    "meat"
  ]);
  const [currentPrice, setCurrentPrice] = useState(4);

  return (
    <div className="App">
      <div className="Temp">Burger Builder - Toolbar, SideDrawer, Backdrop</div>
      <Burger burgerState={burgerState} />
      <div>Current price is ${currentPrice.toFixed(2)}</div>
      <div className="Temp">Add / remove ingredients</div>
    </div>
  );
};

export default App;
