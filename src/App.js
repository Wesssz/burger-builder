import React, { useState } from "react";
import "./App.css";
import Burger from "./Molecules/Burger";
import ControlMenu from "./Organisms/ControlMenu";
import CheckoutModal from "./Molecules/CheckoutModal";
import BackDrop from "./Atoms/BackDrop";
import CheckoutWindow from "./Atoms/CheckoutWindow";
import Button from "./Atoms/Button";

const App = () => {
  const [burgerState, setBurgerState] = useState({
    Salad: 1,
    Bacon: 1,
    Cheese: 1,
    Meat: 1
  });
  const [currentPrice, setCurrentPrice] = useState(7);
  const [showCheckout, setShowCheckout] = useState(false);

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

  const showCheckoutHandler = () => {
    setShowCheckout(true);
  };

  const hideCheckoutHandler = () => {
    setShowCheckout(false);
  };

  return (
    <div className="App">
      <CheckoutModal show={showCheckout}>
        <BackDrop click={hideCheckoutHandler} />
        <CheckoutWindow burgerState={burgerState} />
      </CheckoutModal>
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
      <Button button="Go to Checkout?" clickAction={showCheckoutHandler} />
    </div>
  );
};

export default App;
