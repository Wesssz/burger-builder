import React from "react";
import style from "./Spread.module.css";

const Spread = ({ spread }) => {
  return <div className={style[spread]}>{spread}</div>;
};

export default Spread;
