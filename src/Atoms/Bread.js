import React from "react";
import style from "./Bread.module.css";

const Bread = props => {
  const Seeds = () => {
    return props.top ? <div className={style.Seeds}></div> : null;
  };

  return (
    <div className={style.Bread}>
      {props.top ? <div className={style.Flag}>Wes Burgers Ltd</div> : null}
      {props.top ? <div className={style.FlagPole}></div> : null}
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
