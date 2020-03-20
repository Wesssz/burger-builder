import React from "react";
import style from "./Bread.module.css";

const Bread = props => {
  const Seeds = () => {
    return props.top ? <div className={style.Seeds}></div> : null;
  };

  return (
    <div className={style.Bread}>
      <Seeds />
      <Seeds />
      <Seeds />
      <Seeds />
      <Seeds />
      <Seeds />
      <Seeds />
      <Seeds />
      <Seeds />
      <Seeds />
    </div>
  );
};

export default Bread;
