import React from "react";
import ChangeIngredients from "../Molecules/ChangeIngredients";

const ChangeContainer = ({ addSpread, removeSpread, ingredients }) => {
  const buttonsToShow = ingredients.map((item, index) => {
    return (
      <ChangeIngredients
        addSpread={addSpread}
        removeSpread={removeSpread}
        spread={item}
        key={index}
      />
    );
  });
  return (
    <div>
      {buttonsToShow}
      {/* useContext? */}
    </div>
  );
};

export default ChangeContainer;
