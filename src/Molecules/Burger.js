import React from "react";
import style from "./Burger.module.css";
import Bacon from "../Atoms/Bacon";
import BreadTop from "../Atoms/BreadTop";
import Salad from "../Atoms/Salad";
import Cheese from "../Atoms/Cheese";
import Meat from "../Atoms/Meat";
import BreadBottom from "../Atoms/BreadBottom";

const Burger = ({ burgerState }) => {
  let currentBurger;

  if (burgerState.length === 0) {
    currentBurger = <div>Please add ingredients!</div>;
  } else {
    currentBurger = burgerState.map((item, index) => {
      switch (item) {
        case "salad":
          return <Salad key={index} />;
        case "bacon":
          return <Bacon key={index} />;
        case "cheese":
          return <Cheese key={index} />;
        case "meat":
          return <Meat key={index} />;
        default:
          return null;
      }
    });
  }

  return (
    <div className={style.Burger}>
      <BreadTop />
      {currentBurger}
      <BreadBottom />
    </div>
  );
};

export default Burger;
