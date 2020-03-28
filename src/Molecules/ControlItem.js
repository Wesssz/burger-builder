import React from "react";
import style from "./ControlItem.module.css";
import Button from "../Atoms/Button";

const ControlItem = ({ addSpread, removeSpread, spread, disabled }) => {
  return (
    <div className={style.ControlItem}>
      <div className={style.ItemText}>{spread}</div>
      <Button
        clickAction={() => removeSpread(spread)}
        button="-"
        disabled={disabled[spread]}
        styleClass="AddRemove"
      />
      <Button
        clickAction={() => addSpread(spread)}
        button="+"
        styleClass="AddRemove"
      />
    </div>
  );
};

export default ControlItem;
