import React from "react";
import style from "./Bread.module.css";

const Bread = props => {
  const Seeds = () => {
    return props.bread === "Top" ? <div className={style.Seeds}></div> : null;
  };

  return (
    <div className={style[props.bread]}>
      {props.bread === "Top" ? (
        <div className={style.FlagPole}>
          <div className={style.Flag}>Wes Burgers Ltd</div>
        </div>
      ) : null}
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
