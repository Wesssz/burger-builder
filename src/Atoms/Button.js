import React from "react";
import style from "./Button.module.css";

const Button = ({ clickAction, button, disabled, styleClass }) => {
  return (
    <button
      onClick={clickAction}
      className={style[styleClass]}
      disabled={disabled}
    >
      {button}
    </button>
  );
};

export default Button;
