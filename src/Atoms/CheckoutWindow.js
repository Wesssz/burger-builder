import React from "react";
import style from "./CheckoutWindow.module.css";

const CheckoutWindow = ({ burgerState }) => {
  const itemsToShow = Object.keys(burgerState).map(item => {
    return (
      <li key={item}>
        {item}: {burgerState[item]}
      </li>
    );
  });

  return (
    <div className={style.CheckoutWindow}>
      <div className={style.Title}>Your order</div>
      <div className={style.Title2}>
        A delicious burger with the following spread:
      </div>
      <ul className={style.Spread}>{itemsToShow}</ul>
      <div className={style.Query}>Continue to checkout?</div>
    </div>
  );
};

export default CheckoutWindow;
