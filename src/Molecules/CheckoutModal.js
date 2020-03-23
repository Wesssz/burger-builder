import React from "react";
import style from "./CheckoutModal.module.css";

const CheckoutModal = props => {
  return (
    <div
      className={style.CheckoutModal}
      style={{ transform: props.show ? "translateY(0)" : "translateY(-100vh)" }}
    >
      {props.children}
    </div>
  );
};

export default CheckoutModal;
