import React from "react";
import ControlItem from "../Molecules/ControlItem";

const ControlMenu = ({ addSpread, removeSpread, burgerState, disabled }) => {
  const itemsToShow = Object.keys(burgerState).map((item, index) => {
    return (
      <ControlItem
        addSpread={addSpread}
        removeSpread={removeSpread}
        spread={item}
        disabled={disabled}
        key={index}
      />
    );
  });

  return <div>{itemsToShow}</div>;
};

export default ControlMenu;
