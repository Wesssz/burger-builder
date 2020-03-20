import React from "react";
import style from "./Burger.module.css";
import Bacon from "../Atoms/Bacon";
import BreadTop from "../Atoms/BreadTop";
import Salad from "../Atoms/Salad";
import Cheese from "../Atoms/Cheese";
import Meat from "../Atoms/Meat";
import BreadBottom from "../Atoms/BreadBottom";

const Burger = props => {
  const currentBurger = props.burgerState.map(item => {
    switch (item) {
      case "salad":
        return <Salad />;
      case "bacon":
        return <Bacon />;
      case "cheese":
        return <Cheese />;
      case "meat":
        return <Meat />;
      default:
        return null;
    }
  });

  return (
    <div className={style.Burger}>
      <BreadTop />
      {currentBurger}
      <BreadBottom />
    </div>
  );
};

export default Burger;
