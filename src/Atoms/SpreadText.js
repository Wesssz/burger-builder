import React from "react";
import style from "./SpreadText.module.css";

const SpreadText = ({ spread }) => {
  return <div className={style.Spread}>{spread}</div>;
};

export default SpreadText;
