import React from "react";
import style from "./ChangeIngredients.module.css";
import Button from "../Atoms/Button";
import Spread from "../Atoms/Spread";

const ChangeIngredients = ({ addSpread, removeSpread, spread }) => {
  return (
    <div className={style.ChangeIngredients}>
      <Spread spread={spread} />
      <Button onClick={() => addSpread(spread)} button="More" />
      <Button onClick={() => removeSpread(spread)} button="Less" />
    </div>
  );
};

export default ChangeIngredients;
