import React from "react";
import style from "./CheckoutWindow.module.css";

const CheckoutWindow = ({ burgerState, currentPrice }) => {
  const itemsToShow = Object.keys(burgerState).map(item => {
    return (
      <li key={item}>
        {item}: {burgerState[item]}
      </li>
    );
  });

  const orderHandler = () => {
    alert("Your burger will be delivered shortly");
  };

  return (
    <div className={style.CheckoutWindow}>
      <div className={style.Title}>Your order</div>
      <ul className={style.Spread}>{itemsToShow}</ul>
      <div className={style.Price}>${currentPrice.toFixed(2)}</div>
      <div style={{ flexFlow: "row" }}>
        <div className={style.Query}>Would you like to proceed?</div>
        <button className={style.OrderButton} onClick={orderHandler}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CheckoutWindow;
