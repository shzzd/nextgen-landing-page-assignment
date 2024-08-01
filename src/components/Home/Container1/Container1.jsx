import React from "react";
import arrow from "../../../assets/arrow1.png";
import classes from "./Container1.module.css";

export default function Container1() {
  return (
    <div className={classes.wrapper}>
      <div></div>
      <p>Welcome to Grand Shop</p>
      <p>A Single Line of Motto Text</p>
      <div>
        Main CTA 1 <img src={arrow} alt="" />
      </div>
    </div>
  );
}
