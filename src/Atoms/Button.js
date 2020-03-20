import React from "react";
import style from "./Button.module.css";

const Button = props => {
  return (
    <button onClick={props.onClick} className={style.Button}>
      {props.button}
    </button>
  );
};

export default Button;
