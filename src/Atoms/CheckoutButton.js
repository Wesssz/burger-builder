import React from "react";
import style from "./CheckoutButton.module.css";

const Button = ({ clickAction, button, disabled }) => {
  return (
    <button
      onClick={clickAction}
      className={style.CheckoutButton}
      disabled={disabled}
    >
      {button}
    </button>
  );
};

export default Button;
