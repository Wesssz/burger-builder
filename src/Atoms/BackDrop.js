import React from "react";
import style from "./BackDrop.module.css";

const BackDrop = ({ click }) => {
  return <div className={style.BackDrop} onClick={click}></div>;
};

export default BackDrop;
