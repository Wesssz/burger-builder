import React, { useState } from "react";
import "./App.css";
import Burger from "./Molecules/Burger";
import ControlMenu from "./Organisms/ControlMenu";

const App = () => {
  const [burgerState, setBurgerState] = useState({
    Salad: 0,
    Bacon: 0,
    Cheese: 0,
    Meat: 0
  });
  const [currentPrice, setCurrentPrice] = useState(4);

  const prices = { Bacon: 1.0, Cheese: 0.8, Meat: 1.5, Salad: 0.5 };

  const disabled = { ...burgerState };
  for (let key in disabled) {
    disabled[key] = disabled[key] <= 0;
  }

  const addSpread = spread => {
    const newSpreadCount = burgerState[spread] + 1;
    const newBurgerState = { ...burgerState };
    newBurgerState[spread] = newSpreadCount;
    setBurgerState(newBurgerState);
    const newPrice = currentPrice + prices[spread];
    setCurrentPrice(newPrice);
  };

  const removeSpread = spread => {
    if (burgerState[spread] > 0) {
      const newSpreadCount = burgerState[spread] - 1;
      const newBurgerState = { ...burgerState };
      newBurgerState[spread] = newSpreadCount;
      setBurgerState(newBurgerState);
      const newPrice = currentPrice - prices[spread];
      setCurrentPrice(newPrice);
    }
  };

  return (
    <div className="App">
      <div className="Burger_Builder">Burger Builder</div>
      <Burger burgerState={burgerState} />
      <div style={{ width: "100%", justifyContent: "center" }}>
        Current price is ${currentPrice.toFixed(2)}
      </div>
      <ControlMenu
        addSpread={addSpread}
        removeSpread={removeSpread}
        burgerState={burgerState}
        disabled={disabled}
      />
    </div>
  );
};

export default App;
