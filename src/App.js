import React, { useState } from "react";
import "./App.css";
import Burger from "./Molecules/Burger";
import ChangeContainer from "./Organisms/ChangeContainer";

const App = () => {
  const [burgerState, setBurgerState] = useState([]);
  const [currentPrice, setCurrentPrice] = useState(4);

  const ingredients = ["bacon", "cheese", "meat", "salad"];

  const addSpread = spread => {
    const newBurgerState = [...burgerState, spread];
    setBurgerState(newBurgerState);
  };

  const removeSpread = spread => {
    const newBurgerState = [...burgerState];
    const spreadIndex = burgerState.indexOf(spread);
    if (spreadIndex !== -1) {
      newBurgerState.splice(spreadIndex, 1);
      setBurgerState([...newBurgerState]);
    }
  };

  return (
    <div className="App">
      <div className="Temp">Burger Builder - Toolbar, SideDrawer, Backdrop</div>
      <Burger burgerState={burgerState} />
      <div style={{ width: "100%", justifyContent: "center" }}>
        Current price is ${currentPrice.toFixed(2)}
      </div>
      <ChangeContainer
        addSpread={addSpread}
        removeSpread={removeSpread}
        ingredients={ingredients}
      />
    </div>
  );
};

export default App;
