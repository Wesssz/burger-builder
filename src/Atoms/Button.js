import React from "react";
import style from "./Button.module.css";

const Button = ({ clickAction, button, disabled }) => {
  return (
    <button onClick={clickAction} className={style.Button} disabled={disabled}>
      {button}
    </button>
  );
};

export default Button;
