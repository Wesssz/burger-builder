import React from "react";
import style from "./ControlItem.module.css";
import Button from "../Atoms/Button";
import SpreadText from "../Atoms/SpreadText";

const ControlItem = ({ addSpread, removeSpread, spread, disabled }) => {
  return (
    <div className={style.ControlItem}>
      <SpreadText spread={spread} />
      <Button
        clickAction={() => removeSpread(spread)}
        button="Less"
        disabled={disabled[spread]}
      />
      <Button clickAction={() => addSpread(spread)} button="More" />
    </div>
  );
};

export default ControlItem;
