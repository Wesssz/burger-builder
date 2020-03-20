import React from "react";
import style from "./Burger.module.css";
import Spread from "../Atoms/Spread";
import Bread from "../Atoms/Bread";

const Burger = ({ burgerState }) => {
  let currentBurger = Object.entries(burgerState)
    .map(item => {
      let itemsToReturn = [];
      let counter = item[1];

      while (counter > 0) {
        itemsToReturn = [
          ...itemsToReturn,
          <Spread spread={item[0]} key={item + counter} />
        ];
        counter -= 1;
      }
      return itemsToReturn;
    })
    .reduce((arr, item) => {
      return arr.concat(item);
    }, []);

  if (currentBurger.length === 0) {
    currentBurger = "Please add something to your burger";
  }

  return (
    <div className={style.Burger}>
      <Bread bread="Top" top="top" />
      {currentBurger}
      <Bread bread="Bottom" />
    </div>
  );
};

export default Burger;
