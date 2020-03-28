import React from "react";
import ControlItem from "../Molecules/ControlItem";
import CheckoutButton from "../Atoms/CheckoutButton";
import style from "./ControlMenu.module.css";

const ControlMenu = ({
  addSpread,
  removeSpread,
  burgerState,
  disabled,
  showCheckoutHandler,
  currentPrice
}) => {
  const itemsToShow = Object.keys(burgerState).map((item, index) => {
    return (
      <ControlItem
        addSpread={addSpread}
        removeSpread={removeSpread}
        spread={item}
        disabled={disabled}
        key={index}
      />
    );
  });

  return (
    <div className={style.ControlMenu}>
      <div className={style.ItemContainer}>{itemsToShow}</div>
      <div className={style.PriceAndButtonContainer}>
        <div className={style.PriceDisplay}>
          Current price is ${currentPrice.toFixed(2)}
        </div>
        <CheckoutButton button="Order" clickAction={showCheckoutHandler} />
      </div>
    </div>
  );
};

export default ControlMenu;
